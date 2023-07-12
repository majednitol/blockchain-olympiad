import { HealthContext } from "@/context/Health";
import React, { useContext } from "react";
import BoxButton from "../../BoxButton";

const GetDoctorPersonalData = () => {
  const {
    account,
    AddNewPatient,
    transferDataByPatient,
    AddMedicalResearchLab,
    AddNewpathologist,
    AddNewPharmacyCompany,
    AddDoctor,
    getPharmacyCompanyAllData,
    getPathologistAllData,
    getMedicalResearchLabAData,
    getDoctorAllData,
    getPatientAllData,
    fetchData,
    TopMedichine,
    doctorData,
    patientData,
    PharmacyCompany,
    MedicalResearchLab,
    contractData,
    PathologistData,
    signer,
    ConnectedAccountUser,
    MedicalResearchLabReport,
    MedicalResearchLabReports,
    ConnectedEntityType,
    addTopMedichine,
    addLabReport,
    setPatientPersonalData,
    transferDataByDoctor,
    transferDataByPathologist,
    setPathologistTest,
    ViewTopMedichine,
  } = useContext(HealthContext);

  return (
    <div>
      <div>
        <button>
          <BoxButton
            name=" Doctor Personal Information"
            handleFunction={getDoctorAllData}
          />
        </button>

        <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDoctorPersonalData;
