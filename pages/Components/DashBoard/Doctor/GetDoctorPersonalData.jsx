


import { HealthContext } from '@/context/Health'
import React, { useContext } from 'react'
import BoxButton from '../../BoxButton'

const GetDoctorPersonalData = () => {
    const { account, AddNewPatient, transferData, AddMedicalResearchLab, AddNewpathologist, AddNewPharmacyCompany, AddDoctor, PharmacyCompanyAllData, getPathologistAllData, getMedicalResearchLabAData, doctorAllData, patientAllData, fetchData, userName, doctorData, patientData, PharmacyCompany, MedicalResearchLab, contractData, Pathologist } = useContext(HealthContext)

    return (
        <div>
            <div>

                <button type="" class="m-xl-5 align-content-center justify-content-center  d-flex align-content-sm-center" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    <BoxButton name=" Doctor Personal Information" handleFunction={doctorAllData} />
                </button>



                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="exampleModalLabel">Doctor Personal Information</h5>
                                <button type="button" class="btn-close mx-3" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            </div>
                            <div class="modal-body">
                                {console.log(doctorData)}
                                Account: {doctorData[0]}
                                <hr />
                                DoctorId: {doctorData[1]}
                                <hr />
                                Doctor Name: {doctorData[2]}
                                <hr />
                                BMDC Number: {String(doctorData[5])}
                                <hr />
                                Doctor Speciality: {doctorData[3]}
                                <hr />
                                Consultation Fee : {String(doctorData[4])}
                                <hr />

                                Year Of Experience: {String(doctorData[6])}
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

export default GetDoctorPersonalData