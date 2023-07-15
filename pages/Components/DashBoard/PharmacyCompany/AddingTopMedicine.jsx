import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";

const AddingTopMedichine = () => {
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
  const addMedicine = () => {
    const medicine = document.querySelector(".address").value;
    try {
      if (medicine) {
        addTopMedichine(medicine);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter Top Medicine" className="address" />
      <button className="center button" onClick={addMedicine}>
        submit medicine
      </button>
    </div>
  );
};

export default AddingTopMedichine;
