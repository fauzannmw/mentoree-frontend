import React, { useState, useEffect } from "react";
import "./Explore.scss";
import { Link } from "react-router-dom";
import mentorImage from "../../assets/image/mentor-image-1.png";
import { MENTOR_GET_ALL, CATEGORY_GET_ALL } from "../../api";

const ExploreMentor = () => {
  const [category, setCategory] = useState([]);
  const [mentors, setMentor] = useState([]);
  // const getAllCategory = async () => {
  //   const req = await CATEGORY_GET_ALL();
  //   console.log(req.data);
  //   setCategory(req.data.data);
  // };

  const getMentorByCategory = async () => {
    const req = await MENTOR_GET_ALL();
    console.log(req.data);
  };

  const getAllMentor = async () => {
    const req = await MENTOR_GET_ALL();
    console.log(req.data);
    setMentor(req.data.data);
  };
  useEffect(() => {
    getAllMentor();
  }, []);

  return (
    <div className="explore grid place-content-center gap-12">
      <div className="title grid gap-4 text-center ">
        <h1 className="text-4xl">Kategori</h1>
        <div className="flex flex-col justify-self-center">
          <select
            id="bidang"
            name="bidang"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex rounded-md bg-white text-gray-800 border border-transparent"
          >
            <option value="" disabled>
              Pilih Kategori Subjek Untuk Mentor
            </option>
            <option value="1">Persiapan Karir</option>
            <option value="2">Pemrograman</option>
            <option value="3">Musik</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 place-items-center">
        {mentors &&
          mentors.map((mentor) => (
            <Link className=" md:w-60 md:h-80 p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              {/* <Link className=" md:w-60 md:h-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 "> */}
              <img
                src={mentorImage}
                alt=""
                className="object-cover rounded-xl"
              />
              <div className="p-2">
                <h2 className="font-bold text-lg">
                  {mentor.nama_depan} {mentor.nama_belakang}
                </h2>
                <p className="text-sm text-gray-600">{mentor.latarBelakang}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ExploreMentor;