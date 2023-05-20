import React, { FC, useCallback } from "react";
import { Frame41, Tag_0003, Tag_0006 } from "src/components/accountPage/bottom/Title.styled";
import { MyProfile } from "src/components/accountPage/top/TopSection.styled";

interface childProps {
    setState: React.Dispatch<React.SetStateAction<number>>;
    state: number;
}

const Title: FC<childProps> = ({ setState, state }) => {
    const onClickTransaction = useCallback(() => {
        setState(0);
    }, []);

    const onClickTokenTxns = useCallback(() => {
        setState(1);
    }, []);

    const onClickNftTxns = useCallback(() => {
        setState(2);
    }, []);

    const onClickAccessKey = useCallback(() => {
        setState(3);
    }, []);

    return (
        <>
            <Frame41>
                <Tag_0003
                    onClick={onClickTransaction}
                    style={
                        state !== 0
                            ? { cursor: "pointer" }
                            : { cursor: "default", backgroundColor: "var(--neutre-Grey-300)" }
                    }
                >
                    <MyProfile>Transaction</MyProfile>
                </Tag_0003>
                <Tag_0003
                    onClick={onClickTokenTxns}
                    style={
                        state !== 1
                            ? { cursor: "pointer" }
                            : { cursor: "default", backgroundColor: "var(--neutre-Grey-300)" }
                    }
                >
                    <MyProfile>Token txns</MyProfile>
                </Tag_0003>
                <Tag_0003
                    onClick={onClickNftTxns}
                    style={
                        state !== 2
                            ? { cursor: "pointer" }
                            : { cursor: "default", backgroundColor: "var(--neutre-Grey-300)" }
                    }
                >
                    <MyProfile>NFT txns</MyProfile>
                </Tag_0003>
                <Tag_0006
                    onClick={onClickAccessKey}
                    style={
                        state !== 3
                            ? { cursor: "pointer" }
                            : { cursor: "default", backgroundColor: "var(--neutre-Grey-300)" }
                    }
                >
                    <MyProfile>Access Key</MyProfile>
                </Tag_0006>
            </Frame41>
        </>
    );
};

export default Title;
