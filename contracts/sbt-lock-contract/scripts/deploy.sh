#!/bin/sh

./build.sh

echo ">> Deploying contract"

# https://docs.near.org/tools/near-cli#near-dev-deploy
# near dev-deploy --wasmFile ./target/wasm32-unknown-unknown/release/hello_near.wasm

near deploy --wasmFile res/sbt-lock-contract.wasm --accountId $ID