import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";
import TransferData from "@/pages/Components/DashBoard/Share Data/TransferData";

const ShareDataByPathologist = () => {
  const { transferDataByPathologist } = useContext(HealthContext);

  return (
    <div>
      <TransferData transferData={transferDataByPathologist} />
    </div>
  );
};

export default ShareDataByPathologist;
