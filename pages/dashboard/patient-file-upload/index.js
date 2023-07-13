import FileUpload from "@/pages/Components/File/FileUpload";
import React from "react";

import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";

const PatientFileUpload = () => {
  return (
    <div>
      <DashboardLayout>
        <FileUpload />
      </DashboardLayout>
    </div>
  );
};

export default IsAuth(PatientFileUpload);
