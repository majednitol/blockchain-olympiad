import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { HealthContext } from "@/context/Health";
import SetPatientPersonalDetails from "./Patient/SetPersonalDetails";
import SetDoctorPersonalData from "./Doctor/SetDoctorPersonalData";
import SetMediResearchLabPersonalData from "./MedicalResearchLab/SetMediResearchLabPersonalData";
import SetPathologistPersonalData from "./Pathologist/SetPathologistPersonalData";
import PharmacyCompanyPersonalData from "./PharmacyCompany/SetPharmacyCompanyPersonalData";

const SignUpComponent = () => {
  const router = useRouter();
  const { loading, ConnectedAccountUser } = useContext(HealthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (ConnectedAccountUser != 0) {
      router.push("/dashboard");
    }
  }, [ConnectedAccountUser]);

  return (
    <div className="d-flex">
      <SetPatientPersonalDetails />
      <SetPathologistPersonalData />
      <PharmacyCompanyPersonalData />
      <SetDoctorPersonalData />
      <SetMediResearchLabPersonalData />
    </div>
  );
};

export default SignUpComponent;
