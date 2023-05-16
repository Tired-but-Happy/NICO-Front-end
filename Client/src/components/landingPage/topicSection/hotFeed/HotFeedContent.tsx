import {
    BadgeText,
    Frame25,
    Frame35,
    Group26,
    Group40,
    List840_0002,
    AccountText,
    Rectangle46,
    TagTitle,
    Frame26,
    AccountText_0001,
    Group39,
    Group37,
    IconHeart,
    Vector,
    Group38,
    IcRoundChat,
    Vector_0001,
    HotFeedContents,
    BlueBlock,
    TimeText,
    SmallPinkText,
} from "src/components/landingPage/topicSection/hotFeed/HotFeedContent.styled";

const HotFeedContent = () => {
    return (
        <>
            <List840_0002>
                <Group26>
                    <Rectangle46>
                        <BlueBlock src="src/assets/profile/blue_block.svg" />
                    </Rectangle46>
                    <Frame25>
                        <Group40>
                            <Frame35>
                                <AccountText>nearbear.near</AccountText>
                                <TagTitle>
                                    <BadgeText>Baby_Newbie</BadgeText>
                                </TagTitle>
                            </Frame35>
                        </Group40>
                        <TimeText>3h ago</TimeText>
                    </Frame25>
                    <Frame26>
                        <AccountText_0001>nearbear.near</AccountText_0001>
                    </Frame26>
                </Group26>
                <Group39>
                    <Group37>
                        <IconHeart>
                            <Vector xmlns="src/assets/landingPage/heart_vector.svg">
                                <path
                                    fill="rgb(207, 159, 244)"
                                    d="M21.0017 5.44389C21.0033 6.15812 20.8633 6.86558 20.5897 7.52535C20.3161 8.18511 19.9145 8.78409 19.4079 9.28764L11.0361 17.7833C10.9663 17.8541 10.8831 17.9104 10.7914 17.9488C10.6996 17.9872 10.6012 18.007 10.5017 18.007C10.4022 18.007 10.3038 17.9872 10.212 17.9488C10.1203 17.9104 10.0371 17.8541 9.96732 17.7833L1.59545 9.28764C0.57478 8.26821 0.000880077 6.88508 1.01136e-06 5.44251C-0.000878055 3.99995 0.571336 2.61612 1.59076 1.59545C2.61019 0.57478 3.99332 0.000880099 5.43588 1.0114e-06C6.87845 -0.000878076 8.26228 0.571336 9.28295 1.59076L10.5017 2.72982L11.7289 1.58701C12.4906 0.829126 13.4597 0.313891 14.5139 0.106353C15.5682 -0.101185 16.6603 0.00827904 17.6524 0.420925C18.6445 0.83357 19.4921 1.5309 20.0882 2.42487C20.6843 3.31885 21.0022 4.3694 21.0017 5.44389Z"
                                />
                            </Vector>
                        </IconHeart>
                        <SmallPinkText>20</SmallPinkText>
                    </Group37>
                    <Group38>
                        <IcRoundChat>
                            <Vector_0001 xmlns="src/assets/landingPage/comment_vector.svg">
                                <path
                                    fill="rgb(207, 159, 244)"
                                    d="M18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM5 7L15 7C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9L5 9C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7ZM11 12L5 12C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10L11 10C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 6L5 6C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4L15 4C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z"
                                />
                            </Vector_0001>
                        </IcRoundChat>
                        <SmallPinkText>80</SmallPinkText>
                    </Group38>
                </Group39>
                <HotFeedContents>
                    Founders—the following videos are great resources for you and your team. I
                    especially encourage founders to watch the product market fit video. Build on!
                </HotFeedContents>
            </List840_0002>
        </>
    );
};

export default HotFeedContent;
