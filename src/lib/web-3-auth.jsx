import { EIP6963Connector, walletConnectProvider } from "@web3modal/wagmi1";
import { createWeb3Modal } from "@web3modal/wagmi1/react";

import { arbitrumSepolia } from "viem/chains";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;
const alchemyKey = import.meta.env.VITE_ALCHEMY_API_ID;
const chainList = [arbitrumSepolia]

const { chains, publicClient } = configureChains(
	chainList,
	[
		walletConnectProvider({ projectId }),
		alchemyProvider({ apiKey: alchemyKey }),
		publicProvider(),
	],
);

const metadata = {
	name: "Citizin.xyz",
	description: "DAO Voting made easy",
	url: "https://citizin-xyz.vercel.app/",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors: [
		new WalletConnectConnector({
			chains,
			options: { projectId, showQrModal: false, metadata },
		}),
		new EIP6963Connector({ chains }),
		new InjectedConnector({ chains, options: { shimDisconnect: true } }),
		new CoinbaseWalletConnector({
			chains,
			options: { appName: metadata.name },
		}),
	],
	publicClient,
});

createWeb3Modal({
	wagmiConfig,
	projectId,
	chains,
	themeMode: "light",
	defaultChain: arbitrumSepolia,
});

export function Web3Auth({ children }) {
	return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
