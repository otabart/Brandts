# Brandts

Brandts is an innovative onchain application that connects brands with content creators through blockchain technology. It simplifies the process of creating and managing marketing campaigns while ensuring secure and transparent transactions.

## Features

- **Campaign Creation**: Brands can create detailed campaigns specifying goals, requirements, target audience, and more.
- **Wallet Integration**: Seamless integration with Coinbase Smart Wallet for secure fund management and user onboarding.
- **Content Submission**: Content creators can submit their work directly through the platform, linking videos and relevant campaign content.
- **Smart Contract Handling**: Utilizes smart contracts to securely hold and distribute campaign funds at the end of each campaign.
- **Dashboard**: Intuitive dashboard for brands to monitor campaign performance, manage submissions, and make informed decisions.

## Repository Structure

The repository is structured into the following directories:

- **frontend/**: Contains the React-based frontend application.
- **backend/**: Houses the Node.js backend server handling API requests and business logic.
- **smartcontract/**: Includes the Ethereum smart contracts responsible for fund management and distribution.

## Installation

To get started with Brandts locally, follow these steps:

### Prerequisites

- Node.js (version 12 or higher)
- npm package manager
- Truffle suite for smart contract development

### Frontend Setup

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend/
   ```
2. Navigate to the frontend/ directory:
    ```bash
    cd frontend/
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    yarn run dev
    ```
### Backend Setup

1. Navigate to the `backend/` directory:
   ```bash
   cd backend/
   ```
2. Navigate to the backend/ directory:
    ```bash
    cd frontend/
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
### Smart Contract Deployment
1. Navigate to the `smartcontract/` directory:
   ```bash
   cd smartcontract/
   ```
2. Navigate to the smartcontract/ directory:
    ```bash
    cd smartcontract/
    ```
3. Compile and migrate the smart contracts using Truffle:
    ```bash
    truffle compile
    truffle migrate --network <development or testnet>
    ```
4. Interact with smart contracts deployed on base testnet or mainnet to handle campaign fund operations securely.

## Deployed Links
- Frontend: [Brandts Frontend](https://brandts.vercel.app/)
- Backend: [Brandts Backend API](https://brandts-backend.vercel.app/api/v1)
- Smart Contract Address: 0x1234567890abcdef1234567890abcdef12345678
Etherscan Link: [Brandts Smart Contract on Etherscan](https://sepolia.basescan.org/address/0x5F27CC10D7fD2a05294BB4ee4d05973f012fe99D#writeContract)

## Contributing
We welcome contributions to Brandts! To contribute:

- Fork the repository.
- Create your feature branch (git checkout -b feature/YourFeature).
- Commit your changes (git commit -am 'Add some feature').
- Push to the branch (git push origin feature/YourFeature).
- Create a new Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For inquiries, issues, or collaborations, please contact Adaobi Chuks-Aginam at chuksaginamada@gmail.com