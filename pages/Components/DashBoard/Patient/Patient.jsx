import React from "react";
import SetPersonalHealthData from "@/pages/Components/DashBoard/Patient/SetPersonalHealthData";
import PersonalHealthData from "@/pages/Components/DashBoard/Patient/PersonalHealthData";
import ShareDataByPatient from "@/pages/Components/DashBoard/Patient/ShareDataByPatient";
import GetPersonalDetails from "@/pages/Components/DashBoard/Patient/GetPersonalDetails";

const PatientComponent = () => {
  return (
    <div>
      <GetPersonalDetails />
      <SetPersonalHealthData />
      <PersonalHealthData />
      <ShareDataByPatient />
      {/*<Prescription />*/}
      {/*<DisplayFile />*/}
    </div>
  );
};

export default PatientComponent;
