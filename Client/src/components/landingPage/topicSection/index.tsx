import {
    Background,
    Component2,
    Frame27,
} from "src/components/landingPage/topicSection/TopicSection.styled";
import HotFeedSection from "src/components/landingPage/topicSection/hotFeed";
import NearPriceSection from "src/components/landingPage/topicSection/nearPrice";
import TotalMarketCapSection from "src/components/landingPage/topicSection/totalMarketCap";
import { Rectangle9 } from "src/components/landingPage/topicSection/TopicSection.styled";
import NewsSection from "src/components/landingPage/topicSection/nearNews";

const TopicSection = () => {
    return (
        <Component2>
            {/* background */}
            <Background />

            {/* left */}
            <HotFeedSection />

            {/* bar */}
            <Rectangle9 />

            {/* right - top */}
            <Frame27>
                <NearPriceSection />
                <TotalMarketCapSection />
            </Frame27>

            {/* right - bottom */}
            <NewsSection />
        </Component2>
    );
};

export default TopicSection;
