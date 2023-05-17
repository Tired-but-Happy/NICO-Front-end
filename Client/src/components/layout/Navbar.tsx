import { useEffect, useCallback, useState } from "react";
import type { AccountState, WalletSelector } from "@near-wallet-selector/core";
import { setupWalletSelector } from "@near-wallet-selector/core";
import { WalletSelectorModal, setupModal } from "@near-wallet-selector/modal-ui";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";

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

declare global {
    interface Window {
        selector: WalletSelector;
        modal: WalletSelectorModal;
    }
}

const Naver = () => {
    const [selector, setSelector] = useState<WalletSelector | null>(null);
    const [modal, setModal] = useState<WalletSelectorModal | null>(null);
    const [accounts, setAccounts] = useState<Array<AccountState>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const init = useCallback(async () => {
        const _selector = await setupWalletSelector({
            network: "testnet",
            debug: true,
            modules: [
                setupMyNearWallet(),
                setupNearWallet(),
                setupMeteorWallet(),
                setupHereWallet(),
            ],
        });
        const _modal = setupModal(_selector, {
            contractId: CONTRACT_ID,
        });
        const state = _selector.store.getState();
        console.log(state);
        setAccounts(state.accounts);

        // this is added for debugging purpose only
        // for more information (https://github.com/near/wallet-selector/pull/764#issuecomment-1498073367)
        window.selector = _selector;
        window.modal = _modal;

        setSelector(_selector);
        setModal(_modal);
        setLoading(false);
    }, []);

    useEffect(() => {
        init().catch((err) => {
            console.error(err);
            alert("Failed to initialise wallet selector");
        });
    }, [init]);

    const onClickSignIn = useCallback(() => {
        if (modal) {
            modal.show();
        }
    }, [modal]);

    return (
        <>
            <NavbarBefore>
                <Nico src="src/assets/layout/nico_icon.svg" />
                <Frame6>
                    <Frame5>
                        <About>About</About>
                    </Frame5>
                    <Frame5>
                        <Blockchain>Blockchain</Blockchain>
                    </Frame5>
                    {true ? (
                        <Frame1 onClick={onClickSignIn}>
                            <SignIn>Sign in</SignIn>
                        </Frame1>
                    ) : (
                        <Frame16>
                            <Group14>
                                <ArrowDownBox>
                                    <Vector_0012 src="src/assets/layout/arrow_down.svg" />
                                </ArrowDownBox>
                                <Group21>
                                    <YellowBlock src="src/assets/profile/yellow_block_s.svg" />
                                </Group21>
                                <SupernicoNear>supernico.near</SupernicoNear>
                            </Group14>
                        </Frame16>
                    )}
                </Frame6>
            </NavbarBefore>
        </>
    );
};

export default Naver;
