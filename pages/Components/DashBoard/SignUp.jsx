import React from 'react'
import SetPatientPersonalDetails from './Patient/SetPersonalDetails'
import SetDoctorPersonalData from './Doctor/SetDoctorPersonalData'
import SetMediResearchLabPersonalData from './MedicalResearchLab/SetMediResearchLabPersonalData'
import SetPathologistPersonalData from './Pathologist/SetPathologistPersonalData'
import PharmacyCompanyPersonalData from './PharmacyCompany/SetPharmacyCompanyPersonalData'

const SignUp = () => {
    return (
        <div>
            <SetPatientPersonalDetails />
            <SetPathologistPersonalData />
            <PharmacyCompanyPersonalData />

            <SetDoctorPersonalData />
            <SetMediResearchLabPersonalData />


        </div>
    )
}

export default SignUp