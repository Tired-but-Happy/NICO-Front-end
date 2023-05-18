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
