import React, { useContext, useEffect } from "react";
import { HealthContext } from "@/context/Health";

const ViewDetails = () => {
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
  } = useContext(HealthContext);

  useEffect(() => {
    getPatientAllData(account);
  }, []);
  console.log(patientData.imgUrl);

  return <div>{patientData[2]}</div>;
};

export default ViewDetails;
