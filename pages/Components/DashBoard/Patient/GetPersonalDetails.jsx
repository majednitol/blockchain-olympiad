import { HealthContext } from '@/context/Health'
import React, { useContext } from 'react'
import BoxButton from '../../BoxButton'

const GetPersonalDetails = () => {
    const { account, AddNewPatient, transferData, AddMedicalResearchLab, AddNewpathologist, AddNewPharmacyCompany, AddDoctor, PharmacyCompanyAllData, getPathologistAllData, getMedicalResearchLabAData, doctorAllData, patientAllData, fetchData, userName, doctorData, patientData, PharmacyCompany, MedicalResearchLab, contractData, Pathologist } = useContext(HealthContext)

    return (
        <div>
            <div>

                <button type="" class="m-xl-5 align-content-center justify-content-center  d-flex align-content-sm-center" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    <BoxButton name=" Patient Basic Data" handleFunction={patientAllData} />
                </button>



                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="exampleModalLabel">Patient Basic Information</h5>
                                <button type="button" class="btn-close mx-3" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            </div>
                            <div class="modal-body">
                                Account: {patientData[0]}
                                <hr />
                                PatientId: {patientData[1]}
                                <hr />
                                Patient Name: {patientData[2]}
                                <hr />
                                Patient Gender: {patientData[3]}
                                <hr />
                                Patient Age: {String(patientData[4])}
                                <hr />
                                Patient Location: {String(patientData[5])}
                                <div class="modal-footer">
                                    <button type="btn btn-dark" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                    {/* <button type="submit btn btn-primary" onClick={() => { handleSubmit }} class="btn btn-primary">Submit</button> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default GetPersonalDetails