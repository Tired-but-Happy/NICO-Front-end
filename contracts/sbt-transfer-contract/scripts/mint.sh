#!/bin/sh

echo ">> Calling sbt_mint"

near call $ID sbt_mint '{"receiver_id": "'$ID'", "badge_type": "Newbie" , "token_metadata": '"`cat token.json`}" --accountId $ID --deposit 0.1