import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { postLogin } from "src/apis";
import { POST_LOGIN } from "src/constants";

const usePostLogin = ({ userAddress }: LoginData): UseQueryResult =>
    useQuery({
        queryKey: [POST_LOGIN, userAddress],
        queryFn: () => {
            if (!userAddress) return;
            return postLogin(userAddress);
        },
        enabled: !!userAddress,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });

export default usePostLogin;
