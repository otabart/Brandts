
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base } from 'viem/chains';
import { WagmiProvider } from 'wagmi';
import { wagmiConfig2 } from '../../configs/wagmi';


const token = {
    address: '0x1234',
    chainId: 1,
    decimals: 18,
    image:
        'https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png',
    name: 'Ethereum',
    symbol: 'ETH',
};



const TokenChip: React.FC<any> = () => {

    return (
        <WagmiProvider config={wagmiConfig2 as any}>
            <QueryClientProvider client={new QueryClient()}>
                <OnchainKitProvider apiKey="organizations/0dbb1789-c978-442c-b282-fdccffa9c5ab/apiKeys/82fa54c6-c604-4295-9e8c-f17b5db6d8e4" chain={base as any}>
                    <TokenChip token={token as any} />;
                </OnchainKitProvider>
            </QueryClientProvider>
        </WagmiProvider >
    );
}

export default TokenChip