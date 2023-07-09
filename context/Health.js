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
    const [MedicalResearchLab, setMedicalResearchLab] = useState('')
    const [contractData, setContractData] = useState('')
    const [PathologistData, setPathologistData] = useState('')

    const [PharmacyCompany, setPharmacyCompany] = useState('')
    const [signer, setSigner] = useState('')
    const [TopMedichine, setTopMedichine] = useState('')
    const [MedicalResearchLabReport, setMedicalResearchLabReport] = useState('')
    const [ConnectedAccountUser, setConnectedAccountUser] = useState(0)




    const router = useRouter()
    const provider = new ethers.providers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/nGjYP7xrrjnCnxraBgpbLxaXxgYylt0z`);
    useEffect(() => {

        // connectWallet();
        fetchData()
        getSigner()
        ConnectedEntity()
        //AddDoctor('0x0Da3aAc104688F96F6E6aBfF5E4c5fE4f20616D7', "majed", 54)
        // AddDoctor(1, 'rafi', 'xyz', 500, 33, 2)
        // AddNewpathologist(2, 'majed', 33, 'xyz', 3)

        // doctorAllData()
        // patientAllData()
        // getMedicalResearchLabAData()
        // getPathologistAllData()
        // PharmacyCompanyAllData()
        // AddNewPharmacyCompany(2, 'mjed', 44, 'xyz', 4)
        // AddMedicalResearchLab(2, 'ma', 44, 'xyz', 3)

        // AddNewPatient("2", "majed", "male", 30, "dhaka")
    }, [])

    const fetchData = async () => {
        try {
            const connectedAccount = await connectWallet()
            setAccount(connectedAccount)
            console.log("current account ", connectedAccount);


            const contractData = await connectWalletBycontractData(provider)
            console.log("oooo", contractData[1]);
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
        setMedicalResearchLab(MedicalResearchLabAData)
        console.log(MedicalResearchLabAData);
    }

    const ViewTopMedichine = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const ViewTopMedichine = await contractData[0].TopMedichine()
        setTopMedichine(ViewTopMedichine)
        console.log(ViewTopMedichine);
    }

    const MedicalResearchLabReports = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const ViewMedicalResearchLabReports = await contractData[0].MedicalResearchLabReports()
        setMedicalResearchLabReport(ViewMedicalResearchLabReports)
        console.log(ViewMedicalResearchLabReports);
    }




    const getPathologistAllData = async () => {
        const contractData = await connectWalletBycontractData(provider)
        const connectedAccount = await connectWallet()
        const pathologistAllData = await contractData[1].getPathologist(
            connectedAccount)
        setPathologistData(pathologistAllData)
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
    const ConnectedEntity = async () => {
        try {
            const contractData = await connectWalletBycontractData(provider)
            const connectedAccount = await connectWallet()
            const ConnectedAccountUserType = await contractData[1].ConnectedAccountType(
                connectedAccount)
            setConnectedAccountUser(String(ConnectedAccountUserType))
            console.log("ConnectedAccountUserType", String(ConnectedAccountUserType));
        } catch (error) {
            console.log("no account have in address");
        }
    }



    const AddDoctor = async (doctorID,
        name,
        specialty,
        consultationFee,
        BMDCNumber,
        yearOfExperience
    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addNewDoctorData = await contract.setDoctor(BigInt(doctorID * 1), name, specialty, BigInt(consultationFee * 1), BigInt(BMDCNumber * 1), BigInt(yearOfExperience * 1))


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

        location


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


    const getSigner = async () => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                const contract = new ethers.Contract(healthAddess, healthABI, signer)
                console.log('signer', signer);
                setSigner(contract)




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

                const addNewPharmacyData = await contract.setPharmacyCompany(BigInt(companyID * 1), name, BigInt(licenseID * 1), productInformation, BigInt(pharmacyRating * 1))


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

        totalExperience,

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
                    BigInt(licenseNumber * 1), specializationArea, BigInt(totalExperience * 1))


                await pathologist.wait()

                window.location.reload()




            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }

    const addTopMedichine = async (
        medichine

    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addingTopMedicine = await contract.addTopMedichine(medichine)


                await addingTopMedicine.wait()

                window.location.reload()

            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }



    MedicalResearchLabReports

    const addLabReport = async (
        report

    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addingLabReport = await contract.addLabReport(report)


                await addingLabReport.wait()

                window.location.reload()

            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }

    const setPatientPersonalData = async (

        height, blood,
        previousDiseases,
        medicineDrugs,
        badHabits,
        chronicDiseases,
        healthAllergies,
        birthDefects

    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(healthAddess, healthABI, signer)

                const addPatientPersonalData = await contract.setPatientPersonalData(height, blood,
                    previousDiseases,
                    medicineDrugs,
                    badHabits,
                    chronicDiseases,
                    healthAllergies,
                    birthDefects)


                await addPatientPersonalData.wait()

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




    // const accressDataAnyOne = async (
    //     userAddress

    // ) => {   // works
    //     // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

    //     try {
    //         if (window.ethereum) {
    //             const provider = new ethers.providers.Web3Provider(window.ethereum);


    //             const signer = provider.getSigner()
    //             console.log('signer', signer);
    //             const contract = new ethers.Contract(patientAddress, patientABI, signer)

    //             const AccressDataAnyOne = await contract.accressDataAnyone(userAddress
    //             )


    //             await AccressDataAnyOne.wait()

    //             window.location.reload()

    //         } else {
    //             console.error("Metamask is not installed");
    //         }
    //     } catch (error) {
    //         console.log("error account crate time", error);
    //     }

    // }

    // const revokeData = async (
    //     userAddress

    // ) => {   // works
    //     // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

    //     try {
    //         if (window.ethereum) {
    //             const provider = new ethers.providers.Web3Provider(window.ethereum);


    //             const signer = provider.getSigner()
    //             console.log('signer', signer);
    //             const contract = new ethers.Contract(patientAddress, patientABI, signer)

    //             const revokeAccressAnyOne = await contract.revokeDataAnyone(userAddress
    //             )


    //             await revokeAccressAnyOne.wait()

    //             window.location.reload()

    //         } else {
    //             console.error("Metamask is not installed");
    //         }
    //     } catch (error) {
    //         console.log("error account crate time", error);
    //     }

    // }

    // const AddData = async (
    //     entityType, data

    // ) => {   // works
    //     // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

    //     try {
    //         if (window.ethereum) {
    //             const provider = new ethers.providers.Web3Provider(window.ethereum);


    //             const signer = provider.getSigner()
    //             console.log('signer', signer);
    //             const contract = new ethers.Contract(patientAddress, patientABI, signer)

    //             const adddata = await contract.addData(entityType, data
    //             )


    //             await adddata.wait()

    //             window.location.reload()

    //         } else {
    //             console.error("Metamask is not installed");
    //         }
    //     } catch (error) {
    //         console.log("error account crate time", error);
    //     }

    // }

    const transferDataByPatient = async (


        receiptAddress

    ) => {   // works
        // if(name|| accountAddress) return setError("Name and AccountAddress cannot be empty")

        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);


                const signer = provider.getSigner()
                console.log('signer', signer);
                const contract = new ethers.Contract(patientAddress, patientABI, signer)

                const transferDatabyPatient = await contract.transferDataByPatient(receiptAddress
                )


                await transferDatabyPatient.wait()

                window.location.reload()

            } else {
                console.error("Metamask is not installed");
            }
        } catch (error) {
            console.log("error account crate time", error);
        }

    }
    return (
        <HealthContext.Provider value={{ account, AddNewPatient, transferDataByPatient, AddMedicalResearchLab, AddNewpathologist, AddNewPharmacyCompany, AddDoctor, PharmacyCompanyAllData, getPathologistAllData, getMedicalResearchLabAData, doctorAllData, patientAllData, fetchData, userName, doctorData, patientData, PharmacyCompany, MedicalResearchLab, contractData, PathologistData, signer, ConnectedAccountUser }}>
            {children}
        </HealthContext.Provider>
    )
}

export default HealthProvider


















