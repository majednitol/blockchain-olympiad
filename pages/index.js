import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { ChatAppContext, HealthContext } from "@/context/Health";
import MainComponent from "./Components/DashBoard/MainComponent";
import SetPatientPersonalDetails from "./Components/DashBoard/Patient/SetPersonalDetails";

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
    </div>
  );
};

export default Home;
