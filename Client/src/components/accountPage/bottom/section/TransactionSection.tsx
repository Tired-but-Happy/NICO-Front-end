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
                    <div style={{ position: "relative" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[0].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[0].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[0].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[0].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[0].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[0].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[0].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[0].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
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
                                                data[1].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
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
                    </div>
                    <div style={{ position: "relative", top: "88px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[2].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[2].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[2].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[2].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[2].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[2].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[2].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[2].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "132px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[3].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[3].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[3].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[3].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[3].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[3].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[3].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[3].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "176px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[4].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[4].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[4].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[4].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[4].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[4].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[4].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[4].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "220px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[5].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[5].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[5].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[5].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[5].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[5].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[5].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[5].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "264px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[6].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[6].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[6].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[6].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[6].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[6].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[6].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[6].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "308px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[7].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[7].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[7].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[7].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[7].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[7].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[7].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[7].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "352px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[8].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[8].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[8].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[8].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[8].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[8].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[8].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[8].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "396px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[9].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[9].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[9].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[9].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[9].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[9].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[9].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[9].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "440px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[10].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[10].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[10].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[10].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[10].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[10].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[10].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[10].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "88px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[11].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[11].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[11].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[11].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[11].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[11].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[11].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[11].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "132px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[12].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[12].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[12].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[12].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[12].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[12].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[12].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[12].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "176px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[13].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[13].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[13].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[13].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[13].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[13].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[13].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[13].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "220px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[14].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[14].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[14].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[14].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[14].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[14].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[14].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[14].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "264px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[15].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[15].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[15].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[15].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[15].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[15].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[15].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[15].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "308px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[16].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[16].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[16].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[16].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[16].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[16].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[16].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[16].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "352px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[17].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[17].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[17].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[17].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[17].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[17].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[17].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[17].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "396px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[17].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[17].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[17].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[17].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[17].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[17].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[17].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[17].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "440px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[18].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[18].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[18].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[18].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[18].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[18].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[18].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[18].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "484px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[19].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[19].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[19].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "528px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[20].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[20].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[20].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[20].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[20].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[20].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[20].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[20].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "572px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[21].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[21].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[21].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[21].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[21].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[21].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[21].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[21].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "616px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[22].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[22].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[22].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[22].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[22].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[22].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[22].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[22].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "660px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[23].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[23].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[23].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[23].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[23].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[23].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[23].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[23].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "704px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[24].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[24].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[24].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[24].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[24].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[24].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[24].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[24].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "748px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[25].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[25].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[25].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[25].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[25].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[25].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[25].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[25].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "792px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[26].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[26].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[26].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[26].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[26].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[26].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[26].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[26].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "836px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[27].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[27].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[27].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[27].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[27].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[27].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[27].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[27].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "572px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[28].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[28].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[28].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[28].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[28].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[28].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[28].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[28].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "616px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[29].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[29].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[29].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[29].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[29].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[29].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[29].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[29].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "660px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[30].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[30].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[30].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[30].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[30].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[30].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[30].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[30].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "704px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[31].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[31].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[31].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[31].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[31].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[31].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[31].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[31].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "748px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[32].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[32].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[32].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[32].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[32].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[32].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[32].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[32].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "792px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[33].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[33].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[33].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[33].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[33].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[33].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[33].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[33].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "836px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[34].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[34].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[34].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[34].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[34].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[34].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[34].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[34].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>

                    <div style={{ position: "relative", top: "880px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[35].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[35].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[35].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[35].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[35].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[35].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[35].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[35].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "924px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[36].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[36].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[36].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[36].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[36].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[36].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[36].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[36].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "968px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[37].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[37].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[37].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[37].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[37].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[37].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[37].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[37].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>

                    <div style={{ position: "relative", top: "1012px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[38].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[38].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[38].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[38].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[38].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[38].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[38].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[38].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "1056px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[39].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[39].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[39].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[39].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[39].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[39].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[39].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[39].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "1100px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[40].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[40].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[40].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[40].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[40].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[40].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[40].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[40].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "1144px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[41].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[41].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[41].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[41].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[41].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[41].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[41].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[41].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "1188px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[42].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[42].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[42].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[42].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[42].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[42].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[42].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[42].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "1232px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[43].id.substr(0, 8)}.....</ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[43].receiver}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[43].all_action_type}</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>{data[43].has_error}</ContentText>
                                </Section_0001>
                            </Component91>
                            <Component71>
                                <Section_0001>
                                    <Rectangle59_0010 />

                                    <ContentText_0004>
                                        {new Date(
                                            Number(
                                                data[43].transaction_timestamp
                                                    .toString()
                                                    .slice(0, 13)
                                            )
                                        ).toLocaleString()}
                                    </ContentText_0004>
                                </Section_0001>
                            </Component71>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>{data[43].method_name}</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[43].block_height}</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[43].receiver}</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                </>
            )}
        </>
    );
};

export default TransactionSection;
