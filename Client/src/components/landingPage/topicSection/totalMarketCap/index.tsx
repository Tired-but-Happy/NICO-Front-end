import {
    Group47,
    Rectangle60,
    Rectangle63,
} from "src/components/landingPage/topicSection/totalMarketCap/TotalMarketCapSection.styled";
import TotalMarketCapTitle from "src/components/landingPage/topicSection/totalMarketCap/TotalMarketCapTitle";
import TotalMarketContent from "src/components/landingPage/topicSection/totalMarketCap/TotalMarketContent";

const TotalMarketCapSection = () => {
    return (
        <>
            <Group47>
                <Rectangle60 />
                <Rectangle63 />

                <TotalMarketCapTitle>Total market cap</TotalMarketCapTitle>
                <TotalMarketContent />
            </Group47>
        </>
    );
};

export default TotalMarketCapSection;
