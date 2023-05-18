use near_contract_standards::non_fungible_token::metadata::{
    NFTContractMetadata,
    NonFungibleTokenMetadataProvider,
    TokenMetadata,
    NFT_METADATA_SPEC,
};
use near_contract_standards::non_fungible_token::{ Token, TokenId };
use near_contract_standards::non_fungible_token::NonFungibleToken;
use near_sdk::borsh::{ self, BorshDeserialize, BorshSerialize };
use near_sdk::collections::{ LazyOption, UnorderedMap };
use near_sdk::serde::{ Deserialize, Serialize };
use near_sdk::{
    env,
    near_bindgen,
    AccountId,
    BorshStorageKey,
    PanicOnDefault,
    Promise,
    PromiseOrValue,
};

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    tokens: NonFungibleToken,
    metadata: LazyOption<NFTContractMetadata>,
    soulbound: UnorderedMap<TokenId, bool>,
}

const DATA_IMAGE_SVG_NEAR_ICON: &str = include_str!("../blockee.txt");

#[derive(BorshSerialize, BorshStorageKey)]
enum StorageKey {
    NonFungibleToken,
    Metadata,
    TokenMetadata,
    Enumeration,
    Approval,
    Soulbound,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(crate = "near_sdk::serde")]
pub struct SoulboundToken {
    pub token: Token,
    pub is_locked: bool,
}

#[near_bindgen]
impl Contract {
    /// Initializes the contract owned by `owner_id` with
    /// default metadata (for example purposes only).
    #[init]
    pub fn new_default_meta(owner_id: AccountId) -> Self {
        Self::new(owner_id, NFTContractMetadata {
            spec: NFT_METADATA_SPEC.to_string(),
            name: "NICO Soulbound Token".to_string(),
            symbol: "NSBT".to_string(),
            icon: Some(DATA_IMAGE_SVG_NEAR_ICON.to_string()),
            base_uri: Some("https://nft.storage/".to_string()),
            reference: None,
            reference_hash: None,
        })
    }

    #[init]
    pub fn new(owner_id: AccountId, metadata: NFTContractMetadata) -> Self {
        assert!(!env::state_exists(), "Already initialized");
        metadata.assert_valid();
        Self {
            tokens: NonFungibleToken::new(
                StorageKey::NonFungibleToken,
                owner_id,
                Some(StorageKey::TokenMetadata),
                Some(StorageKey::Enumeration),
                Some(StorageKey::Approval)
            ),
            metadata: LazyOption::new(StorageKey::Metadata, Some(&metadata)),
            soulbound: UnorderedMap::new(StorageKey::Soulbound),
        }
    }

    #[payable]
    pub fn sbt_mint(
        &mut self,
        token_id: TokenId,
        receiver_id: AccountId,
        token_metadata: TokenMetadata,
        is_locked: bool
    ) -> SoulboundToken {
        assert_eq!(env::predecessor_account_id(), self.tokens.owner_id, "Unauthorized");

        let token = self.tokens.internal_mint(token_id.clone(), receiver_id, Some(token_metadata));
        let soulbound_token = SoulboundToken {
            token: token.clone(),
            is_locked,
        };
        self.soulbound.insert(&token_id, &soulbound_token.is_locked);
        soulbound_token
    }

    /// Check if a token is soulbound.
    pub fn is_token_soulbound(&self, token_id: TokenId) -> bool {
        self.soulbound.get(&token_id).unwrap_or(false)
    }

    // TODO: is_locked 체크 함수 필요한가?

    /// Lock a token, making it soulbound and preventing further transfers.
    pub fn lock_token(&mut self, token_id: TokenId) {
        assert!(self.soulbound.get(&token_id).is_some(), "Token does not exist");
        assert_eq!(env::predecessor_account_id(), self.tokens.owner_id, "Unauthorized");

        self.soulbound.insert(&token_id, &true);
    }

    /// Unlock a token, allowing it to be transferred again.
    pub fn unlock_token(&mut self, token_id: TokenId) {
        assert!(self.soulbound.get(&token_id).is_some(), "Token does not exist");
        assert_eq!(env::predecessor_account_id(), self.tokens.owner_id, "Unauthorized");

        self.soulbound.insert(&token_id, &false);
    }

    pub fn sbt_transfer(
        &mut self,
        receiver_id: AccountId,
        token_id: TokenId,
        approval_id: Option<u64>,
        memo: Option<String>
    ) {
        // TODO: is_locked 체크
        assert!(, "Unauthorized");
        assert_eq!(env::predecessor_account_id(), self.tokens.owner_id, "Unauthorized");

        self.tokens.nft_transfer(receiver_id, token_id, approval_id, memo);
    }
}

near_contract_standards::impl_non_fungible_token_core!(Contract, tokens);
near_contract_standards::impl_non_fungible_token_approval!(Contract, tokens);
near_contract_standards::impl_non_fungible_token_enumeration!(Contract, tokens);

#[near_bindgen]
impl NonFungibleTokenMetadataProvider for Contract {
    fn nft_metadata(&self) -> NFTContractMetadata {
        self.metadata.get().unwrap()
    }
}