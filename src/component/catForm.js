import React from "react";
import { Link } from "react-router-dom";

const CatForm = ({ handleSubmit, handleChange, catFormData }) => {
  return (
    <>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Cat Name
        </label>
        <input
          type="text"
          class="bg-gray-50 border w-3/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Meow"
          name="catname"
          value={catFormData.catname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Cat Age
        </label>
        <input
          type="text"
          class="bg-gray-50 border w-3/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="3"
          name="catage"
          value={catFormData.catage}
          onChange={handleChange}
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Cat Color
        </label>
        <input
          type="text"
          class="bg-gray-50 border w-3/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Brown"
          name="catcolor"
          value={catFormData.catcolor}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          className="font-bold p-2 m-2 bg-green-400 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <Link to="/dashboard">
          <button className="font-bold p-2 mx-6 text-white bg-purple-600 rounded-lg">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </>
  );
};

export default CatForm;
