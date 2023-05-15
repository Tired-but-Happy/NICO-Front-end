import { connect } from "near-api-js";
import connectionConfig from "./config";

const initContract = async () => {
    // Set a connection to the NEAR network
    const near = await connect(connectionConfig);

    if (near === undefined) {
        return;
    }

    console.log(near);
    return near;
};

export default initContract;
