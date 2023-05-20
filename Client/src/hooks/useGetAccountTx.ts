import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getAccountTx } from "src/apis";
import { GET_ACCOUNT_TX } from "src/constants";

const useGetAccountTx = ({ account }: AccountData): UseQueryResult<Account[]> =>
    useQuery({
        queryKey: [GET_ACCOUNT_TX, account],
        queryFn: () => {
            if (!account) return;
            return getAccountTx(account);
        },
        enabled: !!account,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });

export default useGetAccountTx;
