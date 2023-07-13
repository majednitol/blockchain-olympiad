import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";
import DisplayFile from "@/pages/Components/File/DisplayFile";

const ViewSharedData = ({ address }) => {
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
      {address.map((el, i) => {
        let x = getPatientAllData(el)(<DisplayFile userAddress={x} />);
      })}
    </div>
  );
};

export default ViewSharedData;
