import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const onboardingComplete = localStorage.getItem("onboardingComplete");

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (!onboardingComplete) {
      navigate("/onboarding");
      return;
    }
  });

  return (
    <div>
      <div>Dashboard</div>
    </div>
  );
};

export default Dashboard;
