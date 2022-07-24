// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "./WarrantyNFT.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract Warranty is ReentrancyGuard, WarrantyNFT {
    address public immutable admin; 
    uint public itemCount;
    uint public immutable pointsThreshold;
    uint public immutable purchasePoints;
    uint public immutable redeemPoints;
    uint public immutable bonusWarrantyDays;

    constructor(uint _pointsThreshold, uint _purchasePoints, uint _redeemPoints, uint _bonusWarrantyDays) {
        admin = msg.sender;
        pointsThreshold = _pointsThreshold;
        purchasePoints = _purchasePoints;
        redeemPoints = _redeemPoints;
        bonusWarrantyDays = _bonusWarrantyDays;
    }

    struct Owner {
        address ownerAddress;
        uint puchaseTime;
        uint sellTime;
    }

    struct Claim {
        address ownerAddress;
        uint claimTime;
        string claimReason;
    }

    struct Item {
        uint itemId;
        uint tokenId;
        uint serialId;
        address currentOwner;
        uint issueTime;
        uint warrantyDays;
        string warrantyConditionsURL;
        uint transfersRemaining;
    }
    // itemId -> Item
    mapping(uint => Item) public items;
    // user -> points
    mapping(address => uint) public userPoints;

    function getItemsOfUser(address user) public view returns (Item[] memory) {
        Item[] memory userItems = new Item[](itemCount);
        uint256 counter = 0;
        for(uint i=1; i<=itemCount; i++) {
            Item storage item = items[i];
            if(item.currentOwner == user) {
                uint numbeOfDays = (block.timestamp - item.issueTime) / 60 / 60 / 24;
                if (numbeOfDays < item.warrantyDays) {
                    userItems[counter] = item;
                    counter++;
                }  
            }
        }
        Item[] memory result = new Item[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = userItems[i];
        }
        return result;
    }

    mapping(uint => Owner[]) public previousOwners;
    mapping(uint => Claim[]) public claims;

    modifier onlyAdmin {
      require(msg.sender == admin, "Prohibited! Only contract admin can call this transaction.");
      _;
    }

    modifier ownerOfItem(uint itemId) {
        require(msg.sender == items[itemId].currentOwner, "Prohibited! Only item owner can call this transaction.");
        _;
    }

    modifier isExpired(uint itemId) {
        Item storage item = items[itemId];
        uint numbeOfDays = (block.timestamp - item.issueTime) / 60 / 60 / 24;
        require(numbeOfDays < item.warrantyDays, "Item has expired!");
        _;
    }


    function makeItem(uint serialId, address recipient, uint warrantyDays, string memory warrantyConditionsURL, uint transfersRemaining, bool usePoints) external onlyAdmin nonReentrant {
        itemCount++;
        if (handlePoints(recipient, usePoints)) {
            warrantyDays += bonusWarrantyDays;
        }
        uint tokenId = mintNFT(recipient, warrantyConditionsURL);
        Item memory newItem = Item (
            itemCount,
            tokenId,
            serialId,
            recipient,
            block.timestamp,
            warrantyDays,
            warrantyConditionsURL,
            transfersRemaining
        );
        items[itemCount] = newItem;
    }

    function getPreviousOwners(uint itemId) public view returns (Owner[] memory) {
        return previousOwners[itemId];
    }

    function transferItem(address to, uint itemId) external ownerOfItem(itemId) isExpired(itemId) nonReentrant {
        require(items[itemId].transfersRemaining > 0, "Transfer failed! You have used all your transfers.");
        Item storage item = items[itemId];
        uint issueTime;
        if (previousOwners[itemId].length == 0) {
            issueTime = item.issueTime;
        } else {
            issueTime = previousOwners[itemId][previousOwners[itemId].length - 1].sellTime;
        }
        
        safeTransferFrom(msg.sender, to, item.tokenId);
        previousOwners[itemId].push(Owner (
            msg.sender,
            issueTime,
            block.timestamp
        ));
        item.currentOwner = to;
        item.transfersRemaining--;
    }

    function claimItem(string memory claimReason, uint itemId) external ownerOfItem(itemId) isExpired(itemId) nonReentrant {
        claims[itemId].push(Claim (
            msg.sender,
            block.timestamp,
            claimReason
        ));
    }

    function getClaims(uint itemId) public view returns (Claim[] memory) {
        return claims[itemId];
    }

    function handlePoints(address user, bool usePoints) public returns (bool) {
        uint points = userPoints[user];
        uint newPoints = points;
        if (usePoints && points >= pointsThreshold) {
            newPoints = points-redeemPoints;
            userPoints[user] = newPoints;
            return true;
        } else {
            newPoints += purchasePoints;
            userPoints[user] = newPoints;
            return false;
        }
    }
}
