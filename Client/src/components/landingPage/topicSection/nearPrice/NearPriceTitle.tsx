import { FC } from "react";
import { HotFeed, Icon } from "src/components/landingPage/topicSection/TopicSection.styled";
import {
    Frame32,
    Frame32_0001,
    NearLogo1Traced,
} from "src/components/landingPage/topicSection/nearPrice/NearPriceTitle.styled";

const NearPriceTitle: FC<{ children: string }> = ({ children }) => {
    return (
        <>
            <Frame32>
                <Frame32_0001>
                    <Icon>
                        <NearLogo1Traced xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="black"
                                d="M1.30435 1.01164C-0.599655 2.91564 -0.346655 29.1926 1.59135 30.8006C2.40935 31.4796 3.73034 31.7856 4.52734 31.4796C6.01834 30.9076 13.1043 21.0036 13.1043 19.4906C13.1043 19.0246 11.3043 20.0696 9.10435 21.8116L5.10434 24.9796L5.12634 15.6456C5.14834 6.64364 5.21034 6.38764 6.87634 8.44564C30.6623 37.8196 32.1043 38.2366 32.1043 15.7336C32.1043 4.84864 31.8003 1.80464 30.6173 0.822637C28.3943 -1.02236 26.6113 0.137637 22.6683 5.99264C18.1183 12.7486 18.1663 13.7326 22.8543 9.85764L26.6043 6.75864L26.9093 11.2856C27.0763 13.7746 27.0763 17.8636 26.9093 20.3726L26.6043 24.9336L16.2243 12.3726C6.18735 0.226637 3.86135 -1.54536 1.30435 1.01164Z"
                            />
                        </NearLogo1Traced>
                    </Icon>
                    <HotFeed>{children}</HotFeed>
                </Frame32_0001>
            </Frame32>
        </>
    );
};

export default NearPriceTitle;
