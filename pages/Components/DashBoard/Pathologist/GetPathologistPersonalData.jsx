import { HealthContext } from "@/context/Health";
import React, { useContext, useEffect } from "react";
import BoxButton from "../../BoxButton";

const GetPathologistPersonalData = () => {
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
    getPathologistAllData(account);
  }, [account]);

  return (
    <div className="container pt-2">
      <div class="card card-body">
        <div class="modal-header">
          <h5 class="modal-title " id="exampleModalLabel">
            Pathologist Personal Information
          </h5>
        </div>
        <div class="modal-body">
          Account: {PathologistData[0]}
          <hr />
          PathologistID: {String(PathologistData[1])}
          <hr />
          Pathologist Name: {PathologistData[2]}
          <hr />
          licenseNumber: {String(PathologistData[3])}
          <hr />
          Specialization Area: {PathologistData[4]}
          <hr />
          totalExperience : {String(PathologistData[5])}
        </div>
      </div>
    </div>
  );
};

export default GetPathologistPersonalData;
