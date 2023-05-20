import { Account, Contract } from "near-api-js";
import { CONTRACT_ID } from "src/utils/constants";

export const contractInstance = (account: Account) => {
    const contract = new Contract(account, CONTRACT_ID, {
        // name of contract you're connecting to
        viewMethods: ["nft_metadata"], // view methods do not change state but usually return a value
        changeMethods: ["nft_mint"], // change methods modify state
    });
    return contract;
};

export const getContractMetadata = async (account: Account) => {
    const response = contractInstance(account).nft_metadata();
    console.log(response);
    return response;
};
