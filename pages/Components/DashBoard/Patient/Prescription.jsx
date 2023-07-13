import React, { useContext } from "react";
import FileUpload from "../../File/FileUpload";
import DisplayFile from "../../File/DisplayFile";

import BoxButton from "../../BoxButton";
import { HealthContext } from "@/context/Health";

const Prescription = () => {
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
      <BoxButton name="Upload File" />

      <div>
        {console.log("jjjj", account)}
        <FileUpload userAddress={account} />
        <DisplayFile userData={patientData} />
      </div>
    </div>
  );
};

export default Prescription;
