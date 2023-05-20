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
} from "src/components/accountPage/top/badges/BadgesSection.styled";

import { useContext, useEffect } from "react";
import { NearContext } from "src/NearContext";

const BadgesSection = () => {
    const { walletSelector, account } = useContext(NearContext);

    useEffect(() => {
        console.log("*****");
        console.log(walletSelector?.isSignedIn());
    }, [walletSelector, account]);

    return (
        <>
            <Frame58>
                <Group78>
                    <Rectangle84 />
                </Group78>
                <Group56>
                    <Ellipse20
                        src="src/assets/accountPage/baby_newbie_badge.png"
                        alt="image of Ellipse20"
                    />
                </Group56>
                <ProfileText>
                    2023.05.15
                    <br />
                    Connect wallet to NICO!
                </ProfileText>
                <BabyNewbie>Baby Newbie</BabyNewbie>
                <BadgeUnknown>
                    <Group58>
                        <Ellipse21
                            src="src/assets/accountPage/coding_badge.png"
                            alt="image of Ellipse21"
                        />
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
