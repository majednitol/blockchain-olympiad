import TransferData from "@/pages/Components/DashBoard/Share Data/TransferData";
import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";

const PatientsDetails = () => {
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
    <DashboardLayout>
      <TransferData transferData={transferDataByPatient} />
    </DashboardLayout>
  );
};

export default IsAuth(PatientsDetails);
