// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract CampaignManager {
    address public owner;

    event Payment(address indexed recipient, uint256 amount);
    event BatchPayment(address indexed recipient, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Function for single payment
    function singlePay(address recipient, uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        payable(recipient).transfer(amount);
        emit Payment(recipient, amount);
    }

    // Function for batch payments
    function batchPay(
        address[] calldata recipients,
        uint256[] calldata amounts
    ) external onlyOwner {
        require(recipients.length == amounts.length, "Arrays length mismatch");

        for (uint256 i = 0; i < recipients.length; i++) {
            require(
                address(this).balance >= amounts[i],
                "Insufficient balance"
            );
            payable(recipients[i]).transfer(amounts[i]);
            emit BatchPayment(recipients[i], amounts[i]);
        }
    }

    // Function to receive ETH
    receive() external payable {}
}
