import React from "react";
import { Link } from "react-router-dom";
import DisplayCatsData from "../component/displayCatsData";

const Dashboard = () => {
  return (
    <>
      <div>
        <Link to="/dashboard/addcat">
          <button className="font-bold bg-orange-400 text-white p-4 m-4 rounded-xl">
            Add More Cat
          </button>
        </Link>
      </div>
      <DisplayCatsData />
    </>
  );
};

export default Dashboard;
