import { connect } from "near-api-js";
import connectionConfig from "./config";
import { AccountView } from "near-api-js/lib/providers/provider";

const getAccountDetail = async (accountId: string) => {
    const near = await connect(connectionConfig);
    const accountDetail = await near.connection.provider.query<AccountView>({
        request_type: "view_account",
        account_id: accountId,
        finality: "final",
    });
};

export default getAccountDetail;
