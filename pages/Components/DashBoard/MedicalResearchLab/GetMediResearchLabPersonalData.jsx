import { HealthContext } from "@/context/Health";
import React, { useContext, useEffect } from "react";
import BoxButton from "../../BoxButton";

const GetMediResearchLabPersonalData = () => {
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
    getMedicalResearchLabAData();
  }, []);

  return (
    <div className="container pt-2">
      <div className="card card-body">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title " id="exampleModalLabel">
              Medical Reserch Lab Information
            </h5>
          </div>

          <div class="modal-body">
            Lab Address: {MedicalResearchLab[0]}
            <hr />
            LabID: {String(MedicalResearchLab[1])}
            <hr />
            LicenseID: {String(MedicalResearchLab[3])}
            <hr />
            Lab Name: {MedicalResearchLab[2]}
            <hr />
            Research Area: {MedicalResearchLab[4]}
            <hr />
            Lab Rating : {String(MedicalResearchLab[5])}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMediResearchLabPersonalData;
