import React, { useContext, useState } from "react";
import BoxButton from "../../BoxButton";
import { HealthContext } from "@/context/Health";

const PharmacyCompanyPersonalData = () => {
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
  const [name, setName] = useState("");
  const [companyID, setcompanyID] = useState("");
  const [productInformation, setproductInformation] = useState("");
  const [pharmacyRating, setpharmacyRating] = useState("");

  const [licenseID, setlicenseID] = useState("");
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    if (name === "name") {
      setName(value);
    } else if (name === "companyID") {
      setcompanyID(value);
    } else if (name === "licenseID") {
      setlicenseID(value);
    } else if (name === "pharmacyRating") {
      setpharmacyRating(value);
    } else if (name === "productInformation") {
      setproductInformation(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!companyID) {
      newErrors.companyID = "Please enter your companyID";
    } else {
      newErrors.companyID = " ";
    }
    if (!name) {
      newErrors.name = "Please enter your name";
    } else {
      newErrors.name = " ";
    }
    if (!productInformation) {
      newErrors.productInformation = "Please enter your productInformation";
    } else {
      newErrors.productInformation = " ";
    }

    if (!licenseID) {
      newErrors.licenseID = "Please enter your licenseID";
    } else {
      newErrors.licenseID = " ";
    }

    if (!pharmacyRating) {
      newErrors.pharmacyRating = "Please enter your pharmacyRating";
    } else {
      newErrors.pharmacyRating = " ";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0 ? false : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission

      console.log("Form submitted");
      AddNewPharmacyCompany(
        companyID,
        name,
        licenseID,
        productInformation,
        pharmacyRating
      );
    } else {
      console.log("please fill up all feild", errors);
      alert("Please fill up all feild!");
    }
  };

  return (
    <div>
      <button
        type=""
        className="m-xl-5 align-content-center justify-content-center  d-flex align-content-sm-center"
        data-bs-toggle="modal"
        data-bs-target="#modalThree"
        data-bs-whatever="@mdo">
        <BoxButton
          name="Pharmacy Company Personal Data"
          handleFunction={() => {}}
        />
      </button>

      <div
        className="modal fade"
        id="modalThree"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title " id="exampleModalLabel">
                Sign Up
              </h5>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label for="recipient-name" className="col-form-label">
                    companyID :
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="companyID"
                    name="companyID"
                    placeholder="Enter your companyID"
                    value={companyID}
                    onChange={handleInputChange}
                  />
                  {errors.companyID && <span>{errors.companyID}</span>}
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                  />
                  {errors.name && <span>{errors.name}</span>}
                </div>{" "}
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    licenseID :
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="licenseID"
                    name="licenseID"
                    value={licenseID}
                    placeholder="Enter your licenseID"
                    onChange={handleInputChange}
                  />
                  {errors.licenseID && <span>{errors.licenseID}</span>}
                </div>{" "}
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    pharmacyRating :
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="pharmacyRating"
                    name="pharmacyRating"
                    value={pharmacyRating}
                    placeholder="Enter your pharmacyRating"
                    onChange={handleInputChange}
                  />
                  {errors.pharmacyRating && (
                    <span>{errors.pharmacyRating}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    serviceArea :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productInformation"
                    name="productInformation"
                    value={productInformation}
                    onChange={handleInputChange}
                    placeholder="Enter your productInformation"
                  />
                  {errors.productInformation && (
                    <span>{errors.productInformation}</span>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="btn btn-dark"
                    classNameName="btn btn-dark"
                    data-bs-dismiss="modal">
                    Close
                  </button>
                  <button
                    type="submit btn btn-primary"
                    className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyCompanyPersonalData;
