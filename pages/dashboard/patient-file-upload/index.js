import FileUpload from "@/pages/Components/File/FileUpload";
import React from "react";

import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import DisplayFile from "@/pages/Components/File/DisplayFile";

const PatientFileUpload = () => {
  return (
    <DashboardLayout>
      <FileUpload />
    </DashboardLayout>
  );
};

export default IsAuth(PatientFileUpload);
