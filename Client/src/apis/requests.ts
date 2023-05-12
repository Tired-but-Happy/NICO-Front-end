import { exampleInstance } from "./axiosInstances";

const getExampleData = (name: string, page = 1, rpp = 10) =>
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
