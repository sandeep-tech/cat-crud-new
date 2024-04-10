import React from "react";
import NoAccess from "./noAccess";

const PrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token == null ? <NoAccess /> : children;
};

export default PrivateRoute;
