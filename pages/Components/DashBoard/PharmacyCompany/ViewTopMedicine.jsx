import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";

const ViewTopMedicine = () => {
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
    <div>
      {TopMedichine.map((el, i) => (
        <div key={i}>{el}</div>
      ))}
    </div>
  );
};

export default ViewTopMedicine;
