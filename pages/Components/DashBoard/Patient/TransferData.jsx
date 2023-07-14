import React, { useContext } from "react";
import { HealthContext } from "@/context/Health";

const TransferData = () => {
  const { account, transferDataByPatient } = useContext(HealthContext);
  const shareData = () => {
    const userAddess = document.querySelector(".address").value;
    try {
      if (userAddess) {
        transferDataByPatient(userAddess);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder=" address" className="address" />
      <button className="center button" onClick={shareData}>
        Share data
      </button>
    </div>
  );
};

export default TransferData;
