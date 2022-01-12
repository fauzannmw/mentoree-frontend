import React, { useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import menteeImage from "../assets/image/mentee-login.svg";
import useAuth from "../hooks/useAuth";
import { MENTEE_REGISTER } from "../api";

const RegisterMentee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const req = await MENTEE_REGISTER(name, email, password, status);
    console.log(req);
    if (req.data.success) {
      const token = req.data.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/verification";
    } else {
      console.log(req.data.message);
      alert("Email sudah digunakan");
    }
  }
  // const { register } = useAuth();
  // register();

  return (
    <div className="register grid grid-rows-5 justify-center md:p-24">
      <div className="grid grid-cols-2 row-span-4 px-20 py-20 rounded-xl bg-white shadow-lg hover:shadow-2xl transition duration-300">
        <div className="flex flex-col justify-between">
          <div className="title w-5/6">
            <h1 className="text-3xl">Daftar Sebagai Mentee</h1>
            <h5 className="text-2xl">
              Silahkan isi data-data dibawah dengan benar.
            </h5>
          </div>

          <div className="form w-5/6 md:mb-4">
            <form onSubmit={onSubmit} className="grid grid-rows-4 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-2xl">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-2xl">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="status" className="text-2xl">
                  Status Pendidikan atau Pekerjaan
                </label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  required
                />
              </div>
              <button
                className="flex justify-center w-full p-2.5 rounded-lg text-white text-2xl font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-500"
                type="submit"
              >
                Daftar
              </button>
            </form>
          </div>
        </div>
        <img src={menteeImage} alt="" />
      </div>
      <div className="flex flex-row space-x-2 justify-center px-6 py-12 text-lg">
        <h5 className="font-medium text-gray-900">Sudah mempunyai akun ?</h5>
        <Link to="/login-gateaway" className="font-semibold text-blue-400">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterMentee;
