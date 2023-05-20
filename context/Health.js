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
        // AddDoctor('0x0Da3aAc104688F96F6E6aBfF5E4c5fE4f20616D7', "majed", 54, 33, 9999)
        doctorAllData()


    }, [])

    const fetchData = async () => {
        try {
            const connectedAccount = await connectWallet()
            setAccount(connectedAccount)
            console.log("kkkk", connectedAccount);


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
        const patientData = await contractData[1].viewPatient(connectedAccount)
        setPatientData(patientData)
        console.log("patientData ", patientData);
    }
    const doctorAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const doctorData = await contractData[0].viewDoctor(connectedAccount)
        setDoctorData(doctorData)
        console.log("doctorData", doctorData);
    }
    const pharmaciestAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const pharmaciestData = await contractData[0].viewPharmaciest(connectedAccount)
        setPharmaciest(pharmaciestData)
        console.log("pharmaciestData", pharmaciestData);
    }
    const FoodIndustyAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const FoodIndustyData = await contractData[0].viewFoodIndusty(connectedAccount)
        setFoodIndusty(FoodIndustyData)
        console.log(FoodIndustyData);
    }
    const DataAnalystAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const DataAnalystData = await contractData[0].viewDataAnalyst(connectedAccount)
        setDataAnalyst(DataAnalystData)
        console.log(DataAnalystData);
    }
    const HospitalAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const HospitalData = await contractData[0].viewHospital(connectedAccount)
        setHospital(HospitalData)
        console.log(HospitalData);
    }
    const PharmacyAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const viewPharmacyData = await contractData[0].viewPharmacy(
            connectedAccount)
        setPharmacy(viewPharmacyData)
        console.log(viewPharmacyData);
    }

    const PatientCredentialAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const PatientCredentialData = await contractData[1].viewCredential(
            connectedAccount)
        setPatientCredential(PatientCredentialData)
        console.log(PatientCredentialData);
    }

    const PatientParientAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const PatientParientData = await contractData[1].viewPatientParient(
            connectedAccount)
        setPatientParient(PatientParientData)
        console.log(PatientParientData);
    }

    const PharmacyCompanyDataAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const PharmacyCompanyData = await contractData.viewPharmacyCompany(
            connectedAccount)
        setPharmacyCompany(PharmacyCompanyData)
        console.log(PharmacyCompanyData);
    }






    const AddDoctor = async (doctorAddress, Doctorname, age, doctorId, nid) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addNewDoctorData = await contract.addDoctor(doctorAddress, Doctorname, BigInt(age * 1), BigInt(doctorId * 1), BigInt(nid * 1))


                await addNewDoctorData.wait()

                window.location.reload()
            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }

    const AddNewPatient = async (patientAddress, name, age, patientId, gender, birthDay, bloodGroup,
        nid
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(patientAddress, patientABI, signer)

                const addNewPatientData = await contract.addPatient(patientAddress, name, BigInt(age * 1), BigInt(patientId * 1), gender, BigInt(birthDay * 1), bloodGroup, BigInt(nid * 1))


                await addNewPatientData.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }



    const AddNewPharmacyCompany = async (pharmacyCompanyAddress, name, pharmacyCompanyId
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addNewPharmacyCompanyData = await contract.addPharmacyCompany(pharmacyCompanyAddress, name, BigInt(pharmacyCompanyId * 1))


                await addNewPharmacyCompanyData.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }




    const AddNewPharmacy = async (pharmacyAddress, name, pharmacyId
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addNewPharmacyData = await contract.addPharmacy(pharmacyAddress, name, BigInt(pharmacyId * 1))


                await addNewPharmacyData.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }


    const AddNewPharmaciest = async (
        pharmaciestAddress, name, pharmaciestId
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addNewPharmaciestData = await contract.addPharmaciest(pharmaciestAddress,
                    name,
                    BigInt(pharmaciestId * 1))


                await addNewPharmaciestData.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }


    const AddNewFoodIndusty = async (foodIndustyAddress, name, foodIndustyId
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addNewFoodIndustyData = await contract.addFoodIndusty(foodIndustyAddress,
                    name, BigInt(foodIndustyId * 1))


                await addNewFoodIndustyData.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }

    const AddNewHospital = async (
        hospitalAddress, name, hospitalId
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addNewHospitalData = await contract.addHospital(hospitalAddress,
                    name,
                    BigInt(hospitalId * 1))


                await addNewHospitalData.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }


    const AddNewDataAnalyst = async (

        dataAnalystAddress,
        name,
        dataAnalystId
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addNewDataAnalystData = await contract.addDataAnalyst(dataAnalystAddress,
                    name,
                    BigInt(dataAnalystId * 1))


                await addNewDataAnalystData.wait()

                window.location.reload()

            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }


    const AddNewCredential = async (
        issuerAddress,
        credentielType,
        credentialIssuer,
        credentialValue,
        dateIssued
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(patientAddress, patientABI, signer)

                const addNewCredentialData = await contract.addCredential(issuerAddress,
                    credentielType,
                    credentialIssuer,
                    credentialValue,
                    dateIssued)


                await addNewCredentialData.wait()

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

                const AccressDataAnyOne = await contract.accressDataAnyone(userAddress,
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
    return (
        <HealthContext.Provider value={{ account, }}>
            {children}
        </HealthContext.Provider>
    )
}

export default HealthProvider


















