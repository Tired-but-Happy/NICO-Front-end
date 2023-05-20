import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getFtTransfer } from "src/apis";
import { GET_FT_TRANSFER } from "src/constants";

const useFtTransfer = ({ contract }: ContractData): UseQueryResult<Account[]> =>
    useQuery({
        queryKey: [GET_FT_TRANSFER, contract],
        queryFn: () => {
            if (!contract) return;
            return getFtTransfer(contract);
        },
        enabled: !!contract,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });

export default useFtTransfer;
