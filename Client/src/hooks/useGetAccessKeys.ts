import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { connect } from "near-api-js";
import { GET_ACCESSKEY } from "src/constants";
import connectionConfig from "src/near/config";

const useGetAccessKeys = ({ account }: AccountData): UseQueryResult<Account[]> =>
    useQuery({
        queryKey: [GET_ACCESSKEY, account],
        queryFn: async () => {
            const near = await connect(connectionConfig);
            const accessKeys = await near.connection.provider.query<AccessKeyList>({
                request_type: "view_access_key_list",
                finality: "final",
                account_id: account,
            });

            return accessKeys;
        },
        enabled: !!account,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });
export default useGetAccessKeys;
