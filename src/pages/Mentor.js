import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Mentor.scss";
// import profileImage from "../assets/image/profile-image-1.png";
import profileImage from "../assets/image/mentor-image-1.jpeg";
import star from "../assets/icon/star.png";
import { MENTOR_GET_DETAIL } from "../api";

const Mentor = () => {
  const [mentor, setMentor] = useState({});
  const { id } = useParams();
  const [IsloggedIn, setIsLoggedIn] = useState(false);

  const getMentorDetail = async () => {
    const req = await MENTOR_GET_DETAIL(id);
    console.log(req.data.data[0]);
    setMentor(req.data.data[0]);
  };

  useEffect(() => {
    getMentorDetail();
  }, []);

  useEffect(() => {
    const checkLocalStorage = () => {
      if (localStorage.getItem("token") === null) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };
    window.addEventListener("storage", checkLocalStorage);
    checkLocalStorage();
  }, []);

  return (
    <div className="mentor p-4 md:py-24 md:px-36">
      <div className="grid md:grid-cols-7 gap-4 items-center bg-white py-10 px-6 md:p-12 rounded-xl shadow-lg hover:shadow-xl transition duration-500">
        <div className="hidden md:flex col-span-1">
          <img src={profileImage} className="rounded-full" alt="" />
        </div>
        <div className="grid gap-3 col-span-5 md:w-2/5 capitalize">
          <h1 className="title text-2xl col-span-2">{mentor.nama}</h1>
          <div className="title text-lg">
            <div className="grid grid-cols-8 gap-5 md:gap-14">
              <h6 className="col-span-2 text-gray-500">Lokasi</h6>
              <p className="col-span-6">{mentor.alamat}</p>
            </div>
            <div className="grid grid-cols-8 gap-5 md:gap-14">
              <h6 className="col-span-2 text-gray-500">Kategori</h6>
              <p className="col-span-6">{mentor.kategori}</p>
            </div>
            <div className="grid grid-cols-8 gap-5 md:gap-14">
              <h6 className="col-span-2 text-gray-500">Deskripsi</h6>
              <p className="col-span-6">{mentor.deskripsi}</p>
            </div>
          </div>
        </div>
        <div className=" title md:grid grid-row-4 w-5/6 gap-2 col-span-1">
          <h1 className="grid grid-cols-4 justify-end items-center text-xl text-yellow-400">
            <img src={star} alt="" className="w-2/3" /> 5.0
          </h1>
          <p className="text-lg">Rp.{mentor.tarif}/pertemuan</p>
          {IsloggedIn && (
            <Link
              to="/success"
              className="row-span-2 flex justify-center p-2 rounded text-white bg-blue-500 hover:bg-blue-400 transition duration-500"
            >
              Pesan Sekarang
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mentor;
