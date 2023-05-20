import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { connect } from "near-api-js";
import { GET_ACCOUNT_DETAIL } from "src/constants";
import connectionConfig from "src/near/config";

interface AccountData {
    account: string | (string | null)[] | null;
}

const useAccountDetail = ({ account }: AccountData): UseQueryResult<AccountData[]> =>
    useQuery({
        queryKey: [GET_ACCOUNT_DETAIL, account],
        queryFn: async () => {
            const near = await connect(connectionConfig);
            const accountDetail = await near.connection.provider.query({
                request_type: "view_account",
                account_id: `${account}`,
                finality: "final",
            });

            return accountDetail;
        },
        enabled: !!account,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });

export default useAccountDetail;
