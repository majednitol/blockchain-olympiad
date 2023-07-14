import React from "react";

import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import ViewDetails from "@/pages/Components/ViewDetails/ViewDetails";

const PatientFileUpload = () => {
  return (
    <div>
      <DashboardLayout>
        <ViewDetails />
      </DashboardLayout>
    </div>
  );
};

export default IsAuth(PatientFileUpload);
