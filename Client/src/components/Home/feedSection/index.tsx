import HotFeedSection from "src/components/Home/feedSection/HotFeedSection";
import { Background, Component2, Frame27, Rectangle9 } from "./FeedSection.styled";
import NearPriceSection from "src/components/Home/feedSection//NearPriceSection";
import TotalMarketCapSection from "src/components/Home/feedSection/TotalMarketCapSection";
import NearNewsSection from "src/components/Home/feedSection/NearNewsSection";

const FeedSection = () => {
    return (
        <>
            <Component2>
                <Rectangle9 />
                <Frame27>
                    <HotFeedSection />
                    <NearPriceSection />
                    <TotalMarketCapSection />
                    <NearNewsSection />
                </Frame27>
                <Background />
            </Component2>
        </>
    );
};

export default FeedSection;
