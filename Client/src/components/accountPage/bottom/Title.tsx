import React, { FC, useCallback } from "react";
import {
    Frame41,
    RootWrapperRectangle127,
    Tag_0003,
    Tag_0006,
} from "src/components/accountPage/bottom/Title.styled";
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

    const onClickAccessKey = useCallback(() => {
        setState(2);
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
                    onClick={onClickAccessKey}
                    style={
                        state !== 2
                            ? { cursor: "pointer" }
                            : { cursor: "default", backgroundColor: "var(--neutre-Grey-300)" }
                    }
                >
                    <MyProfile>Access Key</MyProfile>
                </Tag_0003>
                {state == 2 ? (
                    <>
                        <RootWrapperRectangle127
                            src="/src/assets/layout/rectangle_pink.svg"
                            alt="image of Rectangle127"
                        />
                    </>
                ) : (
                    <></>
                )}
            </Frame41>
        </>
    );
};

export default Title;
