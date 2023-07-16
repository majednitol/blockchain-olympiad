import TransferData from "@/pages/Components/DashBoard/Share Data/TransferData";
import DashboardLayout from "@/pages/Components/DashboardLayout/DashboardLayout";
import IsAuth from "@/pages/Components/ProtectedRoute/IsAuth";
import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";

const PatientsDetails = () => {
  const { transferDataByPatient } = useContext(HealthContext);

  return (
    <DashboardLayout>
      <TransferData transferData={transferDataByPatient} />
    </DashboardLayout>
  );
};

export default IsAuth(PatientsDetails);
