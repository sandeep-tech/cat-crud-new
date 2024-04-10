import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisplayCatsData = () => {
  const [catsData, setCatsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const token = JSON.parse(localStorage.getItem("token"));

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:5010/api/cat", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const json = await data.json();
      setCatsData(json?.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const data = await fetch("http://localhost:5010/api/cat/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const json = await data.json();
      if (data.status == 201) {
        fetchData();
        alert(json.message);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div>
        {catsData.map((cat) => {
          return (
            <>
              <div className="flex bg-yellow-100 mt-2 font-bold w-12/12">
                <div className="w-4/12">
                  <p className="p-1">Cat Name : {cat.catname}</p>
                  <p className="p-1">Cat Age : {cat.catage}</p>
                  <p className="p-1">Cat Colour : {cat.catcolor}</p>
                </div>
                <div className="w-4/12">
                  <Link to={"/dashboard/editcat/" + cat.id}>
                    <button className="bg-blue-300 w-36 p-3 rounded-lg mt-6">
                      Edit
                    </button>
                  </Link>
                </div>
                <div className="w-4/12">
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="bg-red-300 w-36 p-3 rounded-lg mt-6"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DisplayCatsData;
