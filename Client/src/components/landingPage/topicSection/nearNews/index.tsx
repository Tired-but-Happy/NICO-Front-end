import { Group48 } from "src/components/landingPage/topicSection/TopicSection.styled";
import NewsSectionContent from "src/components/landingPage/topicSection/nearNews/NewsSectionContent";
import NewsSectionTitle from "src/components/landingPage/topicSection/nearNews/NewsSectionTitle";

const NewsSection = () => {
    return (
        <>
            <Group48>
                <NewsSectionTitle>Near news</NewsSectionTitle>
            </Group48>
            <NewsSectionContent />
        </>
    );
};

export default NewsSection;
