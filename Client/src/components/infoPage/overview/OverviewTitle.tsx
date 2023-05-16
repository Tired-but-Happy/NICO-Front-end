import {
    Header1,
    LatestBlocks,
    Pictogram,
} from "src/components/infoPage/overview/OverviewTitle.styled";

const OverviewTitle = () => {
    return (
        <>
            <Header1>
                <Pictogram src="src/assets/profile/pictogram_block.svg" />
                <LatestBlocks>Block Overview</LatestBlocks>
            </Header1>
        </>
    );
};

export default OverviewTitle;
