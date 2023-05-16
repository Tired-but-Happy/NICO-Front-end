import { connect } from "near-api-js";
import connectionConfig from "./config";

const initContract = async () => {
    // Set a connection to the NEAR network
    const near = await connect(connectionConfig);

    // const blockInfo = await near.connection.provider.block({
    //     finality: "final",
    // });
    // const response = await near.connection.provider.block({ blockId: 100000000 });
    // console.log(response);

    // console.log(blockInfo);
    return near;
};

export default initContract;
