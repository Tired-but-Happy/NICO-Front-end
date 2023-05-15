import {
    Frame33,
    Frame33Icon,
    Frame33Text,
    Group47,
    Rectangle54,
    Rectangle55,
    Rectangle56,
    Rectangle60,
    Rectangle63,
    Rectangle63Text,
    Rectangle99,
} from "./FeedSection.styled";

const TotalMarketCapSection = () => {
    return (
        <>
            <Group47>
                <Frame33>
                    <Frame33Icon>
                        <Rectangle56 src="src/assets/Rectangle56.svg" />
                        <Rectangle55 src="src/assets/Rectangle55.svg" />
                        <Rectangle54 src="src/assets/Rectangle54.svg" />
                        <Rectangle99 src="src/assets/Rectangle99.svg" />
                    </Frame33Icon>
                    <Frame33Text>Total market cap</Frame33Text>
                </Frame33>
                <Rectangle60 />
                <Rectangle63>
                    <Rectangle63Text>$1,493,412,401.00</Rectangle63Text>
                </Rectangle63>
            </Group47>
        </>
    );
};

export default TotalMarketCapSection;
