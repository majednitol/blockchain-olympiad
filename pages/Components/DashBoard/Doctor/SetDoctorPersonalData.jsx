import React, { useContext, useState } from "react";
import BoxButton from "../../BoxButton";
import { HealthContext } from "@/context/Health";

const SetDoctorPersonalData = () => {
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
  const [doctorID, setdoctorID] = useState("");
  const [specialty, setspecialty] = useState("");
  const [consultationFee, setconsultationFee] = useState("");
  const [BMDCNumber, setBMDCNumber] = useState("");
  const [yearOfExperience, setyearOfExperience] = useState("");
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "doctorID") {
      setdoctorID(value);
    } else if (name === "BMDCNumber") {
      setBMDCNumber(value);
    } else if (name === "consultationFee") {
      setconsultationFee(value);
    } else if (name === "specialty") {
      setspecialty(value);
    } else if (name === "yearOfExperience") {
      setyearOfExperience(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!doctorID) {
      newErrors.doctorID = "Please enter your doctorID";
    } else {
      newErrors.doctorID = " ";
    }
    if (!name) {
      newErrors.name = "Please enter your name";
    } else {
      newErrors.name = " ";
    }
    if (!specialty) {
      newErrors.specialty = "Please enter your specialty";
    } else {
      newErrors.specialty = " ";
    }

    if (!yearOfExperience) {
      newErrors.yearOfExperience = "Please enter your yearOfExperience";
    } else {
      newErrors.yearOfExperience = " ";
    }

    if (!BMDCNumber) {
      newErrors.BMDCNumber = "Please enter your BMDCNumber";
    } else {
      newErrors.BMDCNumber = " ";
    }

    if (!consultationFee) {
      newErrors.consultationFee = "Please enter your consultationFee";
    } else {
      newErrors.consultationFee = " ";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateForm() ||
      (name !== " " &&
        consultationFee !== " " &&
        doctorID !== "" &&
        specialty !== " " &&
        BMDCNumber !== " " &&
        yearOfExperience !== " ")
    ) {
      // Perform form submission

      console.log("Form submitted");
      AddDoctor(
        doctorID,
        name,
        specialty,
        consultationFee,
        BMDCNumber,
        yearOfExperience
      );
    } else {
      console.log("please fill up all feild");
    }
  };

  return (
    <div>
      <button
        type=""
        class="m-xl-5 align-content-center justify-content-center  d-flex align-content-sm-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        <BoxButton name="DoctorPersonalData" />
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title " id="exampleModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                class="btn-close mx-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    doctorID :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="doctorID"
                    name="doctorID"
                    placeholder="Enter your doctorID"
                    value={doctorID}
                    onChange={handleInputChange}
                  />
                  {errors.doctorID && <span>{errors.doctorID}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    name :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                  />
                  {errors.name && <span>{errors.name}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    BMDCNumber :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="BMDCNumber"
                    name="BMDCNumber"
                    value={BMDCNumber}
                    placeholder="Enter your BMDCNumber"
                    onChange={handleInputChange}
                  />
                  {errors.BMDCNumber && <span>{errors.BMDCNumber}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    consultationFee :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="consultationFee"
                    name="consultationFee"
                    value={consultationFee}
                    placeholder="Enter your consultationFee"
                    onChange={handleInputChange}
                  />
                  {errors.consultationFee && (
                    <span>{errors.consultationFee}</span>
                  )}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    specialty :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="specialty"
                    name="specialty"
                    value={specialty}
                    onChange={handleInputChange}
                    placeholder="Enter your specialty"
                  />
                  {errors.specialty && <span>{errors.specialty}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    yearOfExperience :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="specialty"
                    name="specialty"
                    value={yearOfExperience}
                    onChange={handleInputChange}
                    placeholder="Enter your yearOfExperience"
                  />
                  {errors.yearOfExperience && (
                    <span>{errors.yearOfExperience}</span>
                  )}
                </div>
                <div class="modal-footer">
                  <button
                    type="btn btn-dark"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit btn btn-primary" class="btn btn-primary">
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

export default SetDoctorPersonalData;
