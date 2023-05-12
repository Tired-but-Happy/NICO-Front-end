import axios from "axios";

// Create axios instance
const exampleInstance = axios.create({
    baseURL: "",
    headers: {},
});

// Set the common actions for exampleInstance
exampleInstance.interceptors.response.use(
    (response) => {
        // actions for success
        return response.data;
    },
    (error) => {
        // actions for fail
        console.error(error);
        return Promise.reject(error);
    }
);

export { exampleInstance };
