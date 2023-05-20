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
use near_sdk::{ env, near_bindgen, AccountId, BorshStorageKey, PanicOnDefault, Promise };
use near_sdk::serde::{ Deserialize, Serialize };

#[derive(BorshSerialize, BorshStorageKey)]
enum StorageKey {
    NonFungibleToken,
    Metadata,
    TokenMetadata,
    Enumeration,
    Approval,
    Badge,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub enum BadgeType {
    Nothing,
    Newbie,
    CodingKing,
}
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    tokens: NonFungibleToken,
    metadata: LazyOption<NFTContractMetadata>,
    token_id_counter: u128, // for auto increasing token ID
    badges: UnorderedMap<AccountId, BadgeType>,
}

const DATA_IMAGE_SVG_NEAR_ICON: &str = "";

#[near_bindgen]
impl Contract {
    #[init]
    pub fn new_default_meta(owner_id: AccountId) -> Self {
        Self::new(owner_id, NFTContractMetadata {
            spec: NFT_METADATA_SPEC.to_string(),
            name: "NICO Badge Soulbound Token".to_string(),
            symbol: "NBSBT".to_string(),
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
            token_id_counter: 0,
            badges: UnorderedMap::new(StorageKey::Badge),
        }
    }

    #[payable]
    pub fn sbt_mint(
        &mut self,
        receiver_id: AccountId,
        token_metadata: TokenMetadata,
        badge_type: BadgeType
    ) -> Token {
        assert!(badge_type != BadgeType::Nothing, "Wrong Badge Type");
        assert!(!self.has_badge(&receiver_id, &badge_type), "You already have it");
        self.token_id_counter += 1;
        let token_id = self.token_id_counter.to_string();
        self.badges.insert(&receiver_id, &badge_type);

        self.tokens.internal_mint(token_id, receiver_id, Some(token_metadata))
    }

    pub fn has_badge(&self, account_id: &AccountId, badge_type: &BadgeType) -> bool {
        self.badges.get(&account_id).as_ref() == Some(badge_type)
    }

    pub fn badge_view(&self, account_id: AccountId) -> Option<BadgeType> {
        self.badges.get(&account_id)
    }
}

near_contract_standards::impl_non_fungible_token_approval!(Contract, tokens);
near_contract_standards::impl_non_fungible_token_enumeration!(Contract, tokens);

pub trait SoulboundTokenCore {
    fn nft_transfer(
        &mut self,
        receiver_id: AccountId,
        token_id: TokenId,
        approval_id: Option<u64>,
        memo: Option<String>
    );
}

impl SoulboundTokenCore for NonFungibleToken {
    fn nft_transfer(
        &mut self,
        _receiver_id: AccountId,
        _token_id: TokenId,
        _approval_id: Option<u64>,
        _memo: Option<String>
    ) {
        panic!("Transfer operation is not allowed for Soulbound Tokens.");
    }
}

#[near_bindgen]
impl NonFungibleTokenMetadataProvider for Contract {
    fn nft_metadata(&self) -> NFTContractMetadata {
        self.metadata.get().unwrap()
    }
}