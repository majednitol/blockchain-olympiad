import React, { useContext, useState } from "react";
import BoxButton from "../../BoxButton";
import { HealthContext } from "@/context/Health";

const SetPathologistPersonalData = () => {
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

  const [allergies, setallergies] = useState("");
  const [cancer, setcancer] = useState("");
  const [hormoneProblem, sethormoneProblem] = useState("");
  const [diabetesLevel, setdiabetesLevel] = useState("");

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "allergies") {
      setallergies(value);
    } else if (name === "cancer") {
      setcancer(value);
    } else if (name === "hormoneProblem") {
      sethormoneProblem(value);
    } else if (name === "diabetesLevel") {
      setdiabetesLevel(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!allergies) {
      newErrors.allergies = "Please enter your allergies";
    } else {
      newErrors.allergies = " ";
    }
    if (!cancer) {
      newErrors.cancer = "Please enter your cancer";
    } else {
      newErrors.cancer = " ";
    }
    if (!hormoneProblem) {
      newErrors.hormoneProblem = "Please enter your hormoneProblem";
    } else {
      newErrors.hormoneProblem = " ";
    }

    if (!diabetesLevel) {
      newErrors.diabetesLevel = "Please enter your diabetesLevel";
    } else {
      newErrors.diabetesLevel = " ";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      allergies !== "" &&
      cancer !== "" &&
      hormoneProblem !== "" &&
      diabetesLevel !== ""
    ) {
      // Perform form submission

      console.log("Form submitted");
      setPathologistTest(allergies, cancer, hormoneProblem, diabetesLevel);
    } else {
      console.log("please fill up all feild");
      alert("Please fill up all feild");
    }
  };

  return (
    <div>
      <button
        type=""
        class="m-xl-5 align-content-center justify-content-center  d-flex align-content-sm-center"
        data-bs-toggle="modal"
        data-bs-target="#modalTwo"
        data-bs-whatever="@mdo"
      >
        <BoxButton name="pathologist Personal Data" handleFunction={() => {}} />
      </button>

      <div
        class="modal fade"
        id="modalTwo"
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
                    allergies :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="allergies"
                    name="allergies"
                    placeholder="Enter your allergies"
                    value={allergies}
                    onChange={handleInputChange}
                  />
                  {errors.allergies && <span>{errors.allergies}</span>}
                </div>

                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    name :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cancer"
                    name="cancer"
                    value={cancer}
                    placeholder="Enter your cancer"
                    onChange={handleInputChange}
                  />
                  {errors.cancer && <span>{errors.cancer}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    hormoneProblem :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="hormoneProblem"
                    name="hormoneProblem"
                    value={hormoneProblem}
                    placeholder="Enter your hormoneProblem"
                    onChange={handleInputChange}
                  />
                  {errors.hormoneProblem && (
                    <span>{errors.hormoneProblem}</span>
                  )}
                </div>

                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    diabetesLevel :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="diabetesLevel"
                    name="diabetesLevel"
                    value={diabetesLevel}
                    placeholder="Enter your diabetesLevel"
                    onChange={handleInputChange}
                  />
                  {errors.diabetesLevel && <span>{errors.diabetesLevel}</span>}
                </div>

                <div class="modal-footer">
                  <button
                    type="btn btn-dark"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit btn btn-primary"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    class="btn btn-primary"
                  >
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

export default SetPathologistPersonalData;
