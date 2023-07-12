import GetPersonalDetails from "@/pages/Components/DashBoard/Patient/GetPersonalDetails";
import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import React from "react";

const PatientsDetails = () => {
  return (
    <DashboardLayout>
      <GetPersonalDetails />
    </DashboardLayout>
  );
};

export default PatientsDetails;
