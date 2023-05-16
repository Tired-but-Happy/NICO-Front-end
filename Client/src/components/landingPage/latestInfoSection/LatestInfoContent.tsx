import {
    BlockTime,
    Authour,
    Frame28,
    Frame29,
    Group28,
    Group29,
    Group30,
    Group38_0003,
    Group41_0005,
    List_0006,
    AuthourText,
    Rectangle5,
    Rectangle5_0008,
    Txn,
    BlockNum,
    TxnText,
    TagTagNUmber,
    Frame27,
    Tags,
    PictogramBlock,
    Frame1_0002,
    ViewAllBlocks,
} from "src/components/landingPage/latestInfoSection/LatestInfoContent.styled";

const LatestInfoContent = () => {
    return (
        <>
            <Group38_0003>
                <Group41_0005>
                    <Rectangle5 />
                    <List_0006>
                        <Rectangle5_0008 />
                        <Group29>
                            <PictogramBlock src="src/assets/profile/pictogram_block_sm.svg" />
                            <Group28>
                                <BlockNum>92020202_1</BlockNum>
                                <BlockTime>a few seconds ago</BlockTime>
                            </Group28>
                        </Group29>
                        <Group30>
                            <Frame28>
                                <Authour>Authour</Authour>
                                <AuthourText>meta-token.near</AuthourText>
                            </Frame28>
                            <Frame29>
                                <Txn>txn</Txn>
                                <TxnText>8</TxnText>
                            </Frame29>
                        </Group30>
                        <TagTagNUmber>
                            <Frame27>
                                <Tags>10 Tags</Tags>
                            </Frame27>
                        </TagTagNUmber>
                    </List_0006>
                </Group41_0005>
            </Group38_0003>

            {/* Button */}
            <Frame1_0002>
                <ViewAllBlocks>View all Blocks</ViewAllBlocks>
            </Frame1_0002>
        </>
    );
};

export default LatestInfoContent;
