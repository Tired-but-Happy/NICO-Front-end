import {
    Frame32,
    Frame32Icon,
    Frame32IconImg,
    Frame32Text,
    Group44,
    Group44Rectangle59,
    Rectangle62,
    Rectangle62Content,
    Rectangle62Title,
} from "./FeedSection.styled";

const NearPriceSection = () => {
    return (
        <>
            <Group44>
                <Frame32>
                    <Frame32Icon>
                        <Frame32IconImg src="src/assets/near_logo_1.svg" />
                    </Frame32Icon>
                    <Frame32Text>Near price</Frame32Text>
                </Frame32>
                <Group44Rectangle59 />
                <Rectangle62>
                    <Rectangle62Title>$ 1.77</Rectangle62Title>
                    <Rectangle62Content>@0.0006 BTC (+4.16%)</Rectangle62Content>
                </Rectangle62>
            </Group44>
        </>
    );
};

export default NearPriceSection;
