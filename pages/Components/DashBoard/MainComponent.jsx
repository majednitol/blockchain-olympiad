import React, { useContext } from 'react'


import { HealthContext } from '@/context/Health'
import SignUp from './SignUp'
import DoctorComponent from './Doctor/Doctor'
import PathologistComponent from './Pathologist/Pathologist'
import MedicalResearchLabComponent from './MedicalResearchLab/MedicalResearchLab'
import PharmacyCompanyComponent from './PharmacyCompany/PharmacyCompany'
import PatientComponent from './Patient/Patient'

const MainComponent = () => {
    const { account, AddNewPatient, transferDataByPatient, AddMedicalResearchLab, AddNewpathologist, AddNewPharmacyCompany, AddDoctor, PharmacyCompanyAllData, getPathologistAllData, getMedicalResearchLabAData, doctorAllData, patientAllData, fetchData, userName, doctorData, patientData, PharmacyCompany, MedicalResearchLab, contractData, Pathologist, ConnectedAccountUser } = useContext(HealthContext)


    const accountType = () => {
        if (ConnectedAccountUser == "1") {
            console.log(ConnectedAccountUser);
            return (<DoctorComponent />)
        }
        else if (ConnectedAccountUser == "2") {
            console.log(ConnectedAccountUser);
            return (<PathologistComponent />)
        }
        else if (ConnectedAccountUser == "3") {
            console.log(ConnectedAccountUser);
            return (<MedicalResearchLabComponent />)

        } else if (ConnectedAccountUser == "4") {
            console.log(ConnectedAccountUser);
            return (<PharmacyCompanyComponent />)

        } else if (ConnectedAccountUser == "5") {
            console.log("ConnectedAccountUserType", ConnectedAccountUser);
            return (<PatientComponent />)

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