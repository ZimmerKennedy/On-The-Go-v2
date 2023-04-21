import React from "react";

const PersonalInfoUser = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md m-3 lg:m-0"
    style={{ backgroundColor: "rgba(249, 250, 251, 0.7)" }}>
      <h2 className="text-lg  mb-4 text-navy-blue font-bold font-roboto">Traveler Information</h2>
      <div className="mb-4">
        <label
          className="block font-medium mb-2 text-navy-blue"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
       className="border-2 p-2 w-full focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-transparent" 
        id="firstName"
        type="text"
        placeholder="Enter your first name"
      />
      </div>
      <div className="mb-4">
        <label
          className="block font-medium mb-2 text-navy-blue"
          htmlFor="middleName"
        >
          Middle Name
        </label>
        <input
          className="border-2 p-2 w-full focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-transparent"
          id="middleName"
          type="text"
          placeholder="Enter your middle name"
        />
      </div>
      <div className="mb-4">
        <label
          className="block font-medium mb-2 text-navy-blue"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          className="border-2 p-2 w-full focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-transparent"
          id="lastName"
          type="text"
          placeholder="Enter your last name"
        />
      </div>
      <div className="mb-4">
        <label
          className="block font-medium mb-2 text-navy-blue"
          htmlFor="gender"
        >
          Gender
        </label>
        <select className="border-2 p-2 w-full focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-transparent" id="gender">
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2 text-navy-blue" htmlFor="dob">
          Date of Birth
        </label>
        <input
          className="border-2 p-2 w-full focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-transparent"
          id="dob"
          type="date"
          placeholder="Enter your date of birth"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2 text-navy-blue" htmlFor="email">
          Email
        </label>
        <input
          className="border-2 p-2 w-full focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-transparent"
          id="email"
          type="email"
          placeholder="Enter your email address"
        />
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-navy-blue"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="border-2 p-2 w-full focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-transparent"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoUser;
