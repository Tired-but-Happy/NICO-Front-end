import { FC } from "react";
import TransactionSection from "./section/TransactionSection";
import TokenTxnsSection from "./section/TokenTxns";
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
            ) : (
                <>
                    <AccessKeySection />
                </>
            )}
        </>
    );
};

export default Contents;
