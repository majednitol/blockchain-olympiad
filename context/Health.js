import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import { healthABI, healthAddess, patientABI, patientAddress } from './constants'
import { useRouter } from 'next/router';
import { connectWallet, connectWalletBycontractData } from '@/Utils/apiFreature';

export const HealthContext = React.createContext()
const HealthProvider = ({ children }) => {


    const [account, setAccount] = useState('')
    const [userName, setUserName] = useState('')
    const [patientData, setPatientData] = useState('')
    const [doctorData, setDoctorData] = useState('')
    const [pharmaciest, setPharmaciest] = useState('')
    const [FoodIndusty, setFoodIndusty] = useState('')
    const [DataAnalyst, setDataAnalyst] = useState('')
    const [Hospital, setHospital] = useState('')
    const [PharmacyCompany, setPharmacyCompany] = useState('')
    const [Pharmacy, setPharmacy] = useState('')
    const [PatientCredential, setPatientCredential] = useState('')
    const [PatientParient, setPatientParient] = useState('')
    const [contractData, setContractData] = useState('')


    const router = useRouter()
    const provider = new ethers.providers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/nGjYP7xrrjnCnxraBgpbLxaXxgYylt0z`);
    useEffect(() => {

        // connectWallet();
        fetchData()
        //AddDoctor('0x0Da3aAc104688F96F6E6aBfF5E4c5fE4f20616D7', "majed", 54)
        // doctorAllData()
        patientAllData()
        // getMedicalResearchLabAData()
        // getPathologistAllData()
        // PharmacyCompanyAllData()

        // AddNewPatient("2", "majed", "male", 30, "dhaka")
    }, [])

    const fetchData = async () => {
        try {
            const connectedAccount = await connectWallet()
            setAccount(connectedAccount)
            console.log("current account ", connectedAccount);


            const contractData = await connectWalletBycontractData(provider)
            console.log("oooo", contractData[0]);
            setContractData(contractData)
            setAccount(connectedAccount)


        } catch (error) {
            console.log(error);
        }
    }



    const patientAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const patientData = await contractData[1].getPatient(connectedAccount)
        setPatientData(patientData)
        console.log("patientData ", patientData);
    }
    const doctorAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const doctorData = await contractData[0].getDoctor(connectedAccount)
        setDoctorData(doctorData)
        console.log("doctorData", doctorData);
    }


    const getMedicalResearchLabAData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const MedicalResearchLabAData = await contractData[0].getMedicalResearchLab(connectedAccount)
        setDataAnalyst(MedicalResearchLabAData)
        console.log(MedicalResearchLabAData);
    }




    const getPathologistAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const pathologistAllData = await contractData[1].getPathologist(
            connectedAccount)
        setPatientParient(pathologistAllData)
        console.log(pathologistAllData);
    }

    const PharmacyCompanyAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const PharmacyCompanyData = await contractData[1].getPharmacyCompany(
            connectedAccount)
        setPharmacyCompany(PharmacyCompanyData)
        console.log(PharmacyCompanyData);
    }






    const AddDoctor = async (doctorID,
        name,
        specialty,
        consultationFee,
        BMDCNumber,
        yearOfExperience,
        joiningDate,
        totalRating,
        aboutDoctors,
        chamberLocation) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addNewDoctorData = await contract.setDoctor(doctorID, name, specialty, BigInt(consultationFee * 1), BigInt(BMDCNumber * 1), yearOfExperience, BigInt(joiningDate * 1), BigInt(joiningDate * 1), totalRating, aboutDoctors, chamberLocation)


                await addNewDoctorData.wait()

                window.location.reload()
            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }

    const AddNewPatient = async (patientID,
        name,
        gender,
        age,

        location,


    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(patientAddress, patientABI, signer)

                const addNewPatientData = await contract.setPatient(patientID, name, gender, BigInt(age * 1), location)


                await addNewPatientData.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }







    const AddNewPharmacyCompany = async (companyID,
        name,
        licenseID,
        productInformation,
        pharmacyRating
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addNewPharmacyData = await contract.addPharmacy(companyID, name, BigInt(licenseID * 1), productInformation, pharmacyRating)


                await addNewPharmacyData.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }


    const AddNewpathologist = async (
        pathologistID,
        name,
        licenseNumber,
        specializationArea,
        serviceArea,
        totalExperience,
        totalRating,
        review
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const pathologist = await contract.setPathologist(pathologistID,
                    name,
                    BigInt(licenseNumber * 1), specializationArea, serviceArea, BigInt(totalExperience * 1), BigInt(totalRating * 1), review)


                await pathologist.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }


    const AddMedicalResearchLab = async (labID,
        name,
        licenseID,
        researchArea,
        labRating
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const MedicalResearchLabData = await contract.setMedicalResearchLab(labID,
                    name, BigInt(licenseID * 1), researchArea, labRating)


                await MedicalResearchLabData.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }




    const accressDataAnyOne = async (
        userAddress

    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(patientAddress, patientABI, signer)

                const AccressDataAnyOne = await contract.accressDataAnyone(userAddress
                )


                await AccressDataAnyOne.wait()

                window.location.reload()

            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }

    const revokeData = async (
        userAddress

    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(patientAddress, patientABI, signer)

                const revokeAccressAnyOne = await contract.revokeDataAnyone(userAddress
                )


                await revokeAccressAnyOne.wait()

                window.location.reload()

            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }

    const AddData = async (
        entityType, data

    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(patientAddress, patientABI, signer)

                const adddata = await contract.addData(entityType, data
                )


                await adddata.wait()

                window.location.reload()

            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }

    const transferData = async (
        entityType1,
        entityType2,
        user1,
        user2

    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(patientAddress, patientABI, signer)

                const transferDataUser = await contract.transferData(entityType1,
                    entityType2,
                    user1,
                    user2
                )


                await transferDataUser.wait()

                window.location.reload()

            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }
    return (
        <HealthContext.Provider value={{ account, }}>
            {children}
        </HealthContext.Provider>
    )
}

export default HealthProvider


















