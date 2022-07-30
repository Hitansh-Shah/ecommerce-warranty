import { ethers } from "ethers";
import Warranty from '../../../artifacts/contracts/Warranty.sol/Warranty.json'

const WarrantyAddress = "0x00F2234ef5Fa36EFC896f16681a9F33D3061622b"

export const getItemsofUser = async (userAddress) => {
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(WarrantyAddress, Warranty.abi, provider)
        try {
            const data = await contract.getItemsOfUser(userAddress)
            // console.log('data: ', data)
            return data
        } catch (err) {
            console.log('Error: ', err)
            return null
        }
    } else {
        alert("Please install Metamask to use this application")
    }
}


export const itemCount = async () => {
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(WarrantyAddress, Warranty.abi, provider)
        try {
            const data = await contract.itemCount()
            console.log('data: ', data)
            // console.log(data[0]['currentOwner'])
        } catch (err) {
            console.log('Error: ', err)
        }
    } else {
        alert("Please install Metamask to use this application")
    }
}

export const makeItem = async (serialId, recipient, warrantyDays, warrantyConditionsURL, transfersRemaining, usePoints) => {
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(WarrantyAddress, Warranty.abi, signer)
        try {
            const transaction = await contract.makeItem(
                serialId,
                recipient,
                warrantyDays,
                warrantyConditionsURL,
                transfersRemaining,
                usePoints
            )
            await transaction.wait()
        } catch(err) {
            console.log('Error: ', err)
        }
    } else {
        alert("Please install Metamask to use this application")
    }
}

export const getPreviousOwners = async (itemId) => {
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(WarrantyAddress, Warranty.abi, provider)
        try {
            const data = await contract.getPreviousOwners(itemId)
            // console.log('data: ', data)
            return data
        } catch (err) {
            console.log('Error: ', err)
            return null
        }
    } else {
        alert("Please install Metamask to use this application")
    }
}

export const tranferItem = async (to, itemId) => {
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(WarrantyAddress, Warranty.abi, signer)
        try {
            const transaction = await contract.transferItem(to, itemId)
            await transaction.wait()
        } catch(err) {
            console.log('Error: ', err)
        }
    } else {
        alert("Please install Metamask to use this application")
    }
}

export const getLatestIssueTime = async (itemId) => {
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(WarrantyAddress, Warranty.abi, provider)
        try {
            const data = await contract.getLatestIssueTime(itemId)
            // console.log('data: ', data)
            return data
        } catch (err) {
            console.log('Error: ', err)
            return null
        }
    } else {
        alert("Please install Metamask to use this application")
    }
}

export const claimItem = async (claimReason, itemId) => {
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(WarrantyAddress, Warranty.abi, signer)
        try {
            const transaction = await contract.claimItem(claimReason, itemId)
            await transaction.wait()
        } catch(err) {
            console.log('Error: ', err)
        }
    } else {
        alert("Please install Metamask to use this application")
    }
}

export const getClaims = async (itemId) => {
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(WarrantyAddress, Warranty.abi, provider)
        try {
            const data = await contract.getClaims(itemId)
            // console.log('data: ', data)
            return data
        } catch (err) {
            console.log('Error: ', err)
            return null
        }
    } else {
        alert("Please install Metamask to use this application")
    }
}

export const getUserPoints = async (userAddress) => {
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(WarrantyAddress, Warranty.abi, provider)
        try {
            const data = await contract.userPoints(userAddress)
            // console.log('data: ', data)
            return data
        } catch (err) {
            console.log('Error: ', err)
            return null
        }
    } else {
        alert("Please install Metamask to use this application")
    }
}