import { http, createConfig } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { coinbaseWallet } from 'wagmi/connectors'

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [
    // injected(),
    // coinbaseWallet(),
    coinbaseWallet({ appName: 'Create Wagmi', preference: 'smartWalletOnly' }),
  ],
  transports: {
    [baseSepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

import { base } from 'wagmi/chains';

export const wagmiConfig2 = createConfig({
  chains: [base],
  multiInjectedProviderDiscovery: false,
  connectors: [
    coinbaseWallet({
      appName: 'yourAppName',
      preference: 'all',
      version: '4',
    }),
  ],
  ssr: true,
  transports: {
    [base.id]: http(),
  },
});
