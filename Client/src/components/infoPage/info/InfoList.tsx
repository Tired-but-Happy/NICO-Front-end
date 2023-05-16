import {
    Frame28_0001,
    Frame28_0002,
    Frame28_0003,
    Frame28_0004,
    Group30,
    Group30_0012,
    Group31,
    Group31_0012,
    Group32,
    Group32_0012,
    Group33,
    Group33_0012,
    Icon,
    ListOverview,
    ListProperyTransactions,
    ListTextTransactionsOk,
    Rectangle5,
    Rectangle58,
    Rectangle58_0012,
    Rectangle59,
    Rectangle59_0012,
    Rectangle5_0012,
    Rectangle60,
    Rectangle60_0012,
    Thead,
    Thead2,
    Tr,
    Vector,
} from "src/components/infoPage/info/InfoList.styled";
import { Frame28 } from "src/components/landingPage/latestInfoSection/LatestInfoContent.styled";

const InfoList = () => {
    return (
        <>
            <ListProperyTransactions>
                <Rectangle5_0012 />
                <Thead>Status</Thead>
                <Group30_0012>
                    <Frame28>
                        <Frame28_0001>
                            <Thead2>Txn Hash</Thead2>
                        </Frame28_0001>
                    </Frame28>
                </Group30_0012>
                <Group31_0012>
                    <Frame28_0002>
                        <Thead2>From</Thead2>
                    </Frame28_0002>
                </Group31_0012>
                <Group32_0012>
                    <Frame28_0003>
                        <Thead2>To</Thead2>
                    </Frame28_0003>
                </Group32_0012>
                <Group33_0012>
                    <Frame28_0004>
                        <Thead2>Actions</Thead2>
                    </Frame28_0004>
                </Group33_0012>
                <Rectangle58_0012 />
                <Rectangle59_0012 />
                <Rectangle60_0012 />
            </ListProperyTransactions>
            <ListTextTransactionsOk>
                <ListOverview>
                    <Rectangle5 />
                    <Group30>
                        <Tr>BytAnNJWqH5CseCSDVwGKbMd</Tr>
                    </Group30>
                    <Group31>
                        <Tr>relay.aurora</Tr>
                    </Group31>
                    <Group32>
                        <Tr>yeaaaaaahhh.near</Tr>
                    </Group32>
                    <Group33>
                        <Tr>13 h ago</Tr>
                    </Group33>
                    <Rectangle58 />
                    <Rectangle59 />
                    <Rectangle60 />
                    <Icon>
                        <Vector src="src/assets/landingPage/success_icon.svg" />
                    </Icon>
                </ListOverview>
            </ListTextTransactionsOk>
        </>
    );
};

export default InfoList;
