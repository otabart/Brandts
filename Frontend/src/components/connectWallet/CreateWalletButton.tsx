import { useCallback } from 'react';
import { useConnect } from 'wagmi';
import { CoinbaseWalletLogo } from './CoinBaseWalletLogo';

export const buttonStyles: any = {
    background: 'transparent',
    border: '1px solid transparent',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 125,
    height: 45,
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 13,
    backgroundColor: 'navy',
    paddingLeft: 5,
    paddingRight: 9,
    borderRadius: 10,
    marginTop: 5,
    color: "#fff",
    transition: 'background-color 0.3s ease',
    cursor: 'pointer'
};

export function CreateWalletButton() {
    const { connectors, connect } = useConnect();

    const createWallet = useCallback(() => {
        const coinbaseWalletConnector = connectors.find(
            (connector) => connector.id === 'coinbaseWalletSDK'
        );
        if (coinbaseWalletConnector) {
            connect({ connector: coinbaseWalletConnector });
        }
    }, [connectors, connect]);
    return (
        <button
            style={buttonStyles}
            onClick={createWallet}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1DA1F2';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'navy';
            }}>
            <CoinbaseWalletLogo />
            Smart Connect
        </button>
    );
}