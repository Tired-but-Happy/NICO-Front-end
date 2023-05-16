import { Header1, Pictogram, TxIcon } from "src/components/infoPage/info/Title.styled";
import { LatestBlocks } from "src/components/landingPage/latestInfoSection/LatestInfoTitle.styled";

const Title = () => {
    return (
        <>
            <Header1>
                <LatestBlocks>Transactions</LatestBlocks>
                <Pictogram>
                    <TxIcon src="src/assets/landingPage/tx_pictogram.svg" />
                </Pictogram>
            </Header1>
        </>
    );
};

export default Title;
