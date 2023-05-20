#!/bin/sh

echo ">> Calling new_default_meta"

near call $ID new_default_meta '{"owner_id": "'$ID'"}' --accountId $ID