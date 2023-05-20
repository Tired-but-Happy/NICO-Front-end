import { exampleInstance } from "./axiosInstances";

export const getExampleData = (name: string, page = 1, rpp = 10) =>
    exampleInstance({
        url: "/get/example/data",
        method: "get",
        headers: {},
        params: {
            // query params
            name,
            page,
            rpp,
        },
    });

export const postLogin = (userAddress: string) =>
    exampleInstance({
        url: `/user/login`,
        method: "post",
        headers: {},
        data: {
            userAddress,
        },
    });

export const getMyPage = (account: string) =>
    exampleInstance({
        url: `/mypage/${account}`,
        method: "get",
        headers: {},
        data: {},
    });

export const getAccountTx = (account: string) =>
    exampleInstance({
        url: `https://api.pikespeak.ai/account/transactions/${account}`,
        method: "get",
        headers: {
            accept: "application/json",
            "x-api-key": "20e2fecb-7f5d-4a7d-ad60-6751196ec5ce",
        },
    });

export const getAccountInfo = (accountInfo: string) =>
    exampleInstance({
        url: `/mypage/${accountInfo}`,
        method: "get",
        headers: {},
    });

export const getFtTransfer = (contract: string) =>
    exampleInstance({
        url: `https://api.pikespeak.ai/account/ft-transfer/${contract}`,
        method: "get",
        headers: {
            accept: "application/json",
            "x-api-key": "20e2fecb-7f5d-4a7d-ad60-6751196ec5ce",
        },
    });
