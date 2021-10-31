import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import menteeImage from "../assets/image/mentee-login.svg";

const RegisterMentee = () => {
  return (
    <div className="register grid grid-rows-5 justify-center md:p-24">
      <div className="grid grid-cols-2 row-span-4 px-20 py-20 rounded-xl bg-white shadow-lg hover:shadow-2xl transition duration-300">
        <div className="flex flex-col justify-between">
          <div className="title w-5/6">
            <h1 className="text-3xl">Daftar Sebagai Mentor</h1>
            <h5 className="text-2xl">
              Silahkan isi data-data dibawah dengan benar.
            </h5>
          </div>

          <div className="form w-5/6">
            <form className="grid grid-rows-3 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-2xl">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-2xl">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                />
              </div>
            </form>
          </div>

          <button
            className="flex justify-center w-5/6 p-2.5 rounded-lg text-white text-2xl font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-500"
            type="submit"
          >
            Daftar
          </button>
        </div>
        <img src={menteeImage} alt="" />
      </div>
    </div>
  );
};

export default RegisterMentee;
