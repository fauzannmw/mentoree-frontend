import React, { useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import mentorImage from "../assets/image/mentor-login.svg";
import profileImage from "../assets/image/profile-image-1.png";

const RegisterMentor = () => {
  const [page, setPage] = useState(1);

  function goNextPage() {
    if (page === 3) {
      return;
    }
    setPage((page) => page + 1);
  }

  return (
    <div className="register grid grid-rows-5 justify-center md:p-24">
      <div className="grid grid-cols-2 row-span-4 px-20 py-20 rounded-xl bg-white shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex flex-col justify-between gap-4">
          <div className="title w-5/6">
            <h1 className="text-3xl">Daftar Sebagai Mentor</h1>
            <h5 className="text-2xl">
              Silahkan isi data-data dibawah dengan benar.
            </h5>
          </div>

          {page === 1 && (
            <div className="form w-5/6">
              <form className="grid grid-rows-3 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-2xl">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
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
                <div className="flex flex-col gap-1">
                  <label htmlFor="alamat" className="text-2xl">
                    Alamat
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  />
                </div>
              </form>
            </div>
          )}

          {page === 2 && (
            <div className="form w-5/6">
              <form className="grid grid-rows-3 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="pekerjaan" className="text-2xl">
                    Pekerjaan
                  </label>
                  <input
                    type="text"
                    id="pekerjaan"
                    name="pekerjaan"
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="category" className="text-2xl">
                    Kategori Subjek
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="1">Persiapan Karir</option>
                    <option value="2">Pemrograman</option>
                    <option value="3">Musik</option>
                    <option value="4">...</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="about" className="text-2xl">
                    Latar Belakang
                  </label>
                  <input
                    type="text"
                    id="about"
                    name="about"
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="rate" className="text-2xl">
                    Tarif (Rp/Bulan)
                  </label>
                  <input
                    type="text"
                    id="rate"
                    name="rate"
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  />
                </div>
              </form>
            </div>
          )}

          {page === 3 && (
            <div className="form w-5/6 mb-4">
              <form className="grid grid-rows gap-4">
                <div className="flex flex-col gap-10">
                  <label htmlFor="pekerjaan" className="title text-2xl">
                    Unggah Foto Anda
                  </label>
                  <img
                    src={profileImage}
                    alt=""
                    className="w-2/5 place-self-center"
                  />
                  <label
                    htmlFor="file"
                    className="px-4 h-9 inline-flex items-center rounded-lg text-2xl text-white bg-blue-500 "
                  >
                    Select Files
                    <input
                      type="file"
                      name="file"
                      multiple
                      className="sr-only"
                    />
                  </label>
                  <button className="flex justify-center place-self-center w-full py-2.5 rounded-lg text-white text-2xl font-semibold bg-blue-500 hover:bg-blue-600 transition duration-500">
                    Unggah
                  </button>
                </div>
              </form>
            </div>
          )}
          {page !== 3 && (
            <button
              className="flex justify-center w-5/6 p-2.5 rounded-lg text-white text-2xl font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-500"
              onClick={goNextPage}
            >
              Berikutnya
            </button>
          )}
          {page === 3 && (
            <button
              className="flex justify-center w-5/6 p-2.5 rounded-lg text-white text-2xl font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-500"
              type="submit"
            >
              Daftar
            </button>
          )}
        </div>
        <img src={mentorImage} alt="" />
      </div>
      <div className="flex flex-row space-x-2 justify-center px-6 py-12 text-lg">
        <h5 className="font-medium text-gray-900">Belum mempunyai akun ?</h5>
        <Link to="/register-gateaway" className="font-semibold text-blue-400">
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
};

export default RegisterMentor;
