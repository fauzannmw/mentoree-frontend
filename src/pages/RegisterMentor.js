import React, { useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import mentorImage from "../assets/image/mentor-login.svg";
import profileImage from "../assets/image/profile-image-1.png";
import { MENTOR_REGISTER } from "../api";

const RegisterMentor = () => {
  const [page, setPage] = useState(1);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [bidang, setBidang] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [about, setAbout] = useState("");
  const [rate, setRate] = useState("");

  let IDR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });

  function goNextPage(e) {
    e.preventDefault();
    if (page === 3) {
      return;
    }
    console.log(
      nama,
      email,
      password,
      alamat,
      deskripsi,
      bidang,
      about,
      rate,
      pendidikan
    );
    setPage((page) => page + 1);
  }

  // async function onSubmit(e) {
  //   e.preventDefault();
  //   const req = await MENTOR_REGISTER(
  //     nama,
  //     email,
  //     password,
  //     alamat,
  //     deskripsi,
  //     bidang,
  //     about,
  //     rate,
  //     pendidikan
  //   );

  //   console.log(req);
  //   const token = req.data.data.token;
  //   localStorage.setItem("token", token);
  //   window.location.href = "/";
  // }

  async function onSubmit(e) {
    e.preventDefault();
    const req = await MENTOR_REGISTER(
      nama,
      email,
      password,
      alamat,
      deskripsi,
      bidang,
      about,
      rate,
      pendidikan
    );
    if (req.data.success) {
      const token = req.data.data[0].token;
      const id = req.data.data[0].id_mentor;
      localStorage.setItem("token", token);
      localStorage.setItem("id_mentor", id);
      window.location.href = "/";
    } else {
      console.log(req.data.message);
      alert("Email sudah digunakan");
    }
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
              <form onSubmit={goNextPage} className="grid grid-rows-3 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="nama" className="text-2xl">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
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
                <button
                  type="submit"
                  className="flex justify-center w-full p-2.5 rounded-lg text-white text-2xl font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-500"
                >
                  Berikutnya
                </button>
              </form>
            </div>
          )}

          {page === 2 && (
            <div className="form w-5/6">
              <form onSubmit={goNextPage} className="grid gap-4">
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
                    required
                  />
                </div>
                <div className="row-span-2 flex flex-col gap-1">
                  <label htmlFor="deskripsi" className="text-2xl">
                    Deskripsi singkat diri Anda
                  </label>
                  <label htmlFor="deskripsi">
                    Contoh: Frontend Developer di Traveloka Id
                  </label>
                  <input
                    type="text"
                    id="deskripsi"
                    name="deskripsi"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="bidang" className="text-2xl">
                    Bidang Keahlian
                  </label>
                  <select
                    id="bidang"
                    name="bidang"
                    value={bidang}
                    onChange={(e) => setBidang(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                    required
                  >
                    <option value="" disabled>
                      Pilih Kategori
                    </option>
                    <option value="1">UI UX</option>
                    <option value="2">Software Engineer</option>
                    <option value="3">Cyber Security</option>
                    <option value="4">Data Science</option>
                    <option value="5">Bussines Analyst</option>
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
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex justify-center w-full p-2.5 rounded-lg text-white text-2xl font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-500"
                >
                  Berikutnya
                </button>
              </form>
            </div>
          )}

          {page === 3 && (
            <div className="form w-5/6 mb-4">
              <form onSubmit={onSubmit} className="grid  gap-4">
                <div className="row-span-2 flex flex-col gap-1">
                  <label htmlFor="about" className="text-2xl">
                    Ceritakan mengenai diri Anda
                  </label>
                  <textarea
                    name="about"
                    id="about"
                    value={about}
                    cols="30"
                    rows="8"
                    onChange={(e) => setAbout(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                    required
                  ></textarea>
                </div>
                <div className="row-span-2 flex flex-col gap-1">
                  <label htmlFor="rate" className="text-2xl">
                    Tarif (Rp/Pertemuan)
                  </label>
                  <input
                    type="number"
                    id="rate"
                    name="rate"
                    value={rate}
                    min={0}
                    step={0.01}
                    onChange={(e) => setRate(e.target.value)}
                    className="flex p-2.5 rounded-md bg-white text-gray-800 border border-gray-500 hover:border-gray-700"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex justify-center w-full p-2.5 rounded-lg text-white text-2xl font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-500"
                >
                  Daftar
                </button>
              </form>
            </div>
          )}
          {/* {page !== 3 && (
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
          )} */}
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
