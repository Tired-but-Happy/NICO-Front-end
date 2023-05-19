import { Frame41, Tag_0003, Tag_0006 } from "src/components/accountPage/bottom/Title.styled";
import { MyProfile } from "src/components/accountPage/top/TopSection.styled";

const Title = () => {
    return (
        <>
            <Frame41>
                <Tag_0003>
                    <MyProfile>Transaction</MyProfile>
                </Tag_0003>
                <Tag_0003>
                    <MyProfile>Token txns</MyProfile>
                </Tag_0003>
                <Tag_0003>
                    <MyProfile>NFT txns</MyProfile>
                </Tag_0003>
                <Tag_0006>
                    <MyProfile>Access Key</MyProfile>
                </Tag_0006>
            </Frame41>
        </>
    );
};

export default Title;
