import FileUpload from "@/pages/Components/File/FileUpload";
import React, { useContext } from "react";

import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import { HealthContext } from "@/context/Health";
import TransferData from "@/pages/Components/DashBoard/Share Data/TransferData";

const PatientFileUpload = () => {
  const { account, transferDataByPatient } = useContext(HealthContext);
  return (
    <div>
      <DashboardLayout>
        <FileUpload userAddress={account} />
        <TransferData transferData={transferDataByPatient} />
      </DashboardLayout>
    </div>
  );
};

export default IsAuth(PatientFileUpload);
