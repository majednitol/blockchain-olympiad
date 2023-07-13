import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";
import TransferData from "@/pages/Components/DashBoard/Share Data/TransferData";

const ShareDataByDoctor = () => {
  const { transferDataByDoctor } = useContext(HealthContext);

  return (
    <div>
      <TransferData transferData={transferDataByDoctor} />
    </div>
  );
};

export default ShareDataByDoctor;
