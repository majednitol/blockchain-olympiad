import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";

const PatientPersonalDoctors = () => {
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
    patientPersonalDoctorList,
  } = useContext(HealthContext);
  return (
    <div>
      {patientPersonalDoctorList.map((el, i) => (
        <div key={i}>{el}</div>
      ))}
    </div>
  );
};

export default PatientPersonalDoctors;
