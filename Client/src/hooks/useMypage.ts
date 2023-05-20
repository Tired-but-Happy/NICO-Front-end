import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getMyPage } from "src/apis";
import { GET_MY_PAGE } from "src/constants";

const useGetMyPage = ({ account }: AccountData): UseQueryResult<Account[]> =>
    useQuery({
        queryKey: [GET_MY_PAGE, account],
        queryFn: () => {
            if (!account) return;
            return getMyPage(account);
        },
        enabled: !!account,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });

export default useGetMyPage;
