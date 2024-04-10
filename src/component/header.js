import React, { useEffect, useState } from "react";
import PublicHeader from "./publicHeader";
import DashboardHeader from "./dashboardHeader";

const Header = () => {
  const [token, setToken] = useState(true);
  useEffect(() => {
    console.log("testing");
    setToken(localStorage.getItem("token"));
  }, []);

  return token ? <PublicHeader /> : <DashboardHeader />;
};

export default Header;
