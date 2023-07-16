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
    <div className="row pt-4">
      <div className="col-md-3 mb-2">
        <SetPatientPersonalDetails />
      </div>
      <div className="col-md-3 mb-2">
        <SetPathologistPersonalData />
      </div>
      <div className="col-md-3 mb-2">
        <PharmacyCompanyPersonalData />
      </div>
      <div className="col-md-3 mb-2">
        <SetDoctorPersonalData />
      </div>
      <div className="col-md-3 mb-2">
        <SetMediResearchLabPersonalData />
      </div>
    </div>
  );
};

export default SignUpComponent;
