import { Background, Group43, Group49 } from "src/components/infoPage/overview/Overview.styled";
import OverviewContent from "src/components/infoPage/overview/OverviewContent";
import OverviewTitle from "src/components/infoPage/overview/OverviewTitle";

const Overview = () => {
    return (
        <>
            <Group49>
                <Group43>
                    <Background />
                    <OverviewTitle />
                    <OverviewContent />
                </Group43>
            </Group49>
        </>
    );
};

export default Overview;
