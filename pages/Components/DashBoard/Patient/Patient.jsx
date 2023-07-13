import React from "react";
import GetPersonalDetails from "./GetPersonalDetails";
import Prescription from "./Prescription";
import DisplayFile from "../../File/DisplayFile";
import SetPersonalHealthData from "@/pages/Components/DashBoard/Patient/SetPersonalHealthData";

const PatientComponent = () => {
  return (
    <div>
      <GetPersonalDetails />
      <SetPersonalHealthData />
      <Prescription />
      <DisplayFile />
    </div>
  );
};

export default PatientComponent;
