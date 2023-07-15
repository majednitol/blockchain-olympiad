import React, { useState } from "react";
import FileUpload from "@/pages/Components/File/FileUpload";

const SentPrescription = () => {
  const [userAddress, setUserAddress] = useState("");

  const handleAddressChange = (event) => {
    setUserAddress(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter address"
        className="address"
        onChange={handleAddressChange}
      />
      <FileUpload userAddress={userAddress} />
    </div>
  );
};

export default SentPrescription;
