// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./WarrantyNFT.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract Warranty is ReentrancyGuard {
    address public immutable admin; 
    uint public itemCount;
    WarrantyNFT nftContract;

    constructor(address _nftContract) public {
        admin = msg.sender;
        nftContract = NFTWarranty(_nftContract);
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

    function makeItem(uint serialId, address recipient, uint warrantyDays, string memory warrantyConditionsURL) external nonReentrant {
        itemCount++;
        uint tokenId = nftContract.mintNFT(recipient, "https://www.google.com");
        items[itemCount] = Item (
            itemCount,
            tokenId,
            serialId,
            recipient,
            warrantyDays,
            warrantyConditionsURL
        );
    }
}
