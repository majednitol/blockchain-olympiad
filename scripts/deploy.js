const { ethers } = require("hardhat")

async function main() {
    const [deployer] = await ethers.getSigners()

    const Helth = await ethers.getContractFactory("MedicalData")


    const helth = await Helth.deploy()

    console.log("health.address :", helth.address);

}

main().then(() => {
    process.exit(0)
}).catch((err) => {
    console.error(err)
    process.exit(1)
})
// 0x14920e143bcf186CdE947100976AeFc73c684B05

//  *******for FUNTOKENSALE contract *******



