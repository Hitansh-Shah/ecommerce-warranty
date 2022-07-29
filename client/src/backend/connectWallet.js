import { ethers } from "ethers";
export const connectWallet = async (setWalletAddress) => {

  if(typeof window.ethereum !== "undefined"){
    try {
      const addressArray = await window.ethereum.request({ method: "eth_requestAccounts" })
      setWalletAddress(addressArray[0])
      return addressArray[0]
    }
    catch (error) {
      console.log(error);
      return ""
    }
  } else {
    alert("You must install Metamask to use this application!")
    return ""
  }


}

export const getCurrentWalletConnected = async (setWalletAddress) => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        setWalletAddress(addressArray[0])
        return addressArray[0]
      } else {
        return ""
      }
    } catch (err) {
      console.log(err)
      return ""
    }
  } else {
    alert("Please install Metamask to use this application!")
    return ""
  }
}

export const addWalletListener = async (setWalletAddress) => {
  if(window.ethereum) {
    try {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
          return accounts[0]
        } else {
          setWalletAddress("");
          return ""
        }
      });
    } catch(err) {
      alert("Please install Metamask to use this application!")
      return ""
    }
  }
}
  