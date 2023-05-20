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
} from "src/components/accountPage/bottom/Contents.styled";
import useGetAccountTx from "src/hooks/useGetAccountTx";

const TransactionSection = () => {
    const { data, isLoading } = useGetAccountTx({ account: "m0on.near" });

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
                        <Fdfdfsfdfsf>From</Fdfdfsfdfsf>
                    </Frame36>
                </Component75>
                <Component76>
                    <Frame36>
                        <Rectangle59_0001 />
                        <Fdfdfsfdfsf>To</Fdfdfsfdfsf>
                    </Frame36>
                </Component76>
                <Component85>
                    <Frame36>
                        <Rectangle59_0001 />
                        <Fdfdfsfdfsf>All Action Type</Fdfdfsfdfsf>
                    </Frame36>
                </Component85>
                <Component81>
                    <Frame36>
                        <Rectangle59 />
                        <Fdfdfsfdfsf>Method</Fdfdfsfdfsf>
                    </Frame36>
                </Component81>
                <Component90>
                    <Frame36>
                        <Rectangle59 />
                        <Fdfdfsfdfsf>Has Error</Fdfdfsfdfsf>
                    </Frame36>
                </Component90>
                <Component82>
                    <Frame36_0007>
                        <Fdfdfsfdfsf_0007>Block Height</Fdfdfsfdfsf_0007>
                    </Frame36_0007>
                </Component82>
            </Category>

            {/* table */}
            {isLoading ? (
                <>
                    <img
                        style={{ width: "300px", marginLeft: "900px", marginTop: "1050px" }}
                        src="/src/assets/layout/loading.gif"
                    />
                </>
            ) : (
                <>
                    <ContentsAccessKey>
                        <Component67>
                            <Section>
                                <Rectangle59_0007 />
                                <ContentText>{data[1].id.substr(0, 8)}.....</ContentText>
                            </Section>
                        </Component67>
                        <Component69>
                            <Section_0001>
                                <Rectangle59_0007 />
                                <ContentText>{data[1].receiver}</ContentText>
                            </Section_0001>
                        </Component69>
                        <Component86>
                            <Section_0001>
                                <Rectangle59_0007 />
                                <ContentText>{data[1].all_action_type}</ContentText>
                            </Section_0001>
                        </Component86>
                        <Component91>
                            <Section_0001>
                                <Rectangle59_0010 />
                                <ContentText>{data[1].has_error}</ContentText>
                            </Section_0001>
                        </Component91>
                        <Component71>
                            <Section_0001>
                                <Rectangle59_0010 />
                                <ContentText_0004>
                                    {new Date(
                                        Number(
                                            data[1].transaction_timestamp.toString().slice(0, 13)
                                        )
                                    ).toLocaleString()}
                                </ContentText_0004>
                            </Section_0001>
                        </Component71>
                        <Component77>
                            <Section_0001>
                                <Rectangle59_0012 />
                                <ContentText>{data[1].method_name}</ContentText>
                            </Section_0001>
                        </Component77>
                        <Component79>
                            <Section_0001>
                                <Rectangle59_0007 />
                                <ContentText>{data[1].block_height}</ContentText>
                            </Section_0001>
                        </Component79>
                        <Component83>
                            <Section_0001>
                                <Rectangle59_0007 />
                                <ContentText>{data[1].receiver}</ContentText>
                            </Section_0001>
                        </Component83>
                    </ContentsAccessKey>
                </>
            )}
        </>
    );
};

export default TransactionSection;
