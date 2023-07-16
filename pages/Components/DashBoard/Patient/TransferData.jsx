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
    <div className="container my-2">
      <div className="card card-body">
        <h1>Share Data</h1>
        <input
          type="text"
          placeholder="address"
          className="address form-control"
        />
        <button className="center btn btn-primary mt-2" onClick={shareData}>
          Share data
        </button>
      </div>
    </div>
  );
};

export default TransferData;
