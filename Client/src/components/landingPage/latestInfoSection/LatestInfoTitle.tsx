import {
    LatestBlocks,
    PictogramBlock,
    Title,
} from "src/components/landingPage/latestInfoSection/LatestInfoTitle.styled";

const LatestInfoTitle = () => {
    return (
        <>
            <Title>
                <LatestBlocks>Latest Blocks</LatestBlocks>
                <PictogramBlock src="src/assets/profile/pictogram_block.svg" />
            </Title>
        </>
    );
};

export default LatestInfoTitle;
