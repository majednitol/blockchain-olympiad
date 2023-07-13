import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";

const ViewPathologistTest = () => {
  const {
    loading,
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

    ConnectedEntityType,
    addTopMedichine,
    addLabReport,
    setPatientPersonalData,
    transferDataByDoctor,
    transferDataByPathologist,
    setPathologistTest,

    PatientPersonalHealthData,
    patientPersonalDoctorList,
    PathologistTestData,
  } = useContext(HealthContext);
  return (
    <div className="container pt-5">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title " id="exampleModalLabel">
            Pathologist Test Information
          </h5>
        </div>

        <div className="modal-body">
          Allergies: {PathologistTestData[0]}
          <hr />
          Cancer: {PathologistTestData[1]}
          <hr />
          Hormone Problem : {PathologistTestData[2]}
          <hr />
          Diabetes Level: {String(PathologistTestData[3])}
        </div>
      </div>
    </div>
  );
};

export default ViewPathologistTest;
