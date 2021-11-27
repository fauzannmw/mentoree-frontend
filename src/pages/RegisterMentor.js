import React, { useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import mentorImage from "../assets/image/mentor-login.svg";
import profileImage from "../assets/image/profile-image-1.png";
import { MENTOR_REGISTER } from "../api";

const RegisterMentor = () => {
  const [page, setPage] = useState(1);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [bidang, setBidang] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [about, setAbout] = useState("");
  const [rate, setRate] = useState("");

  function goNextPage() {
    if (page === 3) {
      return;
    }
    setPage((page) => page + 1);
  }

  async function onSubmit() {
    const req = await MENTOR_REGISTER(
      fname,
      lname,
      email,
      password,
      alamat,
      pekerjaan,
      bidang,
      about,
      rate,
      pendidikan
    );
    console.log(req);
    const token = req.data.data.token;
    localStorage.setItem("token", token);
    window.location.href = "/";
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
                  <label htmlFor="fname" className="text-2xl">
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lname" className="text-2xl">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  <label htmlFor="alamat" className="text-2xl">
                    Alamat
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="pekerjaan" className="text-2xl">
                    Pekerjaan
                  </label>
                  <input
                    type="text"
                    id="pekerjaan"
                    name="pekerjaan"
                    value={pekerjaan}
                    onChange={(e) => setPekerjaan(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="bidang" className="text-2xl">
                    Bidang
                  </label>
                  <select
                    id="bidang"
                    name="bidang"
                    value={bidang}
                    onChange={(e) => setBidang(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  >
                    <option value="" disabled>
                      Pilih Kategori
                    </option>
                    <option value="1">Persiapan Karir</option>
                    <option value="2">Pemrograman</option>
                    <option value="3">Musik</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="pendidikan" className="text-2xl">
                    Pendidikan
                  </label>
                  <input
                    type="text"
                    id="pendidikan"
                    name="pendidikan"
                    value={pendidikan}
                    onChange={(e) => setPendidikan(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  />
                </div>
              </form>
            </div>
          )}

          {page === 3 && (
            <div className="form w-5/6 mb-4">
              <form className="grid grid-rows-3 gap-4">
                {/* <div className="flex flex-col gap-10">
                  <label htmlFor="pekerjaan" className="title text-2xl">
                    Unggah Foto Anda
                  </label>
                  <img
                    src={profileImage}
                    alt=""
                    className="w-2/5 place-self-center"
                  />
                  <button className="flex justify-center place-self-center w-full py-2.5 rounded-lg text-white text-2xl font-semibold bg-blue-500 hover:bg-blue-600 transition duration-500">
                    Unggah
                  </button>
                </div> */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="about" className="text-2xl">
                    Penjelasan Singkat Mengenai Diri Anda
                  </label>
                  <label htmlFor="about">Contoh: Frontend Developer di Traveloka Id</label>
                  <input
                    type="text"
                    id="about"
                    name="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="rate" className="text-2xl">
                    Tarif (Rp/Pertemuan)
                  </label>
                  <input
                    type="number"
                    id="rate"
                    name="rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                  />
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
              type="button"
              onClick={onSubmit}
            >
              Daftar
            </button>
          )}
        </div>
        <img src={mentorImage} alt="" />
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

export default RegisterMentor;
