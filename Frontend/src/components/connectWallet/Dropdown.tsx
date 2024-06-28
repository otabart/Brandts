import React from 'react';
import { useConnect } from 'wagmi';
import { CreateWalletButton, buttonStyles } from './CreateWalletButton'; // Adjust path as necessary

interface AppProps { }

const Dropdown: React.FC<AppProps> = () => {
    const { connectors, connect } = useConnect();

    const handleConnect = (connectorId: string) => {
        const selectedConnector = connectors.find(connector => connector.uid === connectorId);
        if (selectedConnector) {
            connect({ connector: selectedConnector });
        }
    };

    return (
        <div className="p-2">
            <CreateWalletButton />
            {connectors.map(connector => (
                <button
                    key={connector.uid}
                    style={buttonStyles}
                    onClick={() => handleConnect(connector.uid)}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1DA1F2';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'navy';
                    }}
                >
                    {connector.name}
                </button>
            ))}
        </div>
    );
};

export default Dropdown;