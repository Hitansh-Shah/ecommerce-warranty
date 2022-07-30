async function main() {
    const Warranty = await ethers.getContractFactory("Warranty")
    const warranty = await Warranty.deploy( 100,20,100,100,)
    console.log("Warranty Contract deployed to address:", warranty.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  