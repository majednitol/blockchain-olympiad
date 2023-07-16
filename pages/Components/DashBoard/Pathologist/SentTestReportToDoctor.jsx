import { useState } from "react";
import FileUpload from "@/pages/Components/File/FileUpload";

const SentTestReportToDoctor = () => {
  const [address, setAddress] = useState("");

  return (
    <div className="container pt-4">
      <div className="col-md-8 offset-md-2">
        <div className="card card-body ">
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter address "
              onChange={(e) => useState(e.target.value)}
              className="address form-control"
            />
          </div>
          <FileUpload userAddress={address} />
        </div>
      </div>
    </div>
  );
};

export default SentTestReportToDoctor;
