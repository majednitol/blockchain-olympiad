import React from 'react'
import Patient from './Patient/Patient'

import DoctorPersonalData from './Doctor/DoctorPersonalData'
import Doctor from './Doctor/Doctor'
import MedicalResearchLab from './MedicalResearchLab/MedicalResearchLab'
import Pathologist from './Pathologist/Pathologist'
import PharmacyCompany from './PharmacyCompany/PharmacyCompany'

const MainComponent = () => {
    return (
        <div>
            {/* <Patient /> */}
            {/* <Doctor /> */}
            {/* <MedicalResearchLab /> */}
            <PharmacyCompany />
            {/* <Pathologist /> */}
        </div>
    )
}

export default MainComponent