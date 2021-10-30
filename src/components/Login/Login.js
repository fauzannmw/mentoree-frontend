import React, { useState } from "react";
import "./Login.scss";
import mentorImage from "../../assets/image/mentor-login.svg";
import menteeImage from "../../assets/image/mentee-login.svg";
import { Link } from "react-router-dom";

const Login = (props) => {
  var roleImage = "";
  if (props.role == "Mentor") {
    roleImage = mentorImage;
  } else if (props.role == "Mentee") {
    roleImage = menteeImage;
  }

  return (
    <div className="login grid grid-rows-5 justify-center md:p-24">
      <div className="grid grid-cols-2 row-span-4 px-6 py-20 space-x-12 rounded-xl bg-white shadow-lg hover:shadow-xl transition duration-300">
        <img src={roleImage} alt="" className="" />

        <div className="flex flex-col  justify-between">
          <div className="title w-5/6">
            <h1 className="text-3xl">Masuk Sebagai {props.role}</h1>
            <h5 className="text-2xl">
              Silahkan isi data-data dibawah dengan benar.
            </h5>
          </div>

          <div className="form w-5/6 ">
            <form className="grid grid-rows-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-2xl">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="flex p-2.5 rounded-md bg-white text-gray-800  border border-gray-500 "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-2xl">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="flex p-2.5 rounded-md bg-white text-gray-800  border border-gray-500 focus:border-transparent "
                />
              </div>
            </form>
          </div>

          <button className="flex justify-center w-5/6 p-2.5 rounded-lg text-white text-2xl font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-500">
            Masuk
          </button>
        </div>
      </div>
      <div className="flex flex-row space-x-2 justify-center px-6 py-12 text-lg">
        <h5 className="font-medium text-gray-900">Belum mempunyai akun ?</h5>
        <Link to="/register-gateaway" className="font-semibold text-blue-400">Daftar Sekarang</Link>
      </div>
    </div>
  );
};

export default Login;
