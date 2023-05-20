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
use near_sdk::serde::{ Deserialize, Serialize };
use near_sdk::collections::{ LazyOption, UnorderedMap };
use near_sdk::{ env, near_bindgen, AccountId, BorshStorageKey, PanicOnDefault };

#[derive(BorshSerialize, BorshStorageKey)]
enum StorageKey {
    NonFungibleToken,
    Metadata,
    TokenMetadata,
    Enumeration,
    Approval,
    SoulboundTokens,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
// #[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
#[serde(crate = "near_sdk::serde")]
pub struct SoulboundToken {
    pub token: Token,
    pub soulbound: bool,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct SBTContract {
    tokens: NonFungibleToken,
    metadata: LazyOption<NFTContractMetadata>,
    soulbound_tokens: UnorderedMap<TokenId, SoulboundToken>,
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
            soulbound_tokens: UnorderedMap::new(StorageKey::SoulboundTokens.try_to_vec().unwrap()),
        }
    }

    #[payable]
    pub fn sbt_mint(
        &mut self,
        receiver_id: AccountId,
        token_metadata: TokenMetadata
    ) -> SoulboundToken {
        // assert_eq!(env::predecessor_account_id(), self.tokens.owner_id, "Unauthorized"); //TODO: 권한이 필요할까?

        self.token_id_counter += 1;
        let token_id = self.token_id_counter.to_string();
        let token = self.tokens.internal_mint(token_id.clone(), receiver_id, Some(token_metadata));
        let soulbound_token = SoulboundToken {
            token: token.clone(),
            soulbound: true,
        };
        self.soulbound_tokens.insert(&token_id, &soulbound_token); // !insert Error!

        soulbound_token
    }

    #[payable]
    pub fn sbt_transfer(&mut self, token_id: TokenId, receiver_id: AccountId) {
        self.tokens.nft_transfer(receiver_id, token_id, None, None);
    }

    pub fn sbt_lock(&mut self, token_id: TokenId) {
        assert_eq!(env::predecessor_account_id(), self.tokens.owner_id, "Unauthorized");
        // TODO: need to set soulbound_tokens(token_id) as true
    }

    pub fn sbt_unlock(&mut self, token_id: TokenId) {
        assert_eq!(env::predecessor_account_id(), self.tokens.owner_id, "Unauthorized");
        // TODO: need to set soulbound_tokens(token_id) as false
    }
}