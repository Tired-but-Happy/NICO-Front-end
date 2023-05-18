#!/bin/sh

echo ">> Calling nft_mint"

near call $ID nft_mint '{"token_id": "2", "receiver_id": "'$ID'", "is_locked": true, "token_metadata": '"`cat token.json`}" --accountId $ID --deposit 0.1