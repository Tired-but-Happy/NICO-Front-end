import { WalletSelector } from "@near-wallet-selector/core";
import { createContext, useState, FC } from "react";

interface INearContext {
    walletSelector: WalletSelector | null;
    setWalletSelector: React.Dispatch<React.SetStateAction<any>> | null;
    account: Account[] | null;
    setAccount: React.Dispatch<React.SetStateAction<any>> | null;
}

// Initial context value
const initialContextValue: INearContext = {
    walletSelector: null,
    setWalletSelector: null,
    account: null,
    setAccount: null,
};

interface Account {
    accountId: string;
    active: boolean;
    publicKey: string;
}

export const NearContext = createContext<INearContext>(initialContextValue);

export const NearProvider: FC<any> = ({ children }) => {
    const [walletSelector, setWalletSelector] = useState<WalletSelector | null>(null);
    const [account, setAccount] = useState<Account[] | null>(null);

    return (
        <NearContext.Provider value={{ walletSelector, setWalletSelector, account, setAccount }}>
            {children}
        </NearContext.Provider>
    );
};
