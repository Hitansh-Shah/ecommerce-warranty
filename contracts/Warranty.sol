// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "./WarrantyNFT.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract Warranty is ReentrancyGuard {
    address public immutable admin; 
    uint public itemCount;
    WarrantyNFT nftContract;

    constructor(address _nftContract) public {
        admin = msg.sender;
        nftContract = WarrantyNFT(_nftContract);
    }

    struct Item {
        uint itemId;
        uint tokenId;
        uint serialId;
        address recipient;
        uint warrantyDays;
        string warrantyConditionsURL;
    }
    // itemId -> Item
    mapping(uint => Item) public items;
    // recipient -> Item
    mapping(address => Item[]) public recipientItems;

    modifier onlyAdmin {
      require(msg.sender == admin);
      _;
    }

    function getItems() public view returns (Item[] memory) {
        address userAddress = msg.sender;
        return recipientItems[userAddress];
    }

    function makeItem(uint serialId, address recipient, uint warrantyDays, string memory warrantyConditionsURL) external onlyAdmin nonReentrant {
        itemCount++;
        uint tokenId = nftContract.mintNFT(recipient, warrantyConditionsURL);
        Item memory newItem = Item (
            itemCount,
            tokenId,
            serialId,
            recipient,
            warrantyDays,
            warrantyConditionsURL
        );
        items[itemCount] = newItem;
        recipientItems[recipient].push(newItem);
    }
}
