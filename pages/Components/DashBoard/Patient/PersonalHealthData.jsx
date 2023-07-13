import React, { useContext, useEffect } from "react";
import { HealthContext } from "@/context/Health";

const PersonalHealthData = () => {
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
    PatientPersonalHealthData,
  } = useContext(HealthContext);

  useEffect(() => {
    getPatientAllData(account);
  }, []);

  return (
    <div className="container pt-5">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title " id="exampleModalLabel">
            Patient Basic Information
          </h5>
        </div>
        <div class="modal-body">
          Height: {String(PatientPersonalHealthData[0])}
          <hr />
          Blood Group: {PatientPersonalHealthData[1]}
          <hr />
          Previous Diseases: {PatientPersonalHealthData[2]}
          <hr />
          MedicineDrugs: {PatientPersonalHealthData[3]}
          <hr />
          Bad Habits: {PatientPersonalHealthData[4]}
          <hr />
          Chronic Diseases: {PatientPersonalHealthData[5]}
          <hr />
          Health Allergies: {PatientPersonalHealthData[6]}
          <hr />
          Birth Defects: {PatientPersonalHealthData[7]}
          {console.log(PatientPersonalHealthData)}
        </div>
      </div>
    </div>
  );
};

export default PersonalHealthData;
