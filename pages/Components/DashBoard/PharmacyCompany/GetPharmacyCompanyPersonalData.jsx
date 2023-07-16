import { HealthContext } from "@/context/Health";
import React, { useContext, useEffect } from "react";
import BoxButton from "../../BoxButton";

const GetPharmacyCompanyPersonalData = () => {
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
    getPharmacyCompanyAllData();
  }, []);

  return (
    <div className="container pt-2">
      <div class="card card-body">
        <div class="modal-header">
          <h5 class="modal-title " id="exampleModalLabel">
            Pharmacy Company Information
          </h5>
        </div>

        <div class="modal-body">
          Account: {PharmacyCompany[0]}
          <hr />
          companyID: {String(PharmacyCompany[1])}
          <hr />
          Name: {PharmacyCompany[2]}
          <hr />
          licenseID: {String(PharmacyCompany[3])}
          <hr />
          productInformation: {PharmacyCompany[4]}
          <hr />
          pharmacyRating : {String(PharmacyCompany[5])}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default GetPharmacyCompanyPersonalData;
