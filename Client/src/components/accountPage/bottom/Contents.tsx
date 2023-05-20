import { FC } from "react";
import TransactionSection from "./section/TransactionSection";
import TokenTxnsSection from "./section/TokenTxns";
import NFTTxns from "./section/NFTTxnsSection";
import AccessKeySection from "./section/AccessKeySection";

const Contents: FC<{ state: number }> = ({ state }) => {
    return (
        <>
            {state == 0 ? (
                <>
                    <TransactionSection />
                </>
            ) : state == 1 ? (
                <>
                    <TokenTxnsSection />
                </>
            ) : state == 2 ? (
                <>
                    <NFTTxns />
                </>
            ) : (
                <>
                    <AccessKeySection />
                </>
            )}
        </>
    );
};

export default Contents;
