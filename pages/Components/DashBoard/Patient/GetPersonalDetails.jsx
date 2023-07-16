import { HealthContext } from "@/context/Health";
import React, { useContext, useEffect } from "react";
import BoxButton from "../../BoxButton";

const GetPersonalDetails = () => {
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

  return (
    <div className="container pt-5">
      <div class="card card-body">
        <div class="modal-header">
          <h5 class="modal-title " id="exampleModalLabel">
            Patient Basic Information
          </h5>
        </div>
        <div class="modal-body">
          Account: {patientData[0]}
          <hr />
          PatientId: {String(patientData[1])}
          <hr />
          Patient Name: {patientData[2]}
          <hr />
          Patient Gender: {patientData[3]}
          <hr />
          Patient Age: {String(patientData[4])}
          <hr />
          Patient Location: {patientData[5]}
        </div>
      </div>
    </div>
  );
};

export default GetPersonalDetails;
