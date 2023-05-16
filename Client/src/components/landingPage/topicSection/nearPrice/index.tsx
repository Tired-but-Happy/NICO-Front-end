import NearPriceContent from "src/components/landingPage/topicSection/nearPrice/NearPriceContent";
import {
    Group44,
    Rectangle59,
    Rectangle62,
} from "src/components/landingPage/topicSection/nearPrice/NearPriceSection.styled";
import NearPriceTitle from "src/components/landingPage/topicSection/nearPrice/NearPriceTitle";

const NearPriceSection = () => {
    return (
        <>
            <Group44>
                <Rectangle59 />
                <Rectangle62 />

                <NearPriceTitle>Near price</NearPriceTitle>
                <NearPriceContent />
            </Group44>
        </>
    );
};

export default NearPriceSection;
