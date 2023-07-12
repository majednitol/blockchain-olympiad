import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { ChatAppContext, HealthContext } from "@/context/Health";
import MainComponent from "./Components/DashBoard/MainComponent";
import SetPatientPersonalDetails from "./Components/DashBoard/Patient/SetPersonalDetails";

const Home = () => {
  const router = useRouter();
  const { account, ConnectedAccountUser } = useContext(HealthContext);

  useEffect(() => {
    alert(ConnectedAccountUser);
    if (ConnectedAccountUser != 0) {
      router.push("/dashboard");
    }
  }, [ConnectedAccountUser]);
  return (
    <div>
      {/* <MainComponent /> */}
      <SetPatientPersonalDetails />
    </div>
  );
};

export default Home;
