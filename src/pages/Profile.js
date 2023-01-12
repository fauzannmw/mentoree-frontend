import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Mentor.scss";
import profileImage from "../assets/image/mentor-image-1.jpeg";
import { MENTOR_GET_DETAIL, MENTEE_GET_DETAIL, MENTEE_GET_ALL } from "../api";

const Profile = () => {
  const [mentor, setMentor] = useState({});
  const [mentee, setMentee] = useState({});
  const [IsloggedIn, setIsLoggedIn] = useState(false);
  // const id = localStorage.getItem("id");
  var id = "";

  if (localStorage.getItem("id_mentor")) {
    id = localStorage.getItem("id_mentor");
  } else {
    id = localStorage.getItem("id_mentee") - 1;
    console.log(id);
  }

  const getMentorDetail = async () => {
    const req = await MENTOR_GET_DETAIL(id);
    console.log(req.data.data[0]);
    setMentor(req.data.data[0]);
  };

  // const getMenteeDetail = async () => {
  //   const req = await MENTEE_GET_DETAIL(id);
  //   console.log(req.data.data[0]);
  //   setMentee(req.data.data[0]);
  // };

  const getMenteeDetail = async () => {
    const req = await MENTEE_GET_ALL();
    console.log(req.data.data[id]);
    setMentee(req.data.data[0]);
  };

  useEffect(() => {
    if (localStorage.getItem("id_mentor")) {
      getMentorDetail();
    } else {
      getMenteeDetail();
    }
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
          <div className="title text-lg">
            <div className="grid grid-cols-8 gap-5 md:gap-14">
              <h6 className="col-span-2 text-gray-500">Nama</h6>
              <p className="col-span-6">
                {mentor.nama}
                {mentee.nama}
              </p>
            </div>
            <div className="grid grid-cols-8 gap-5 md:gap-14">
              <h6 className="col-span-2 text-gray-500">Email</h6>
              <p className="col-span-6">
                {mentor.email}
                {mentee.email}
              </p>
            </div>
            <div className="grid grid-cols-8 gap-5 md:gap-14">
              <h6 className="col-span-2 text-gray-500">Pekerjaan</h6>
              <p className="col-span-6">
                {mentor.deskripsi}
                {mentee.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
