export function shortenAddress(address: string | undefined): string {
    if (!address) return "Invalid Address";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
