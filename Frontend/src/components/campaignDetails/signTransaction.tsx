import { useAccount, useSignTypedData, useSimulateContract, useWriteContract } from "wagmi";
import { closeCampaignById, deleteCampaignById, openCampaignById, payOutById } from "../../api/Campaign";
import CampaignManagerABI from "../../ABI/campaignManagerABI.json";
import { ethers, parseEther } from 'ethers';
import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const types = {
    Campaign: [
        { name: 'creator', type: 'address' },
        { name: 'reward', type: 'uint256' },
    ],
};

const SignTransaction: React.FC<any> = ({ campaign }) => {
    const account = useAccount()
    const { signTypedDataAsync } = useSignTypedData();
    const [signature, setSignature] = useState<string | null>(null);
    const navigate = useNavigate();

    const domain = {
        name: 'CampaignManager',
        version: '1',
        chainId: account.chainId,
        verifyingContract: '0x5F27CC10D7fD2a05294BB4ee4d05973f012fe99D' as `0x${string}`
    };

    const message = useMemo(() => ({
        creator: account.address as `0x${string}`,
        reward: ethers.parseEther('0.00001').toString(),
    }), []);

    const { data: simulateContractData, error: simulateContractError } = useSimulateContract({
        address: domain.verifyingContract,
        abi: CampaignManagerABI.abi,
        functionName: "createCampaign",
        args: [],
        value: parseEther("0.00001"),
    });

    if (simulateContractError) {
        console.error('Error simulating contract:', simulateContractError.message);
        toast.error('Failed to simulate campaign creation. Please try again.');
        return;
    }

    const { error: writeError, writeContractAsync, data: _writeContractData } = useWriteContract();

    const handleSignTypedData = async () => {
        try {
            const data = await signTypedDataAsync({ domain, types, message, primaryType: 'Campaign' });
            setSignature(data);
        } catch (error) {
            console.error('Error signing typed data:', error);
        }
    };

    const handleCreateCampaign = async (campaignId: string) => {
        if (!signature) {
            toast.error('Please sign transaction first.');
            return
        };

        try {
            if (simulateContractData?.request) {
                const transaction = await writeContractAsync(simulateContractData.request);
                if (writeError) {
                    console.error('Error writing contract:', writeError.message);
                    toast.error('Failed to create campaign. Please try again.');
                    return;
                }
                await openCampaignById(campaignId);
                toast.success('Campaign created successfully');
                window.location.reload();
                console.log('Transaction sent:', transaction);
            } else {
                console.error('Simulation data not available.');
                toast.error('Failed to initiate campaign creation.');
            }
        } catch (error: any) {
            console.error('Error creating campaign:', error.message);
        }
    };

    const handleCloseCampaign = async (campaignId: string) => {
        try {
            await closeCampaignById(campaignId);
            toast.success("Campaign closed successfully");
            window.location.reload();
        } catch (error) {
            console.error('Error closing campaign:', error);
        }
    };

    const handleDeleteCampaign = async (campaignId: string) => {
        try {
            await deleteCampaignById(campaignId);
            toast.success("Campaign deleted successfully")
            navigate(`/dashboard`);
        } catch (error) {
            console.error('Error closing campaign:', error);
        }
    };

    const payOut = async (campaignId: string) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 10000));
            toast.success("Creators paid successfully")
            await payOutById(campaignId);
            window.location.reload();
        } catch (error) {
            console.error('Error paying creators:', error);
        }
    };

    return (<div>
        {account.address === campaign.userId && (
            <>
                {campaign.status === "inProgress" && (
                    <div className="mt-4 flex flex-col items-center" style={{ marginTop: "20px" }}>
                        <p className="text-sm md:text-base xl:text-lg font-semibold mb-4">
                            Amount: {campaign.budget} Eth
                        </p>
                        <div className="flex space-x-2" style={{ marginTop: "20px" }}>
                            <button
                                onClick={handleSignTypedData}
                                className="w-40 md:w-60 rounded-3xl px-5 py-3 bg-bgDark border-inherit border-2 text-white hover:text-inherit hover:bg-white duration-300"
                                type="submit"
                                style={{ marginRight: "20px" }}
                            >
                                Sign Transaction
                            </button>
                            <button
                                onClick={() => handleCreateCampaign(campaign._id)}
                                className="w-40 md:w-60 rounded-3xl px-5 py-3 bg-bgDark border-inherit border-2 text-white hover:text-inherit hover:bg-white duration-300"
                                type="submit"
                            >
                                Create Campaign
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                )}
                {(campaign.status === "open") && (
                    <div className="mt-4 flex flex-col items-center" style={{ marginTop: "20px" }}>
                        <button
                            onClick={() => handleCloseCampaign(campaign._id)}
                            className="w-40 md:w-60 rounded-3xl px-5 py-3 bg-bgDark border-inherit border-2 text-white hover:text-inherit hover:bg-white duration-300"
                            type="submit"
                            style={{ marginRight: "20px" }}
                        >
                            Close Campaign
                        </button>
                    </div>)
                }
                {(campaign.status === "inProgress") &&
                    <div className="mt-4 flex flex-col items-center" style={{ marginTop: "20px" }}>
                        <button
                            onClick={() => handleDeleteCampaign(campaign._id)}
                            className="w-40 md:w-60 rounded-3xl px-5 py-3 bg-bgDark border-inherit border-2 text-white hover:text-inherit hover:bg-white duration-300"
                            type="submit"
                            style={{ marginRight: "20px" }}
                        >
                            Delete Campaign
                        </button>
                    </div>
                }
                {(campaign.status === "closed") &&
                    <div className="mt-4 flex flex-col items-center" style={{ marginTop: "20px" }}>
                        <button
                            onClick={() => payOut(campaign._id)}
                            className="w-40 md:w-60 rounded-3xl px-5 py-3 bg-bgDark border-inherit border-2 text-white hover:text-inherit hover:bg-accentColor duration-300"
                            type="submit"
                            style={{ marginRight: "20px" }}
                        >
                            Payout
                        </button>
                    </div>
                }
                {(campaign.status === "paid") &&
                    <p style={{ marginTop: "10px" }} className={`text-2xl text-red-600 uppercase md:text-4xl xl:text-6xl font-bold text-center`}>
                        CLOSED
                    </p>
                }
            </>
        )}
    </div>)
}

export default SignTransaction;