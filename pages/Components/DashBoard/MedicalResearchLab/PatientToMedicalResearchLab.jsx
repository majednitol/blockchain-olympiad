import React, { useContext, useEffect, useState } from "react";
import Styles from "../../File/DisplayFile.module.css";
import { HealthContext } from "@/context/Health";

const PatientToMedicalResearchLabSharedData = () => {
  const {
    patientData,
    sharedData,
    getPatientAllPrescription,
    PatientToMedRcLabSharedData,
    doctorData,
  } = useContext(HealthContext);
  const [data, setData] = useState("");
  const getData = async () => {
    let dataArray;

    try {
      dataArray = await sharedData;
      console.log("data image", dataArray);
    } catch (error) {
      alert(error);
    }

    const isEmpty = Object.keys(dataArray).length === 0;
    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a
            href={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
            key={i}
            target="_blank">
            <img
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="img"
            />
          </a>
        );
      });

      setData(images);
    } else {
      alert("No image to display");
    }
  };

  useEffect(() => {
    {
      PatientToMedRcLabSharedData.map((el, i) => {
        getPatientAllPrescription(el);
      });
    }
  }, [PatientToMedRcLabSharedData]);

  return (
    <div className="container pt-3">
      <div className={Styles.imagelist}>{data}</div>
      <button
        className="btn btn-success block m-auto"
        style={{ backgroundColor: "green" }}
        onClick={getData}>
        Get data
      </button>
    </div>
  );
};

export default PatientToMedicalResearchLabSharedData;
