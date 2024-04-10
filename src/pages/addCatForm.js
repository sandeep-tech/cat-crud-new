import React, { useState } from "react";
import CatForm from "../component/catForm";

const AddCatForm = () => {
  const [catFormData, setCatFormData] = useState({
    catname: "",
    catage: "",
    catcolor: "",
  });

  const token = JSON.parse(localStorage.getItem("token"));

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCatFormData({ ...catFormData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const data = await fetch("http://localhost:5010/api/cat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(catFormData),
      });
      const json = await data.json();
      if (data.status == 201) {
        setCatFormData({
          catname: "",
          catage: "",
          catcolor: "",
        });
        alert(json.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-2xl p-2">Add Cat</h1>
        <CatForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          catFormData={catFormData}
        />
      </div>
    </>
  );
};

export default AddCatForm;
