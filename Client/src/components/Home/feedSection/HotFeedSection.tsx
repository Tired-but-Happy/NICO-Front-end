import {
    ProfileBlueBlock,
    Group26,
    Group45,
    Header3,
    Header3Icon,
    HotFeed,
    List840,
    ListBox,
    Rectangle57,
    Vector,
    Frame26,
    Frame26Text,
    Frame25Text,
    Frame25,
    Group40,
    Frame35,
    Frame35Text,
    Tag_title,
    BabyNewbie,
    List840Content,
    Group38,
    Group38Text,
    Group38Icon,
    Group37,
    Group37Text,
    Group37TextIcon,
    Group37IconImg,
    Group38IconImg,
    Rectangle46,
} from "src/components/Home/feedSection/FeedSection.styled";

const HotFeedSection = () => {
    return (
        <>
            <Group45>
                <Header3>
                    <Header3Icon>
                        <Vector src="src/assets/vector.svg" />
                        <HotFeed>Hot feed</HotFeed>
                    </Header3Icon>
                    <Rectangle57 />
                </Header3>
            </Group45>
            <ListBox>
                <List840>
                    <Group26>
                        <Rectangle46>
                            <ProfileBlueBlock src="src/assets/blue_block.svg" />
                        </Rectangle46>
                        <Frame25>
                            <Frame25Text>3h ago</Frame25Text>
                            <Group40>
                                <Frame35>
                                    <Frame35Text>nearbear.near</Frame35Text>
                                    <Tag_title>
                                        <BabyNewbie>Baby_Newbie</BabyNewbie>
                                    </Tag_title>
                                </Frame35>
                            </Group40>
                        </Frame25>
                        <Frame26>
                            <Frame26Text>nearbear.near</Frame26Text>
                        </Frame26>
                    </Group26>
                    <List840Content>
                        Founders—the following videos are great resources for you and your team. I
                        especially encourage founders to watch the product market fit video. Build
                        on!
                    </List840Content>
                    <Group38>
                        <Group38Icon>
                            <Group38IconImg src="src/assets/commentVector.svg" />
                        </Group38Icon>
                        <Group38Text>80</Group38Text>
                    </Group38>
                    <Group37>
                        <Group37TextIcon>
                            <Group37IconImg src="src/assets/heartVector.svg" />
                        </Group37TextIcon>
                        <Group37Text>20</Group37Text>
                    </Group37>
                </List840>
            </ListBox>
        </>
    );
};

export default HotFeedSection;
