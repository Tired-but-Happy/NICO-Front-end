import { useLocation } from "react-router-dom";
import queryString from "query-string";
import {
    Balance,
    Frame24,
    Supernico,
    Eth,
    Introduction,
    TagLevel,
    Lv1,
    Frame23,
    SelectTitle,
    Frame22,
    Group21,
    Frame21_0002,
    Followers,
    FollowersNum,
    Frame22_0001,
    Following,
    Group24,
    Group23,
    WalletAccount,
    WalletIcon,
    CopyIcon,
    CopyBox,
    ArrowDownIcon,
} from "src/components/accountPage/top/profile/center/CenterSection.styled";
import useGetAccountInfo from "src/hooks/useAccountInfo";
import useAccountDetail from "src/hooks/useAccountDetail";
import { useEffect, useState } from "react";

const CenterSection = () => {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const [balance, setBalance] = useState("0");
    const [address, setAddress] = useState("");
    const [nickName, setNickName] = useState("Supernico");

    const dbAccount = useGetAccountInfo({ accountInfo: query.accountname });
    const accountNear = useAccountDetail({ account: query.accountname });

    useEffect(() => {
        const accountData = accountNear.data;
        if (accountData) {
            const data = (Number(accountData.amount) / 10 ** 24).toFixed(2);
            setBalance(data);
        }
    }, [accountNear]);

    useEffect(() => {
        const dbData = dbAccount.data;

        if (dbData) {
            setAddress(dbData.mypageInfo.userAddress);
            if (dbData.mypageInfo.nickname) {
                setNickName(dbData.mypageInfo.nickname);
            }
        }
    }, [dbAccount.isLoading]);

    return (
        <>
            <Supernico>
                {dbAccount.isLoading ? (
                    <>
                        <img
                            style={{ width: "30px", marginLeft: "120px", marginBottom: "5px" }}
                            src="/src/assets/layout/loading.gif"
                        />
                    </>
                ) : address == null ? (
                    <>Nearian</>
                ) : (
                    <>{nickName}</>
                )}
            </Supernico>
            <TagLevel>
                <Lv1>Lv.1</Lv1>
            </TagLevel>
            <Group24>
                <WalletIcon src="src/assets/accountPage/mdi_wallet.svg" />
                <Group23>
                    <WalletAccount>{query.accountname}</WalletAccount>
                </Group23>
                {/* <CopyBox>
                    <CopyIcon src="src/assets/accountPage/ph_copy.svg" />
                </CopyBox> */}
            </Group24>
            <Frame23>
                <SelectTitle>What do you want to be called?</SelectTitle>
                <ArrowDownIcon src="src/assets/accountPage/arrow_down.svg" />
            </Frame23>
            <Frame24>
                <Balance>Balance</Balance>
                <Eth>
                    {balance != "0" ? (
                        <>{balance} NEAR</>
                    ) : (
                        <>
                            <img
                                style={{ width: "20px", marginLeft: "20px" }}
                                src="/src/assets/layout/loading.gif"
                            />
                        </>
                    )}
                </Eth>
            </Frame24>
            <Frame22>
                <Group21>
                    <Frame21_0002>
                        <Followers>Followers</Followers>
                        <FollowersNum>246</FollowersNum>
                    </Frame21_0002>
                    <Frame22_0001>
                        <Following>Following</Following>
                        <FollowersNum>178</FollowersNum>
                    </Frame22_0001>
                </Group21>
            </Frame22>
            <Introduction>
                Hello, My name is Super nico, I’m a newbie on Nearchain, idkfkdkfk
                <br />
                Hello, My name is Super nico, I’m a newbie on Nearchain, iHello, My
                <br />
                name is Super nico, I’m a newbie on Nearchain, i...Hello this ia
            </Introduction>
        </>
    );
};

export default CenterSection;
