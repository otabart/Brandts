
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { Address } from '@coinbase/onchainkit/identity';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base } from 'viem/chains';
import { WagmiProvider } from 'wagmi';
import { wagmiConfig2 } from '../../configs/wagmi';


const AvatarKit: React.FC<any> = ({ account }) => {

    return (
        <WagmiProvider config={wagmiConfig2 as any}>
            <QueryClientProvider client={new QueryClient()}>
                <OnchainKitProvider apiKey="organizations/0dbb1789-c978-442c-b282-fdccffa9c5ab/apiKeys/82fa54c6-c604-4295-9e8c-f17b5db6d8e4" chain={base as any}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* <Avatar 
                        style={{ width: '30px', borderRadius: '5px', "marginRight": "10px" }} 
                        address={account.address} /> */}
                        <Address className="bg-white px-2 py-1" address={account.address} />
                    </div>
                </OnchainKitProvider>
            </QueryClientProvider>
        </WagmiProvider >
    );
}

export default AvatarKit