import { useCallback, useEffect, useState } from "react";
import {
    MyDashboard,
    MyProfile,
    Rectangle42,
    Tag,
    Tag_0001,
    Tag_0002,
} from "src/components/accountPage/top/TopSection.styled";
import ProfileSection from "src/components/accountPage/top/profile";
import BadgesSection from "src/components/accountPage/top/badges";
import WritingRecordSection from "src/components/accountPage/top/writingRecord";

const TopSection = () => {
    const [state, setState] = useState(0);

    const onClickProfileBtn = useCallback(() => {
        setState(0);
    }, []);

    const onClickBadgesBtn = useCallback(() => {
        setState(1);
    }, []);

    const onClickWriteBtn = useCallback(() => {
        setState(2);
    }, []);

    return (
        <>
            <MyDashboard>My dashboard</MyDashboard>

            {/* Background */}
            <Rectangle42 />

            {/* Button */}
            <Tag
                onClick={onClickProfileBtn}
                style={
                    state !== 0
                        ? { cursor: "pointer" }
                        : { cursor: "default", backgroundColor: "var(--neutre-Grey-300)" }
                }
            >
                <MyProfile>Profile</MyProfile>
            </Tag>
            <Tag_0001
                onClick={onClickBadgesBtn}
                style={
                    state !== 1
                        ? { cursor: "pointer" }
                        : { cursor: "default", backgroundColor: "var(--neutre-Grey-300)" }
                }
            >
                <MyProfile>Badges</MyProfile>
            </Tag_0001>
            <Tag_0002
                onClick={onClickWriteBtn}
                style={
                    state !== 2
                        ? { cursor: "pointer" }
                        : { cursor: "default", backgroundColor: "var(--neutre-Grey-300)" }
                }
            >
                <MyProfile>Writing record</MyProfile>
            </Tag_0002>

            {/* Contents */}
            {state === 0 ? (
                <ProfileSection />
            ) : state === 1 ? (
                <BadgesSection />
            ) : (
                // state === 2
                <WritingRecordSection />
            )}
        </>
    );
};

export default TopSection;
