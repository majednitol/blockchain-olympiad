import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { HealthContext } from "@/context/Health";
import SharedDataFromPatient from "@/pages/Components/DashBoard/Doctor/SharedDataFromPathologist";

const Home = () => {
  const router = useRouter();
  const { loading, ConnectedAccountUser } = useContext(HealthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (ConnectedAccountUser != 0) {
      router.push("/dashboard");
    } else {
      router.push("/signup");
    }
  }, [ConnectedAccountUser]);
  return (
    <div>
      {/* <MainComponent /> */}
      {/* <SetPatientPersonalDetails /> */}
      <SharedDataFromPatient />
    </div>
  );
};

export default Home;
