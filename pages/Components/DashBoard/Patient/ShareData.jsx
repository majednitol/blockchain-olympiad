import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";

const ShareData = () => {
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
  const shareData = () => {
    const userAddess = document.querySelector(".address").value;
    try {
      if (userAddess) {
        transferDataByPatient(userAddess);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter address" className="address" />
      <button className="center button" onClick={shareData}>
        Share data
      </button>
    </div>
  );
};

export default ShareData;
