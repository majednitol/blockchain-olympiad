import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";

const AddLabReport = () => {
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
  const submitReport = () => {
    const report = document.querySelector(".address").value;
    try {
      if (report) {
        AddLabReport(report);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter Lab Report" className="address" />
      <button className="center button" onClick={submitReport}>
        submit Report
      </button>
    </div>
  );
};

export default AddLabReport;
