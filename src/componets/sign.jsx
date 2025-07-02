import React, { useState } from "react";
import logi from "../imgerack/rk3.png";
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    permanentAddress: "",
    localAddress: "",
    country: "",
    city: "",
    pincode: "",
  });

  const mycountry = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
  ];
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add API integration or validation here
  };
  return (
    <div className="h-[1000px] md:h-[800px] w-full bg-[#07282C] flex flex-col justify-center items-center">
      <div className="p-8 rounded-lg bg-[#0e3c42] gap-32 flex flex-row shadow-md w-[95%] h-auto md:h-[700px]">
        <div className="flex flex-col  h-auto md:h-[600px] justify-center md:w-[50%] w-[100%] md:ml-[40px]">
          <div className="w-full h-auto bg-[#cde8eb] p-8 rounded-lg shadow-md">
            <h2 className="text-3xl text-blue-600  font-bold text-center mb-6">
             Signup
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-2 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Permanent Address
                </label>
                <input
                  type="text"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Local Address
                </label>
                <input
                  type="text"
                  name="localAddress"
                  value={formData.localAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  name="selectedCity"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                >
                  <option value="" className="text-sm">Select Country</option>
                  {mycountry.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                  required
                />
              </div>

              <div className="col-span-full mt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="h-[600px] md:flex hidden w-[50%] ">
          <img src={logi} className="h-[460px] w-full" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Signup;
