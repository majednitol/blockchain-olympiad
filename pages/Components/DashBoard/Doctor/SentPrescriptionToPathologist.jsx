import React from "react";
import FileUpload from "@/pages/Components/File/FileUpload";

const SentPrescriptionToPathologist = () => {
  const userAddess = document.querySelector(".address").value;
  return (
    <div>
      <input type="text" placeholder="Enter address" className="address" />
      <FileUpload userAddress={userAddess} />
    </div>
  );
};

export default SentPrescriptionToPathologist;
