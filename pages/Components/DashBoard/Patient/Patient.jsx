import React from 'react'
import SetPatientPersonalDetails from './SetPersonalDetails'
import GetPersonalDetails from './GetPersonalDetails'
import Prescription from './Prescription'
import DisplayFile from '../../File/DisplayFile'

const PatientComponent = () => {
    return (
        <div>
            <SetPatientPersonalDetails />
            <GetPersonalDetails />
            <Prescription />
            <DisplayFile />
        </div>
    )
}

export default PatientComponent