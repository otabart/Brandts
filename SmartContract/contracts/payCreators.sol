// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract CampaignManager {
    address public owner;

    struct Campaign {
        address creator;
        uint256 reward;
        bool active;
    }

    struct CampaignDetail {
        uint256 campaignId;
        address creator;
        uint256 reward;
        bool active;
    }

    Campaign[] public campaigns;
    mapping(address => uint256[]) public userCampaigns;

    event CampaignCreated(
        uint256 indexed campaignId,
        address indexed creator,
        uint256 reward
    );
    event CampaignCancelled(uint256 indexed campaignId);
    event Payment(address indexed recipient, uint256 amount);
    event Payout(
        uint256 indexed campaignId,
        address indexed recipient,
        uint256 amount
    );
    event CampaignEnded(uint256 indexed campaignId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyCampaignCreator(uint256 campaignId) {
        require(
            campaigns[campaignId].creator == msg.sender,
            "Not the campaign creator"
        );
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Function to create a campaign
    function createCampaign() external payable {
        require(msg.value > 0, "Reward must be greater than zero");

        campaigns.push(
            Campaign({creator: msg.sender, reward: msg.value, active: true})
        );

        uint256 campaignId = campaigns.length - 1;
        userCampaigns[msg.sender].push(campaignId);

        emit CampaignCreated(campaignId, msg.sender, msg.value);
    }

    // Function to cancel a campaign and receive a refund
    function cancelCampaign(
        uint256 campaignId
    ) external onlyCampaignCreator(campaignId) {
        Campaign storage campaign = campaigns[campaignId];
        require(campaign.active, "Campaign is not active");

        campaign.active = false;
        payable(campaign.creator).transfer(campaign.reward);

        emit CampaignCancelled(campaignId);
    }

    // Function to payout
    function payout(
        uint256 campaignId,
        address[] calldata recipients,
        uint256 ownerFeePercentage
    ) external onlyOwner {
        Campaign storage campaign = campaigns[campaignId];
        require(campaign.active, "Campaign is not active");
        require(recipients.length > 0, "Recipients array is empty");

        uint256 ownerFee = (campaign.reward * ownerFeePercentage) / 100;
        uint256 remainingReward = campaign.reward - ownerFee;
        uint256 totalRecipients = recipients.length;
        uint256 amountPerRecipient = remainingReward / totalRecipients;

        // Transfer the owner's fee
        require(
            address(this).balance >= ownerFee,
            "Insufficient balance for owner fee"
        );
        payable(owner).transfer(ownerFee);
        emit Payment(owner, ownerFee);

        // Transfer the remaining reward to recipients
        for (uint256 i = 0; i < recipients.length; i++) {
            require(
                address(this).balance >= amountPerRecipient,
                "Insufficient balance for recipient payout"
            );
            payable(recipients[i]).transfer(amountPerRecipient);
            emit Payout(campaignId, recipients[i], amountPerRecipient);
        }

        campaign.active = false;
        emit CampaignEnded(campaignId);
    }

    //retrieve all campaigns
    function getCampaigns() external view returns (Campaign[] memory) {
        return campaigns;
    }

    //retrieve all campaigns created by a particular user
    function getUserCampaigns(
        address user
    ) external view returns (CampaignDetail[] memory) {
        uint256[] memory userCampaignIds = userCampaigns[user];
        CampaignDetail[] memory userCampaignDetails = new CampaignDetail[](
            userCampaignIds.length
        );

        for (uint256 i = 0; i < userCampaignIds.length; i++) {
            uint256 campaignId = userCampaignIds[i];
            Campaign storage campaign = campaigns[campaignId];
            userCampaignDetails[i] = CampaignDetail({
                campaignId: campaignId,
                creator: campaign.creator,
                reward: campaign.reward,
                active: campaign.active
            });
        }

        return userCampaignDetails;
    }
}
