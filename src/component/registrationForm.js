import React from "react";
import { Link } from "react-router-dom";

const RegistrationForm = ({
  handleSubmit,
  handleChange,
  registrationFormData,
}) => {
  return (
    <>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          First Name
        </label>
        <input
          type="text"
          class="bg-gray-50 border w-3/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Meow"
          name="firstName"
          value={registrationFormData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Last Name
        </label>
        <input
          type="text"
          class="bg-gray-50 border w-3/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="3"
          name="lastName"
          value={registrationFormData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <input
          type="text"
          class="bg-gray-50 border w-3/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Brown"
          name="email"
          value={registrationFormData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="password"
          class="bg-gray-50 border w-3/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Brown"
          name="password"
          value={registrationFormData.password}
          onChange={handleChange}
        />
      </div>
      <button
        className="font-bold p-2 m-2 bg-slate-400 rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
};

export default RegistrationForm;
