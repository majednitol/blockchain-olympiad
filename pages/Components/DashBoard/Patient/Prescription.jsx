import React, { useContext } from "react";
import FileUpload from "../../File/FileUpload";
import DisplayFile from "../../File/DisplayFile";

import BoxButton from "../../BoxButton";
import { HealthContext } from "@/context/Health";

const Prescription = () => {
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
      <BoxButton name="Upload File" />

      <div>
        <FileUpload />
        <DisplayFile />
      </div>
    </div>
  );
};

export default Prescription;
