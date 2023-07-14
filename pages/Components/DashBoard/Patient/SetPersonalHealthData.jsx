import React, { useContext, useState } from "react";
import { HealthContext } from "@/context/Health";
import BoxButton from "@/pages/Components/BoxButton";

const SetPersonalHealthData = () => {
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
  const [height, setheight] = useState(0);
  const [bloodGroup, setbloodGroup] = useState("");
  const [previousDiseases, setpreviousDiseases] = useState("");
  const [medicineDrugs, setmedicineDrugs] = useState("");
  const [badHabits, setbadHabits] = useState("");
  const [chronicDiseases, setchronicDiseases] = useState("");
  const [healthAllergies, sethealthAllergies] = useState("");
  const [birthDefects, setbirthDefects] = useState("");

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "height") {
      setheight(value);
    } else if (name === "bloodGroup") {
      setbloodGroup(value);
    } else if (name === "previousDiseases") {
      setpreviousDiseases(value);
    } else if (name === "medicineDrugs") {
      setmedicineDrugs(value);
    } else if (name === "badHabits") {
      setbadHabits(value);
    } else if (name === "chronicDiseases") {
      setchronicDiseases(value);
    } else if (name === "healthAllergies") {
      sethealthAllergies(value);
    } else if (name === "birthDefects") {
      setbirthDefects(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!height) {
      newErrors.height = "Please enter your height";
    } else {
      newErrors.height = " ";
    }
    if (!bloodGroup) {
      newErrors.bloodGroup = "Please enter your bloodGroup";
    } else {
      newErrors.bloodGroup = " ";
    }
    if (!previousDiseases) {
      newErrors.previousDiseases = "Please enter your previousDiseases";
    } else {
      newErrors.previousDiseases = " ";
    }

    if (!medicineDrugs) {
      newErrors.medicineDrugs = "Please enter your medicineDrugs";
    } else {
      newErrors.medicineDrugs = " ";
    }

    if (!badHabits) {
      newErrors.badHabits = "Please enter your patientID";
    } else {
      newErrors.badHabits = " ";
    }

    if (!chronicDiseases) {
      newErrors.chronicDiseases = "Please enter your chronicDiseases";
    } else {
      newErrors.chronicDiseases = " ";
    }

    if (!healthAllergies) {
      newErrors.healthAllergies = "Please enter your healthAllergies";
    } else {
      newErrors.healthAllergies = " ";
    }
    if (!birthDefects) {
      newErrors.birthDefects = "Please enter your birthDefects";
    } else {
      newErrors.birthDefects = " ";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateForm() ||
      (height !== 0 &&
        bloodGroup !== " " &&
        previousDiseases !== "" &&
        medicineDrugs !== " " &&
        badHabits !== " " &&
        chronicDiseases !== " " &&
        healthAllergies !== " " &&
        birthDefects !== " ")
    ) {
      // Perform form submission

      console.log("Form submitted");
      setPatientPersonalData(
        height,
        bloodGroup,
        previousDiseases,
        medicineDrugs,
        badHabits,
        chronicDiseases,
        healthAllergies,
        birthDefects
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
        <BoxButton name="Patient" handleFunction={() => {}} />
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
                    height :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="height"
                    name="height"
                    placeholder="Enter your height"
                    value={height}
                    onChange={handleInputChange}
                  />
                  {errors.height && <span>{errors.height}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    bloodGroup :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="bloodGroup"
                    name="bloodGroup"
                    value={bloodGroup}
                    placeholder="Enter your bloodGroup"
                    onChange={handleInputChange}
                  />
                  {errors.bloodGroup && <span>{errors.bloodGroup}</span>}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    previousDiseases :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="previousDiseases"
                    name="previousDiseases"
                    value={previousDiseases}
                    placeholder="Enter your previousDiseases"
                    onChange={handleInputChange}
                  />
                  {errors.previousDiseases && (
                    <span>{errors.previousDiseases}</span>
                  )}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    medicineDrugs :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="medicineDrugs"
                    name="medicineDrugs"
                    value={medicineDrugs}
                    placeholder="Enter your medicineDrugs"
                    onChange={handleInputChange}
                  />
                  {errors.medicineDrugs && <span>{errors.medicineDrugs}</span>}
                </div>
                <div className="mb-3">
                  <label>badHabits :</label>
                  <input
                    type="text"
                    class="form-control"
                    id="badHabits"
                    name="badHabits"
                    value={badHabits}
                    onChange={handleInputChange}
                    placeholder="Enter your badHabits"
                  />
                  {errors.badHabits && <span>{errors.badHabits}</span>}
                </div>
                <div className="mb-3">
                  <label>birthDefects :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="birthDefects"
                    name="birthDefects"
                    value={birthDefects}
                    onChange={handleInputChange}
                    placeholder="Enter your birthDefects"
                  />
                  {errors.birthDefects && <span>{errors.birthDefects}</span>}
                </div>
                <div className="mb-3">
                  <label>chronicDiseases :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="chronicDiseases"
                    name="chronicDiseases"
                    value={chronicDiseases}
                    onChange={handleInputChange}
                    placeholder="Enter your badHabits"
                  />
                  {errors.chronicDiseases && (
                    <span>{errors.chronicDiseases}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label>healthAllergies :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="healthAllergies"
                    name="healthAllergies"
                    value={healthAllergies}
                    onChange={handleInputChange}
                    placeholder="Enter your healthAllergies"
                  />
                  {errors.healthAllergies && (
                    <span>{errors.healthAllergies}</span>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="submit btn btn-primary"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    className="btn btn-primary"
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

export default SetPersonalHealthData;
