import { useEffect, useCallback, useState, useContext } from "react";
import type { AccountState, WalletSelector } from "@near-wallet-selector/core";
import { setupWalletSelector } from "@near-wallet-selector/core";
import { WalletSelectorModal, setupModal } from "@near-wallet-selector/modal-ui";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupWalletConnect } from "@near-wallet-selector/wallet-connect";

import {
    About,
    Blockchain,
    Frame1,
    Frame16,
    Frame5,
    Frame6,
    Group14,
    Group21,
    ArrowDownBox,
    NavbarBefore,
    Nico,
    SignIn,
    SupernicoNear,
    Vector_0012,
    YellowBlock,
} from "src/components/layout/Navbar.styled";
import { CONTRACT_ID } from "src/utils/constants";
import usePostLogin from "src/hooks/useText";
import { Link } from "react-router-dom";
import { NearContext } from "src/NearContext";

declare global {
    interface Window {
        selector: WalletSelector;
        modal: WalletSelectorModal;
    }
}

const Navbar = () => {
    const { setWalletSelector, setAccount } = useContext(NearContext);

    const [selector, setSelector] = useState<WalletSelector | null>(null);
    const [modal, setModal] = useState<WalletSelectorModal | null>(null);
    const [accounts, setAccounts] = useState<Array<AccountState>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const { data } = usePostLogin({ userAddress: accounts[0]?.accountId });

    const init = useCallback(async () => {
        const _selector = await setupWalletSelector({
            network: "testnet",
            debug: true,
            modules: [
                setupMyNearWallet(),
                setupNearWallet(),
                setupMeteorWallet(),
                setupHereWallet(),
                setupWalletConnect({
                    projectId: "c4f79cc...",
                    metadata: {
                        name: "NEAR Wallet Selector",
                        description: "Example dApp used by NEAR Wallet Selector",
                        url: "https://github.com/near/wallet-selector",
                        icons: ["https://avatars.githubusercontent.com/u/37784886"],
                    },
                }),
            ],
        });
        const _modal = setupModal(_selector, {
            contractId: CONTRACT_ID,
        });
        const state = _selector.store.getState();
        setAccounts(state.accounts);

        // this is added for debugging purpose only
        // for more information (https://github.com/near/wallet-selector/pull/764#issuecomment-1498073367)
        window.selector = _selector;
        window.modal = _modal;

        setSelector(_selector);
        setModal(_modal);
        setLoading(false);
        if (setWalletSelector && setAccount) {
            setWalletSelector(_selector);
            setAccount(state.accounts);
        }
    }, []);

    useEffect(() => {
        init().catch((err) => {
            console.error(err);
            alert("Failed to initialise wallet selector");
        });
    }, [init]);

    useEffect(() => {
        if (data) {
            localStorage.setItem("accessToken", data as string);
        } else {
            localStorage.removeItem("accessToken");
        }
    }, [data]);

    const onClickSignIn = useCallback(() => {
        if (modal) {
            modal.show();
        }
        if (accounts.length > 0) {
            window.location.href = `/account?username=${accounts[0].accountId}`;
        }
    }, [modal]);

    const handleSignOut = useCallback(async () => {
        if (selector) {
            const wallet = await selector.wallet();

            wallet.signOut().catch((err) => {
                console.log("Failed to sign out");
                console.error(err);
            });
            location.reload();
        }
    }, [selector]);

    return (
        <>
            <NavbarBefore>
                <Link to="http://localhost:5173/">
                    <Nico src="src/assets/layout/nico_icon.svg" />
                </Link>
                <Frame6>
                    <Frame5>
                        <Link to="http://localhost:5173/about">
                            <About>About</About>
                        </Link>
                    </Frame5>

                    {Array.isArray(accounts) && accounts.length === 0 ? (
                        <Frame1 onClick={onClickSignIn}>
                            <SignIn>Sign in</SignIn>
                        </Frame1>
                    ) : (
                        <Frame16 onClick={handleSignOut}>
                            <Group14>
                                <ArrowDownBox>
                                    <Vector_0012 src="src/assets/layout/arrow_down.svg" />
                                </ArrowDownBox>
                                <Group21>
                                    <YellowBlock src="src/assets/profile/yellow_block_s.svg" />
                                </Group21>
                                <SupernicoNear>{accounts[0].accountId}</SupernicoNear>
                            </Group14>
                        </Frame16>
                    )}
                </Frame6>
            </NavbarBefore>
        </>
    );
};

export default Navbar;
