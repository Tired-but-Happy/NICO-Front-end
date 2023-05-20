import {
    BadgeUnknown,
    BadgeUnknown_0001,
    BadgeUnknown_0002,
    BadgeUnknown_0003,
    BadgeUnknown_0004,
    BadgeUnknown_0005,
    BadgeUnknown_0006,
    BadgeUnknown_0007,
    BadgeUnknown_0008,
    BadgeUnknown_0009,
    BadgeUnknown_0010,
    BadgeUnknown_0011,
    Ellipse21,
    Ellipse21_0001,
    Frame58,
    Group58,
    BadgeText,
    Group78,
    Rectangle84,
    Group56,
    Ellipse20,
    BabyNewbie,
    ProfileText,
    GetFirstSBT,
} from "src/components/accountPage/top/badges/BadgesSection.styled";
import badge_newbie from "./metadata/badge_newbie.json";
import badge_coding_king from "./metadata/badge_coding_king.json";

import { useContext, useEffect, useState } from "react";
import { NearContext } from "src/NearContext";
import { useMutation, useQuery } from "@tanstack/react-query";

enum BadgeType {
    Nothing = 0,
    Newbie,
    CodingKing,
}

const BadgesSection = () => {
    const [hasNewbie, setHasNewbie] = useState(false);
    const [hasCodingKing, setHasCodingKing] = useState(false);
    const { walletSelector, account } = useContext(NearContext);

    const wallet = useQuery({
        queryKey: ["Get Wallet", account],
        queryFn: async () => {
            const wallet = await walletSelector?.wallet("my-near-wallet");
            return wallet;
        },
        enabled: !!walletSelector,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });

    useEffect(() => {
        // console.log("*****");
        // console.log(wallet.data);
    }, [wallet.isLoading]);

    const mint_newbie = useMutation({
        mutationKey: ["Mint newbie SBT"],
        mutationFn: async () => {
            if (!account) return;
            const response = await wallet.data?.signAndSendTransaction({
                actions: [
                    {
                        type: "FunctionCall",
                        params: {
                            methodName: "sbt_mint",
                            args: {
                                receiver_id: account[0].accountId,
                                token_metadata: badge_newbie,
                                badge_type: BadgeType.Newbie,
                            },
                            gas: "30000000000000",
                            deposit: "100000000000000000000000",
                        },
                    },
                ],
            });
            return response;
        },
        retry: false,
    });
    const mint_coding_king = useMutation({
        mutationKey: ["Mint CodingKing SBT"],
        mutationFn: async () => {
            if (!account) return;
            const response = await wallet.data?.signAndSendTransaction({
                actions: [
                    {
                        type: "FunctionCall",
                        params: {
                            methodName: "sbt_mint",
                            args: {
                                receiver_id: account[0].accountId,
                                token_metadata: badge_coding_king,
                                badge_type: BadgeType.CodingKing,
                            },
                            gas: "30000000000000",
                            deposit: "100000000000000000000000",
                        },
                    },
                ],
            });
            return response;
        },
        retry: false,
    });

    useEffect(() => {
        console.log("####");
        console.log(mint_newbie.data);
    }, [mint_newbie.isLoading]);

    return (
        <>
            <Frame58>
                <Group78>
                    <Rectangle84 />
                </Group78>
                {hasNewbie ? (
                    <>
                        <Group56>
                            <Ellipse20
                                src="src/assets/accountPage/baby_newbie_badge.png"
                                alt="Activated newbie badge image"
                                onClick={() => {
                                    mint_newbie.mutate();
                                }}
                            />
                        </Group56>
                        <ProfileText>
                            2023.05.21
                            <br />
                            Welcome to NICO!
                        </ProfileText>
                        <BabyNewbie>Baby Newbie</BabyNewbie>
                    </>
                ) : (
                    <>
                        <Group56>
                            <Ellipse20
                                src="src/assets/accountPage/baby_newbie_badge_black.png"
                                alt="Inactivated newbie badge image"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    mint_newbie.mutate();
                                }}
                            />
                        </Group56>
                        <GetFirstSBT>Click and get your first SBT!</GetFirstSBT>
                    </>
                )}

                <BadgeUnknown>
                    <Group58>
                        {hasCodingKing ? (
                            <Ellipse21
                                src="src/assets/accountPage/coding_badge.png"
                                alt="Activated coding king badge image"
                                onClick={() => {
                                    mint_coding_king.mutate();
                                }}
                            />
                        ) : (
                            <Ellipse21
                                src="src/assets/accountPage/coding_badge_black.png"
                                alt="Inactivated coding king badge image"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    mint_coding_king.mutate();
                                }}
                            />
                        )}
                    </Group58>
                    <BadgeText>Coding King</BadgeText>
                </BadgeUnknown>
                <BadgeUnknown_0001>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0001>
                <BadgeUnknown_0002>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0002>
                <BadgeUnknown_0003>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0003>
                <BadgeUnknown_0004>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0004>
                <BadgeUnknown_0005>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0005>
                <BadgeUnknown_0006>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0006>
                <BadgeUnknown_0007>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0007>
                <BadgeUnknown_0008>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0008>
                <BadgeUnknown_0009>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0009>
                <BadgeUnknown_0010>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0010>
                <BadgeUnknown_0011>
                    <Group58>
                        <Ellipse21_0001 src="src/assets/accountPage/lock_icon.svg" />
                    </Group58>
                </BadgeUnknown_0011>
            </Frame58>
        </>
    );
};

export default BadgesSection;
