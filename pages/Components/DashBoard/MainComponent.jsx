import React from 'react'


import DoctorPersonalData from './Doctor/SetDoctorPersonalData'
import Doctor from './Doctor/Doctor'
import MedicalResearchLab from './MedicalResearchLab/MedicalResearchLab'
import Pathologist from './Pathologist/Pathologist'
import PharmacyCompany from './PharmacyCompany/PharmacyCompany'
import Patient from './Patient/Patient'

const MainComponent = () => {
    return (
        <div>
            <Patient />
            {/* <Doctor /> */}
            {/* <MedicalResearchLab /> */}
            {/* <PharmacyCompany /> */}
            {/* <Pathologist /> */}
        </div>
    )
}

export default MainComponent