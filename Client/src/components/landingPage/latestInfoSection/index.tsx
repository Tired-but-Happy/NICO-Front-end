import LatestInfoContent from "src/components/landingPage/latestInfoSection/LatestInfoContent";
import { Group42 } from "src/components/landingPage/latestInfoSection/LatestInfoSection.styled";
import LatestInfoTitle from "src/components/landingPage/latestInfoSection/LatestInfoTitle";

const LatestInfoSection = () => {
    return (
        <Group42>
            <LatestInfoTitle />
            <LatestInfoContent />
        </Group42>
    );
};

export default LatestInfoSection;
