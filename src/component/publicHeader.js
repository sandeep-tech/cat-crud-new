import React from "react";
import { Link } from "react-router-dom";

const PublicHeader = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <Link to="/login">
            <button className="font-bold text-xl bg-green-400 w-36 p-3 m-2 rounded-lg">
              Login
            </button>
          </Link>
        </div>
        <div>
          <Link to="/registration">
            <button className="font-bold text-xl bg-yellow-400 w-36 p-3 m-2 rounded-lg">
              New User
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PublicHeader;
