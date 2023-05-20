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
import * as nearAPI from "near-api-js";

import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import connectionConfig from "src/near/config";
import { CONTRACT_ID } from "src/utils/constants";

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

    async function getContract() {
        const nearConnection = await connect(connectionConfig);
        const account = await nearConnection.account("last-last.testnet");
        const contract = new Contract(
            account, // the account object that is connecting
            CONTRACT_ID,
            {
                // name of contract you're connecting to
                viewMethods: ["badge_view", "has_badge"], // view methods do not change state but usually return a value
                changeMethods: ["sbt_mint"], // change methods modify state
            }
        );
        return contract;
    }

    // const getBadgeType = useQuery({
    //     queryKey: ["Get Badge Type", wallet.data?.getAccounts()],
    //     queryFn: async () => {
    //         if (!account) return;
    //         const badgeType = await badge_view(account[0].accountId);
    //         return badgeType;
    //     },
    //     enabled: wallet.isLoading,
    //     refetchOnWindowFocus: false,
    //     refetchOnMount: false,
    //     retry: false,
    // });

    const hasBadge = useQuery({
        queryKey: ["hasNewbie", account],
        queryFn: async () => {
            if (!account) return false;
            const codeKing = await has_badge(account[0].accountId, "CodingKing");
            if (codeKing) {
                setHasNewbie(true);
                setHasCodingKing(true);
                return;
            }
            const newbie = await has_badge(account[0].accountId, "Newbie");
            if (newbie) {
                setHasNewbie(true);
                setHasCodingKing(false);
                return;
            }
            setHasNewbie(false);
            setHasCodingKing(false);
        },
        refetchOnWindowFocus: false,
        retry: false,
    });

    // async function badge_view(account_id: string) {
    //     const contract = await getContract();
    //     const response = await contract.badge_view({ account_id });
    //     return response;
    // }

    async function has_badge(account_id: string, badge_type: string) {
        const contract = await getContract();
        const response = await contract.has_badge({ account_id, badge_type });
        return response;
    }

    const mint_newbie = useMutation({
        mutationKey: ["Mint newbie SBT", account, wallet],
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
                                badge_type: "Newbie",
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
        mutationKey: ["Mint CodingKing SBT", account, wallet],
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
                                badge_type: "CodingKing",
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
