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
    <div className="container pt-2">
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <input
            type="text"
            placeholder="Enter Top Medicine"
            className="address form-control"
          />
          <button className="center btn btn-primary mt-2" onClick={addMedicine}>
            submit medicine
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddingTopMedichine;
