import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getAccountInfo } from "src/apis";
import { GET_ACCOUNT_TX } from "src/constants";

interface AccountData {
    amount: string;
    block_hash: string;
    block_height: number;
    code_hash: string;
    locked: string;
    storage_paid_at: number;
    storage_usage: number;
}

const useGetAccountInfo = ({ accountInfo }: AccountInfo): UseQueryResult<AccountData[]> =>
    useQuery({
        queryKey: [GET_ACCOUNT_TX, accountInfo],
        queryFn: () => {
            if (!accountInfo) return;
            return getAccountInfo(accountInfo);
        },
        enabled: !!accountInfo,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });

export default useGetAccountInfo;
