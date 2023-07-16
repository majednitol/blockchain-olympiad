import React, { useContext, useEffect } from "react";
import DisplayFile from "@/pages/Components/File/DisplayFile";
import { HealthContext } from "@/context/Health";

const ViewPatientPrescriptionSentByDoctor = () => {
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

  useEffect(() => {
    getPathologistAllData();
  }, []);
  return (
    <div>
      <DisplayFile userData={PathologistData} />
    </div>
  );
};

export default ViewPatientPrescriptionSentByDoctor;
