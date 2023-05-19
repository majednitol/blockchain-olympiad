const { ethers } = require("hardhat")

async function main() {
    const [deployer] = await ethers.getSigners()
    const PatientData = await ethers.getContractFactory("PatientData")
    const Helth = await ethers.getContractFactory("Helth")

    const patient = await PatientData.deploy()
    const helth = await Helth.deploy(patient.address)
    console.log("patient.address :", patient.address);
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



