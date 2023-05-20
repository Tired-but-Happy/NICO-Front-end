import queryString from "query-string";
import { useLocation } from "react-router-dom";
import {
    Frame24_0001,
    Group26,
    Group26_0004,
    Group26_0005,
    List412,
    List412_0004,
    List412_0005,
    List412_0006,
    ListDapp,
    NftTagIcon,
    OftenUsedDapp,
    Rectangle44,
    Rectangle46,
    TokenBurrowNear,
} from "src/components/accountPage/top/profile/right/RightSection.styled";
import useGetMyPage from "src/hooks/useMypage";

const RightSection = () => {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const { data, isLoading } = useGetMyPage({ account: query.accountname });
    console.log(data);

    return (
        <>
            <OftenUsedDapp>Often Used DAPP</OftenUsedDapp>
            {isLoading ? (
                <>
                    <ListDapp>
                        <Frame24_0001>
                            <Rectangle44 />
                            <List412>
                                <Group26>
                                    <Rectangle46
                                        src="src/assets/accountPage/often_used.svg"
                                        alt="image of Rectangle46"
                                    />
                                    <TokenBurrowNear>token.burrow.near</TokenBurrowNear>
                                </Group26>
                                <NftTagIcon src="src/assets/accountPage/nft_tag.svg" />
                            </List412>
                            <List412_0004>
                                <Group26_0004>
                                    <Rectangle46
                                        src="src/assets/accountPage/often_used.svg"
                                        alt="image of Rectangle46"
                                    />
                                    <TokenBurrowNear>token.burrow.near</TokenBurrowNear>
                                </Group26_0004>
                                <NftTagIcon src="src/assets/accountPage/nft_tag.svg" />
                            </List412_0004>
                            <List412_0005>
                                <Group26_0005>
                                    <Rectangle46
                                        src="src/assets/accountPage/often_used.svg"
                                        alt="image of Rectangle46"
                                    />
                                    <TokenBurrowNear>token.burrow.near</TokenBurrowNear>
                                </Group26_0005>
                                <NftTagIcon src="src/assets/accountPage/nft_tag.svg" />
                            </List412_0005>
                            <List412_0006>
                                <Group26>
                                    <Rectangle46
                                        src="src/assets/accountPage/often_used.svg"
                                        alt="image of Rectangle46"
                                    />
                                    <TokenBurrowNear>token.burrow.near</TokenBurrowNear>
                                </Group26>
                                <NftTagIcon src="src/assets/accountPage/nft_tag.svg" />
                            </List412_0006>
                        </Frame24_0001>
                    </ListDapp>
                </>
            ) : (
                <>
                    <ListDapp>
                        <Frame24_0001>
                            <Rectangle44 />
                            <List412>
                                <Group26>
                                    <Rectangle46
                                        src="/src/assets/accountPage/often_used.svg"
                                        alt="image of Rectangle46"
                                    />
                                    <TokenBurrowNear>
                                        {data && data.usedAppList[0].appName.substr(0, 12)}....
                                    </TokenBurrowNear>
                                </Group26>
                                {data && data.usedAppList[0].appCategory == "nft" ? (
                                    <NftTagIcon src="/src/assets/accountPage/nft_tag.svg" />
                                ) : data && data.usedAppList[0].appCategory == "defi" ? (
                                    <NftTagIcon src="/src/assets/accountPage/defi_tag.svg" />
                                ) : data && data.usedAppList[0].appCategory == "gaming" ? (
                                    <NftTagIcon src="/src/assets/accountPage/gaming_tag.svg" />
                                ) : (
                                    <></>
                                )}
                            </List412>
                            <List412_0004>
                                <Group26_0004>
                                    <Rectangle46
                                        src="/src/assets/accountPage/often_used.svg"
                                        alt="image of Rectangle46"
                                    />
                                    <TokenBurrowNear>
                                        {data && data.usedAppList[1].appName.substr(0, 12)}....
                                    </TokenBurrowNear>
                                </Group26_0004>
                                {data && data.usedAppList[1].appCategory == "nft" ? (
                                    <NftTagIcon src="/src/assets/accountPage/nft_tag.svg" />
                                ) : data && data.usedAppList[1].appCategory == "defi" ? (
                                    <NftTagIcon src="/src/assets/accountPage/defi_tag.svg" />
                                ) : data && data.usedAppList[1].appCategory == "gaming" ? (
                                    <NftTagIcon src="/src/assets/accountPage/gaming_tag.svg" />
                                ) : (
                                    <></>
                                )}
                            </List412_0004>
                            <List412_0005>
                                <Group26_0005>
                                    <Rectangle46
                                        src="/src/assets/accountPage/often_used.svg"
                                        alt="image of Rectangle46"
                                    />
                                    <TokenBurrowNear>
                                        {data && data.usedAppList[2].appName.substr(0, 12)}....
                                    </TokenBurrowNear>
                                </Group26_0005>
                                {data && data.usedAppList[2].appCategory == "nft" ? (
                                    <NftTagIcon src="/src/assets/accountPage/nft_tag.svg" />
                                ) : data && data.usedAppList[2].appCategory == "defi" ? (
                                    <NftTagIcon src="/src/assets/accountPage/defi_tag.svg" />
                                ) : data && data.usedAppList[2].appCategory == "gaming" ? (
                                    <NftTagIcon src="/src/assets/accountPage/gaming_tag.svg" />
                                ) : (
                                    <></>
                                )}
                            </List412_0005>
                            <List412_0006>
                                <Group26>
                                    <Rectangle46
                                        src="/src/assets/accountPage/often_used.svg"
                                        alt="image of Rectangle46"
                                    />
                                    <TokenBurrowNear>
                                        {data && data.usedAppList[3].appName.substr(0, 12)}....
                                    </TokenBurrowNear>
                                </Group26>
                                {data && data.usedAppList[3].appCategory == "nft" ? (
                                    <NftTagIcon src="/src/assets/accountPage/nft_tag.svg" />
                                ) : data && data.usedAppList[3].appCategory == "defi" ? (
                                    <NftTagIcon src="/src/assets/accountPage/defi_tag.svg" />
                                ) : data && data.usedAppList[3].appCategory == "gaming" ? (
                                    <NftTagIcon src="/src/assets/accountPage/gaming_tag.svg" />
                                ) : (
                                    <></>
                                )}
                            </List412_0006>
                        </Frame24_0001>
                    </ListDapp>
                </>
            )}
        </>
    );
};

export default RightSection;
