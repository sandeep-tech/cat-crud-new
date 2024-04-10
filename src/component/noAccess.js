import React from "react";
import { Link } from "react-router-dom";

const NoAccess = () => {
  return (
    <>
      <div>
        <p className="font-bold text-2xl">No Access please click on Login </p>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </>
  );
};

export default NoAccess;
