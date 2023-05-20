import LatestInfoSection from "src/components/landingPage/latestInfoSection";
import SearchTextField from "src/components/landingPage/searchTextField";
import TopicSection from "src/components/landingPage/topicSection";
import { BackGroundBox, Rectangle2 } from "src/components/layout/BackGround.styled";

const LandingPage = () => {
    return (
        <>
            <BackGroundBox>
                <Rectangle2 />
            </BackGroundBox>
            <SearchTextField />
            <TopicSection />
            <LatestInfoSection />
        </>
    );
};

export default LandingPage;
