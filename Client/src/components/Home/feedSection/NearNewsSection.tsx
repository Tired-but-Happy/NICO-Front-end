import {
    Frame34,
    Frame34Icon,
    Frame34IconBox,
    Frame34IconImg,
    Frame34Text,
    Group41,
    Group41Ago,
    Group41Content,
    Group48,
    List_news,
    Rectangle58,
} from "./FeedSection.styled";

const NearNewsSection = () => {
    return (
        <>
            <Group48>
                <Rectangle58>
                    <Frame34>
                        <Frame34Icon>
                            <Frame34IconBox>
                                <Frame34IconImg src="src/assets/newsVector.svg" />
                            </Frame34IconBox>
                        </Frame34Icon>
                        <Frame34Text>Near news</Frame34Text>
                    </Frame34>
                </Rectangle58>
            </Group48>
            <List_news>
                <Group41>
                    <Group41Ago>2 h ago</Group41Ago>
                    <Group41Content>
                        near news ar near near narnear news arnear n...{" "}
                    </Group41Content>
                </Group41>
            </List_news>
        </>
    );
};

export default NearNewsSection;
