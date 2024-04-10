import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../component/registrationForm";

const Registration = () => {
  const [registrationFormData, setRegistrationFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRegistrationFormData({ ...registrationFormData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const data = await fetch("http://localhost:5010/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationFormData),
      });
      const json = await data.json();
      if (data.status == 201) {
        alert(json.message);
        setRegistrationFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div>
        <h3 className="font-bold text-2xl p-2 m-2">Registration form</h3>
        <RegistrationForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          registrationFormData={registrationFormData}
        />
      </div>
    </>
  );
};

export default Registration;
