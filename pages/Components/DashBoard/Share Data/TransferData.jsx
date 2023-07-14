import React from "react";

const TransferData = ({ transferData }) => {
  const shareData = () => {
    const userAddess = document.querySelector(".address").value;
    try {
      if (userAddess) {
        transferData(userAddess);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter address" className="address" />
      <button className="center button" onClick={shareData}>
        Share data
      </button>
    </div>
  );
};

export default TransferData;
