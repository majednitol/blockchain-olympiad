import React from "react";
import Prescription from "./Prescription";
import DisplayFile from "../../File/DisplayFile";
import SetPersonalHealthData from "@/pages/Components/DashBoard/Patient/SetPersonalHealthData";
import PersonalHealthData from "@/pages/Components/DashBoard/Patient/PersonalHealthData";
import ShareData from "@/pages/Components/DashBoard/Patient/ShareData";
import GetPersonalDetails from "@/pages/Components/DashBoard/Patient/GetPersonalDetails";

const PatientComponent = () => {
  return (
    <div>
      <GetPersonalDetails />
      <SetPersonalHealthData />
      <PersonalHealthData />
      <ShareData />
      <Prescription />
      <DisplayFile />
    </div>
  );
};

export default PatientComponent;
