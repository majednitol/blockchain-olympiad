import React, { useContext } from "react";
import FileUpload from "../../File/FileUpload";
import { HealthContext } from "@/context/Health";

const AddResearchLabReport = () => {
  const {
    account,
    AddNewPatient,
    transferData,
    AddMedicalResearchLab,
    AddNewpathologist,
    AddNewPharmacyCompany,
    AddDoctor,
    PharmacyCompanyAllData,
    getPathologistAllData,
    getPatientAllData,
    getMedicalResearchLabAData,
    doctorAllData,
    patientAllData,
    fetchData,
    userName,
    doctorData,
    patientData,
    PharmacyCompany,
    MedicalResearchLab,
    contractData,
    Pathologist,
    PatientPersonalHealthData,
  } = useContext(HealthContext);
  return (
    <div>
      <FileUpload userAddress={account} />
    </div>
  );
};

export default AddResearchLabReport;
