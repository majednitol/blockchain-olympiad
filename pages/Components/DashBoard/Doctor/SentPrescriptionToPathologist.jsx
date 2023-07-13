import React from "react";
import FileUpload from "@/pages/Components/File/FileUpload";

const SentPrescription = () => {
  const userAddess = document.querySelector(".address").value;
  return (
    <div>
      <input type="text" placeholder="Enter address" className="address" />
      <FileUpload patientAddress={userAddess} />
    </div>
  );
};

export default SentPrescription;
