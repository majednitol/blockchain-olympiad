import React, { useState } from "react";
import FileUpload from "@/pages/Components/File/FileUpload";

const SentPrescription = () => {
  const [userAddress, setUserAddress] = useState("");

  const handleAddressChange = (event) => {
    setUserAddress(event.target.value);
  };

  return (
    <div className="container pt-5">
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter address"
          className="address form-control"
          onChange={handleAddressChange}
        />
      </div>
      <FileUpload userAddress={userAddress} />
    </div>
  );
};

export default SentPrescription;
