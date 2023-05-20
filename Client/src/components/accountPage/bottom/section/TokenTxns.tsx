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
import useFtTransfer from "src/hooks/useFtTransfer";

const TokenTxnsSection = () => {
    const { data, isLoading } = useFtTransfer({ contract: "m0on.near" });
    console.log(data);

    return (
        <>
            {/* header */}
            <Category>
                <Rectangle66 />
                <Group45>
                    <ListProperyTransactions />
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
                        <Fdfdfsfdfsf>To</Fdfdfsfdfsf>
                    </Frame36>
                </Component75>
                <Component76>
                    <Frame36>
                        <Rectangle59_0001 />
                        <Fdfdfsfdfsf>Quantity</Fdfdfsfdfsf>
                    </Frame36>
                </Component76>
                <Component85>
                    <Frame36>
                        <Rectangle59_0001 />
                        <Fdfdfsfdfsf>Token</Fdfdfsfdfsf>
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
                        <Fdfdfsfdfsf>Age</Fdfdfsfdfsf>
                    </Frame36>
                </Component90>
                <Component82>
                    <Frame36_0007>
                        <Fdfdfsfdfsf_0007>From</Fdfdfsfdfsf_0007>
                    </Frame36_0007>
                </Component82>
            </Category>

            {/* table */}
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
                                    <ContentText>
                                        {data[0].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[0].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[0].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[0].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[0].receiver.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[0].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[1].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[1].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[1].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[1].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[1].receiver.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[1].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[2].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[2].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[2].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[2].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[2].receiver.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[2].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[3].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[3].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[3].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[3].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[3].receiver.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[3].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[4].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[4].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[4].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[4].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[4].receiver.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[4].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[5].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[5].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[5].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[5].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[5].receiver.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[5].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[6].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[6].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[6].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[6].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[6].receiver.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[6].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[7].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[7].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[7].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[7].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[7].receiver.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[7].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[8].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[8].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[8].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[8].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[8].receiver.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[8].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[9].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[9].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[9].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[9].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[9].receiver.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[9].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[10].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[10].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[10].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[10].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[10].receiver.substr(0, 15)}.....
                                    </ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[10].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[11].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[11].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[11].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[11].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[11].receiver.substr(0, 15)}.....
                                    </ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[11].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[12].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[12].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[12].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[12].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[12].receiver.substr(0, 15)}.....
                                    </ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[12].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[13].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[13].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[13].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[13].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[13].receiver.substr(0, 15)}.....
                                    </ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[13].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[14].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[14].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[14].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[14].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[14].receiver.substr(0, 15)}.....
                                    </ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[14].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[15].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[15].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[15].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[15].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[15].receiver.substr(0, 15)}.....
                                    </ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[15].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[18].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[18].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[18].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[18].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[18].receiver.substr(0, 15)}.....
                                    </ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[18].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[19].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[19].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[19].receiver.substr(0, 15)}.....
                                    </ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[19].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[19].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[19].receiver.substr(0, 15)}.....
                                    </ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[19].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                    <div style={{ position: "relative", top: "44px" }}>
                        <ContentsAccessKey>
                            <Component67>
                                <Section>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[21].transaction_id.substr(0, 8)}.....
                                    </ContentText>
                                </Section>
                            </Component67>
                            <Component69>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[21].amount}</ContentText>
                                </Section_0001>
                            </Component69>
                            <Component86>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[21].contract.substr(0, 8)}.....</ContentText>
                                </Section_0001>
                            </Component86>
                            <Component91>
                                <Section_0001>
                                    <Rectangle59_0010 />
                                    <ContentText>
                                        {new Date(
                                            Number(data[21].timestamp.toString().slice(0, 13))
                                        ).toLocaleString()}
                                    </ContentText>
                                </Section_0001>
                            </Component91>
                            <Component77>
                                <Section_0001>
                                    <Rectangle59_0012 />
                                    <ContentText>transaction</ContentText>
                                </Section_0001>
                            </Component77>
                            <Component79>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>
                                        {data[21].receiver.substr(0, 15)}.....
                                    </ContentText>
                                </Section_0001>
                            </Component79>
                            <Component83>
                                <Section_0001>
                                    <Rectangle59_0007 />
                                    <ContentText>{data[21].sender.substr(0, 15)}.....</ContentText>
                                </Section_0001>
                            </Component83>
                        </ContentsAccessKey>
                    </div>
                </>
            )}
        </>
    );
};

export default TokenTxnsSection;
