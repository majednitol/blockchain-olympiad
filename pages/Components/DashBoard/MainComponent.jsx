import React, { useContext } from 'react'


import DoctorPersonalData from './Doctor/SetDoctorPersonalData'
import Doctor from './Doctor/Doctor'
import MedicalResearchLab from './MedicalResearchLab/MedicalResearchLab'
import Pathologist from './Pathologist/Pathologist'
import PharmacyCompany from './PharmacyCompany/PharmacyCompany'
import Patient from './Patient/Patient'
import { HealthContext } from '@/context/Health'
import SignUp from './SignUp'

const MainComponent = () => {
    const { account, AddNewPatient, transferData, AddMedicalResearchLab, AddNewpathologist, AddNewPharmacyCompany, AddDoctor, PharmacyCompanyAllData, getPathologistAllData, getMedicalResearchLabAData, doctorAllData, patientAllData, fetchData, userName, doctorData, patientData, PharmacyCompany, MedicalResearchLab, contractData, Pathologist, ConnectedAccountUser } = useContext(HealthContext)


    const accountType = () => {
        if (ConnectedAccountUser == "1") {
            console.log(ConnectedAccountUser);
            return (<Doctor />)
        }
        else if (ConnectedAccountUser == "2") {
            console.log(ConnectedAccountUser);
            return (<Pathologist />)
        }
        else if (ConnectedAccountUser == "3") {
            console.log(ConnectedAccountUser);
            return (<MedicalResearchLab />)

        } else if (ConnectedAccountUser == "4") {
            console.log(ConnectedAccountUser);
            return (<PharmacyCompany />)

        } else if (ConnectedAccountUser == "5") {
            console.log("ConnectedAccountUserType", ConnectedAccountUser);
            return (<Patient />)

        }
        else {
            return (<SignUp />)
        }
    }
    return (
        <div>
            {accountType()}

        </div>
    )
}

export default MainComponent