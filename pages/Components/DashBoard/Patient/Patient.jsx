import React from "react";
import GetPersonalDetails from "./GetPersonalDetails";
import Prescription from "./Prescription";
import DisplayFile from "../../File/DisplayFile";

const PatientComponent = () => {
  return (
    <div>
      <GetPersonalDetails />
      <Prescription />
      <DisplayFile />
    </div>
  );
};

export default PatientComponent;
