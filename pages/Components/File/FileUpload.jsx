import { useContext, useState } from "react";
import axios from "axios";
// import './FileUpload.css';
import Styles from "./FileUpload.module.css";
import { HealthContext } from "@/context/Health";

const FileUpload = ({ userAddress }) => {
  const {
    account,
    AddNewPatient,
    transferDataByPatient,
    AddMedicalResearchLab,
    AddNewpathologist,
    AddNewPharmacyCompany,
    AddDoctor,
    getPharmacyCompanyAllData,
    getPathologistAllData,
    getMedicalResearchLabAData,
    getDoctorAllData,
    getPatientAllData,
    fetchData,
    TopMedichine,
    doctorData,
    patientData,
    PharmacyCompany,
    MedicalResearchLab,
    contractData,
    PathologistData,
    signer,
    ConnectedAccountUser,
    MedicalResearchLabReport,
    MedicalResearchLabReports,
    ConnectedEntityType,
    addTopMedichine,
    addLabReport,
    setPatientPersonalData,
    transferDataByDoctor,
    transferDataByPathologist,
    setPathologistTest,
    ViewTopMedichine,
  } = useContext(HealthContext);
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("No image selected");

  const handleSubmit = async (e) => {
    console.log("address", userAddress);
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `cd464d35243d0c6d000d`,
            pinata_secret_api_key: `4c3d3e4211b69326b43d6def2550caafd0a7d9a5e73cff6a3fa8fde001396384`,
            "Content-Type": "multipart/form-data",
          },
        });

        const imgHash = `ipfs://${resFile.data.IpfsHash}`;
        signer.addPrescription(userAddress, imgHash);
        alert("Successfully Image Uploaded");
        setFilename("No image selected");
        setFile(null);
      } catch (error) {
        alert("Unable to upload image to Pinata");
      }
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFilename(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div className="container pt-2">
      <div className="card card-body">
        <form className={Styles.form} onSubmit={handleSubmit}>
          <div className="form-group ">
            <label htmlFor="file-upload" className="form-lebel">
              Choose Image
            </label>
            <input
              type="file"
              disabled={!account}
              id="file-upload"
              name="data"
              className="form-control"
              onChange={retrieveFile}
            />
          </div>
          <span className={Styles.textArea}>Image : {filename}</span>
          <button
            type="submit"
            className="btn btn-success block my-4"
            style={{ backgroundColor: "green" }}>
            Upload file
          </button>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
