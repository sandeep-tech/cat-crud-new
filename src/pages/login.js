import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleloginButton = async () => {
    try {
      const data = await fetch("http://localhost:5010/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const json = await data.json();
      if (data.status == 200) {
        localStorage.setItem("token", JSON.stringify(json.access_token));
        alert(json.message);
        navigate("/dashboard");
      } else {
        alert(json.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <input
          type="text"
          class="bg-gray-50 border w-3/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Meow@gmail.com"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="password"
          class="bg-gray-50 border w-3/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Meow@gmail.com"
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
        />
      </div>
      <button
        onClick={handleloginButton}
        className="fot-bold m-2 p-2 bg-green-400 w-20 rounded-lg"
      >
        Login
      </button>
    </>
  );
};

export default Login;
