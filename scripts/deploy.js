async function main() {
    const WarrantyNFT = await ethers.getContractFactory("WarrantyNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const warrantyNFT = await WarrantyNFT.deploy()
    await warrantyNFT.deployed()
    console.log("Contract deployed to address:", warrantyNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  