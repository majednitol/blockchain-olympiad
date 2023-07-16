import React, { useContext, useEffect } from "react";
import { HealthContext } from "@/context/Health";

const ViewTopMedicine = () => {
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

  useEffect(() => {
    getPharmacyCompanyAllData();
  }, []);
  return (
    <div className="container pt-2">
      <div className="card card-body">
        <h1 className="text-lg text-bold">Medicine List</h1>
        <ul className="">
          {TopMedichine.map((el, i) => (
            <li key={i}>
              {i + 1}.{el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewTopMedicine;
