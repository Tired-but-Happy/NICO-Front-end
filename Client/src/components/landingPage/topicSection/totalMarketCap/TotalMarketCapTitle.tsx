import { FC } from "react";
import { HotFeed, Icon } from "src/components/landingPage/topicSection/TopicSection.styled";
import {
    Frame33,
    Frame33_0001,
    Group46,
    Rectangle54,
    Rectangle55,
    Rectangle56,
    Vector5,
} from "src/components/landingPage/topicSection/totalMarketCap/TotalMarketCapTitle.styled";

const TotalMarketCapTitle: FC<{ children: string }> = ({ children }) => {
    return (
        <>
            <Group46>
                <Frame33>
                    <Frame33_0001>
                        <Icon>
                            <Vector5
                                src="src/assets/landingPage/total_bar_vector.svg"
                                alt="image of Vector5"
                            />
                            <Rectangle54 />
                            <Rectangle55 />
                            <Rectangle56 />
                        </Icon>
                        <HotFeed>{children}</HotFeed>
                    </Frame33_0001>
                </Frame33>
            </Group46>
        </>
    );
};

export default TotalMarketCapTitle;
