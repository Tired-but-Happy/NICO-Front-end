import queryString from "query-string";
import { useLocation } from "react-router-dom";
import CenterSection from "src/components/accountPage/top/profile/center";
import LeftSection from "src/components/accountPage/top/profile/left";
import RightSection from "src/components/accountPage/top/profile/right";
import useGetAccountInfo from "src/hooks/useAccountInfo";

const ProfileSection = () => {
    const location = useLocation();
    const query = queryString.parse(location.search);

    const dbAccount = useGetAccountInfo({ accountInfo: query.username });

    return (
        <>
            <LeftSection />
            <CenterSection dbAccount={dbAccount} />
            {/* <RightSection data={dbAccount.data} isLoading={dbAccount.isLoading} /> */}
        </>
    );
};

export default ProfileSection;
