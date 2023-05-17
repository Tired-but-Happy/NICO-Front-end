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

const RightSection = () => {
    return (
        <>
            <OftenUsedDapp>Often Used DAPP</OftenUsedDapp>
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
    );
};

export default RightSection;
