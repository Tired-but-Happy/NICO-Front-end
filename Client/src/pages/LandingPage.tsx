import LatestInfoSection from "src/components/landingPage/latestInfoSection";
import SearchTextField from "src/components/landingPage/searchTextField";
import TopicSection from "src/components/landingPage/topicSection";

const LandingPage = () => {
    return (
        <>
            <SearchTextField />
            <TopicSection />
            <LatestInfoSection />
        </>
    );
};

export default LandingPage;
