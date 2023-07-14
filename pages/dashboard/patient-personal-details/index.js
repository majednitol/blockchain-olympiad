import GetPersonalDetails from "@/pages/Components/DashBoard/Patient/GetPersonalDetails";
import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import DisplayFile from "@/pages/Components/File/DisplayFile";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React from "react";

const PatientsDetails = () => {
  return (
    <DashboardLayout>
      <GetPersonalDetails />
      <DisplayFile />
    </DashboardLayout>
  );
};

export default IsAuth(PatientsDetails);
