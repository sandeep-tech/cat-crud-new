import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="flex justify-between">
        <div></div>
        <div>
          <button
            onClick={handleLogout}
            className="font-bold text-xl bg-yellow-400 w-36 p-3 m-2 rounded-lg"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
