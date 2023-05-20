import {
    Category,
    Rectangle66,
    ListProperyTransactions,
    Group45,
    Component11,
    Frame36,
    Rectangle59,
    Fdfdfsfdfsf,
    Component3,
    Rectangle59_0001,
    Component75,
    Component76,
    Component85,
    Component81,
    Component90,
    Component82,
    Frame36_0007,
    Fdfdfsfdfsf_0007,
    ContentsAccessKey,
    Component67,
    Section,
    Rectangle59_0007,
    ContentText,
    Component69,
    Section_0001,
    Component86,
    Component91,
    Rectangle59_0010,
    Component71,
    ContentText_0004,
    Component77,
    Rectangle59_0012,
    Component79,
    Component83,
    Tag_0014,
    Full,
} from "src/components/accountPage/bottom/Contents.styled";
import useGetAccountTx from "src/hooks/useGetAccountTx";

const NFTTxnsSection = () => {
    const { data } = useGetAccountTx({ account: "m0on.near" });
    console.log(data);

    return (
        <>
            {/* header */}
            <Category>
                <Rectangle66 />
                <Group45>
                    <ListProperyTransactions />
                    <Component11>
                        <Frame36>
                            <Rectangle59 />
                            <Fdfdfsfdfsf>Age</Fdfdfsfdfsf>
                        </Frame36>
                    </Component11>
                    <Component3>
                        <Frame36>
                            <Rectangle59_0001 />
                            <Fdfdfsfdfsf>Txn Hash</Fdfdfsfdfsf>
                        </Frame36>
                    </Component3>
                </Group45>
                <Component75>
                    <Frame36>
                        <Rectangle59_0001 />
                        <Fdfdfsfdfsf>Contract</Fdfdfsfdfsf>
                    </Frame36>
                </Component75>
                <Component76>
                    <Frame36>
                        <Rectangle59_0001 />
                        <Fdfdfsfdfsf>Method</Fdfdfsfdfsf>
                    </Frame36>
                </Component76>
                <Component85>
                    <Frame36>
                        <Rectangle59_0001 />
                        <Fdfdfsfdfsf>Action</Fdfdfsfdfsf>
                    </Frame36>
                </Component85>
                <Component81>
                    <Frame36>
                        <Rectangle59 />
                        <Fdfdfsfdfsf>Public</Fdfdfsfdfsf>
                    </Frame36>
                </Component81>
                <Component90>
                    <Frame36>
                        <Rectangle59 />
                        <Fdfdfsfdfsf>Allowance</Fdfdfsfdfsf>
                    </Frame36>
                </Component90>
                <Component82>
                    <Frame36_0007>
                        <Fdfdfsfdfsf_0007>Access</Fdfdfsfdfsf_0007>
                    </Frame36_0007>
                </Component82>
            </Category>

            {/* table */}
            <ContentsAccessKey>
                <Component67>
                    <Section>
                        <Rectangle59_0007 />
                        <ContentText>...</ContentText>
                    </Section>
                </Component67>
                <Component69>
                    <Section_0001>
                        <Rectangle59_0007 />
                        <ContentText>any</ContentText>
                    </Section_0001>
                </Component69>
                <Component86>
                    <Section_0001>
                        <Rectangle59_0007 />
                        <ContentText>Created</ContentText>
                    </Section_0001>
                </Component86>
                <Component91>
                    <Section_0001>
                        <Rectangle59_0010 />
                        <ContentText>Created</ContentText>
                    </Section_0001>
                </Component91>
                <Component71>
                    <Section_0001>
                        <Rectangle59_0010 />
                        <ContentText_0004>a few seconds ago</ContentText_0004>
                    </Section_0001>
                </Component71>
                <Component77>
                    <Section_0001>
                        <Rectangle59_0012 />
                        <ContentText>ed25519dfld...</ContentText>
                    </Section_0001>
                </Component77>
                <Component79>
                    <Section_0001>
                        <Rectangle59_0007 />
                        <ContentText></ContentText>
                    </Section_0001>
                </Component79>
                <Component83>
                    <Section_0001>
                        <Rectangle59_0007 />
                        <ContentText>99.12345678</ContentText>
                    </Section_0001>
                </Component83>
                <Tag_0014>
                    <Full>full</Full>
                </Tag_0014>
            </ContentsAccessKey>
        </>
    );
};

export default NFTTxnsSection;
