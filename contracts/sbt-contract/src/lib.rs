use near_contract_standards::non_fungible_token::core::NonFungibleTokenCore;
/** import near contract standards **/
use near_contract_standards::non_fungible_token::metadata::{
    NFTContractMetadata,
    NonFungibleTokenMetadataProvider,
    TokenMetadata,
    NFT_METADATA_SPEC,
};
use near_contract_standards::non_fungible_token::{ Token, TokenId };
use near_contract_standards::non_fungible_token::NonFungibleToken;

/** import near sdk **/
use near_sdk::borsh::{ self, BorshDeserialize, BorshSerialize };
use near_sdk::collections::{ LazyOption, UnorderedMap };
use near_sdk::{ env, near_bindgen, AccountId, BorshStorageKey, PanicOnDefault };

const DATA_IMAGE_SVG_NEAR_ICON: &str = include_str!("../blockee.txt");

#[derive(BorshSerialize, BorshStorageKey)]
enum StorageKey {
    NonFungibleToken,
    Metadata,
    TokenMetadata,
    Enumeration,
    Approval,
    SoulboundTokens,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct SBTContract {
    tokens: NonFungibleToken,
    metadata: LazyOption<NFTContractMetadata>,
    soulbounds: UnorderedMap<TokenId, bool>,
    token_id_counter: u128, // for auto increasing token ID
}

#[near_bindgen]
impl NonFungibleTokenMetadataProvider for SBTContract {
    fn nft_metadata(&self) -> NFTContractMetadata {
        self.metadata.get().unwrap()
    }
}

#[near_bindgen]
impl SBTContract {
    #[init]
    pub fn new_default_meta(owner_id: AccountId) -> Self {
        Self::new(owner_id, NFTContractMetadata {
            spec: NFT_METADATA_SPEC.to_string(),
            name: "Damon's test NFT".to_string(),
            symbol: "DTN".to_string(),
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
            token_id_counter: 0, // tokenID: start from 0
            soulbounds: UnorderedMap::new(StorageKey::SoulboundTokens.try_to_vec().unwrap()),
        }
    }

    #[payable]
    pub fn sbt_mint(&mut self, receiver_id: AccountId, token_metadata: TokenMetadata) -> Token {
        // ? 권한이 필요할까? -> 유저가 발급 버튼을 눌렀을 때 민팅!
        // ? 그렇다면 민팅 조건은 어떻게 확인하지? -> 오라클 문제..

        self.token_id_counter += 1;
        let token_id = self.token_id_counter.to_string();
        let token = self.tokens.internal_mint(token_id.clone(), receiver_id, Some(token_metadata));
        self.soulbounds.insert(&token_id, &true);

        token
    }

    #[payable]
    pub fn sbt_transfer(&mut self, token_id: TokenId, receiver_id: AccountId) {
        let soulbounds = self.soulbounds.get(&token_id).unwrap_or(false);
        assert!(soulbounds, "It is soulbound, not allowed to transfer");
        self.tokens.nft_transfer(receiver_id, token_id, None, None);
    }

    pub fn is_soulbound(&self, token_id: &TokenId) -> bool {
        self.soulbounds.get(&token_id).unwrap_or(false)
    }

    pub fn sbt_lock(&mut self, token_id: TokenId) {
        assert_eq!(env::predecessor_account_id(), self.tokens.owner_id, "Unauthorized");
        assert!(self.is_soulbound(&token_id), "This token is already locked");
        self.soulbounds.insert(&token_id, &true);
    }

    pub fn sbt_unlock(&mut self, token_id: TokenId) {
        assert_eq!(env::predecessor_account_id(), self.tokens.owner_id, "Unauthorized");
        assert!(!self.is_soulbound(&token_id), "This token is already unlocked");
        self.soulbounds.insert(&token_id, &false);
    }
}