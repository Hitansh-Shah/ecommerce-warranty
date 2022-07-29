async function main() {
    const WarrantyNFT = await ethers.getContractFactory("WarrantyNFT")
    const warrantyNFT = await WarrantyNFT.deploy()
    // await warrantyNFT.deployed()
    console.log("Warranty NFT contract deployed to address:", warrantyNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  