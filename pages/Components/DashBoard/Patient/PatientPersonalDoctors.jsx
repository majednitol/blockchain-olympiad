import React, { useContext, useState } from "react";
import { HealthContext } from "@/context/Health";

const PatientPersonalDoctors = (patientPersonalDoctor) => {
  console.log("Patient Doctor", patientPersonalDoctor);
  const [doctor, setDoctor] = useState([]);
  return (
    <div>
        {Object.keys(patientPersonalDoctor).map(key => (
        <p key={key}>
          {key}: {patientPersonalDoctor[key]}
        </p>
      ))}
    </div>
  );
};

export default PatientPersonalDoctors;
