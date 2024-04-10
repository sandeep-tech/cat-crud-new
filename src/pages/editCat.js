import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CatForm from "../component/catForm";

const EditCat = () => {
  const [editCatData, setEditCatData] = useState({
    catname: "",
    catage: "",
    catcolor: "",
  });

  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5010/api/cat", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const json = await data.json();
    setEditCatData(json.data.find((cat) => cat.id == id));
    if (data.status == 201) {
      alert(json.message);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEditCatData({ ...editCatData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const data = await fetch("http://localhost:5010/api/cat/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(editCatData),
      });
      const json = await data.json();
      if (data.status == 201) {
        setEditCatData({
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
      <CatForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        catFormData={editCatData}
      />
    </>
  );
};

export default EditCat;
