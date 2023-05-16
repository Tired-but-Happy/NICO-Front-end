import { Group43 } from "src/components/infoPage/info/CommonSection.styled";
import InfoList from "src/components/infoPage/info/InfoList";
import Title from "src/components/infoPage/info/Title";
import { Background } from "src/components/landingPage/topicSection/TopicSection.styled";

const CommonSection = () => {
    return (
        <>
            <Group43>
                <Background>
                    <Title />
                    <InfoList />
                </Background>
            </Group43>
        </>
    );
};

export default CommonSection;
