import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";
import DisplayFile from "../../File/DisplayFile";

const SharedDataFromPathologist = () => {
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
    sharedData,
    PatientToDoctorSharedData,
    PatientToMedRcLabSharedData,
    PatientToPharmacySharedData,
    getPatientAllPrescription,
  } = useContext(HealthContext);
  return (
    <div>
      <DisplayFile userData={doctorData} />
    </div>
  );
};

export default SharedDataFromPathologist;
