import {
    Frame28_0001,
    Frame28_0002,
    Frame28_0004,
    Group31,
    Tr,
    Frame28_0005,
    Frame36,
    Frame37,
    Frame38,
    Group30_0001,
    Group30_0002,
    Group30_0004,
    Group30_0005,
    List,
    ListOverview1,
    NaN_0001,
    NaN_0002,
    Rectangle61,
    Thead,
    Frame28,
    Group30,
    List_0006,
    Rectangle5,
    Rectangle5_0008,
} from "src/components/infoPage/overview/OverviewContent.styled";

const OverviewContent = () => {
    return (
        <>
            <Frame36>
                <List>
                    <Rectangle5 />
                    <Thead>Block Height</Thead>
                    <Group30>
                        <Frame28>
                            <Tr>1234567890</Tr>
                        </Frame28>
                    </Group30>
                </List>
                <List>
                    <Rectangle5 />
                    <Thead>Hash</Thead>
                    <Group30_0001>
                        <Frame28_0001>
                            <Tr>BytAnNJWqH5CseCSDVwGKbMdKJT9uHPmCqLbSbnUSyf5</Tr>
                        </Frame28_0001>
                    </Group30_0001>
                </List>
                <List>
                    <Rectangle5 />
                    <Thead>Time stamp</Thead>
                    <Group30_0002>
                        <Frame28_0002>
                            <Tr>a few seconds ago (May-14-2023 11:22:03 AM) +UT</Tr>
                        </Frame28_0002>
                    </Group30_0002>
                </List>
                <List>
                    <Rectangle5 />
                    <Thead>Parent Hash</Thead>
                    <Group30_0001>
                        <Frame28_0001>
                            <Tr>BytAnNJWqH5CseCSDVwGKbMdKJT9uHPmCqLbSbnUSyf5</Tr>
                        </Frame28_0001>
                    </Group30_0001>
                </List>
            </Frame36>
            <Frame37>
                <List>
                    <Rectangle5 />
                    <Thead>Author</Thead>
                    <Group30_0004>
                        <Frame28_0004>
                            <Tr>nearbearbeer.near</Tr>
                        </Frame28_0004>
                    </Group30_0004>
                </List>
            </Frame37>
            <Frame38>
                <List>
                    <ListOverview1>
                        <Rectangle5 />
                        <NaN_0001>
                            <Rectangle5 />
                            <Thead>Gas Used</Thead>
                            <Group30_0005>
                                <Frame28_0005>
                                    <Tr>0.0001 Ⓝ / Tgas</Tr>
                                </Frame28_0005>
                            </Group30_0005>
                            <Rectangle61 />
                        </NaN_0001>
                    </ListOverview1>
                    <NaN_0002>
                        <Rectangle5 />
                        <Thead>Gas Limit</Thead>
                        <Group30_0005>
                            <Frame28_0005>
                                <Tr>0.00259 Ⓝ</Tr>
                            </Frame28_0005>
                        </Group30_0005>
                    </NaN_0002>
                </List>
                <List_0006>
                    <Rectangle5_0008 />
                    <Thead>Transactions</Thead>
                    <Group30_0001>
                        <Frame28_0001>
                            <Tr>BytAnNJWqH5CseCSDVwGKbMdKJT9uHPmCqLbSbnUSyf5</Tr>
                        </Frame28_0001>
                    </Group30_0001>
                    <Group31>
                        <Frame28_0001>
                            <Tr>BytAnNJWqH5CseCSDVwGKbMdKJT9uHPmCqLbSbnUSyf5</Tr>
                        </Frame28_0001>
                    </Group31>
                </List_0006>
            </Frame38>
        </>
    );
};

export default OverviewContent;
