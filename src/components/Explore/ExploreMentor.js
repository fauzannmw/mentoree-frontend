import React, { useState, useEffect, useLoca } from "react";
import "./Explore.scss";
import { Link } from "react-router-dom";
// import mentorImage from "../../assets/image/mentor-image-1.png";
import mentorImage from "../../assets/image/mentor-image-1.jpeg";
import { MENTOR_GET_ALL, CATEGORY_GET_MENTOR } from "../../api";

const ExploreMentor = () => {
  const [category, setCategory] = useState("");
  const [mentors, setMentor] = useState([]);
  const [mentorsId, setMentorId] = useState();

  let IDR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });

  const getAllMentor = async () => {
    const req = await MENTOR_GET_ALL();
    console.log(req.data);
    setMentor(req.data.data);
    setMentorId(req.data.data.id_mentor);
    // setMentorId(req.data.data.id);
  };

  const getMentorByCategory = async () => {
    const req = await CATEGORY_GET_MENTOR(category);
    console.log(req.data);
    console.log(req.message);
    setMentor(req.data.data);
  };

  useEffect(() => {
    getAllMentor();
  }, []);

  useEffect(() => {
    getMentorByCategory();
  }, [category]);

  return (
    <div className="explore grid place-content-center gap-12">
      <div className="title grid gap-4 text-center ">
        <h1 className="text-4xl">Kategori</h1>
        <div className="flex flex-col justify-self-center">
          <select
            id="bidang"
            name="bidang"
            value={category}
            onChange={(e) => setCategory(parseInt(e.target.value))}
            className="flex rounded-md bg-white text-gray-800 border border-transparent"
          >
            <option value="" disabled>
              Pilih Kategori Subjek Untuk Mentor  
            </option>
            <option value="1">UI UX</option>
            <option value="2">Software Engineer</option>
            <option value="3">Cyber Security</option>
            <option value="4">Data Science</option>
            <option value="5">Bussines Analyst</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 place-items-center">
        {mentors &&
          mentors.map((mentor) => (
            <Link
              to={`/mentor-detail/${mentor.id_mentor}`}
              className=" md:w-60 h-full md:h-full p-2 capitalize bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500"
            >
              <img
                src={mentorImage}
                alt=""
                className="object-cover rounded-xl"
              />
              <div className="p-2">
                <h2 className="font-bold text-lg">{mentor.nama}</h2>
                <p className="text-sm text-gray-600">{mentor.deskripsi}</p>
                <p className="font-bold text-sm text-red-400">
                  {IDR.format(mentor.tarif)}/pertemuan
                </p>
                {/* <p className="text-sm text-gray-600">{mentor.latar_belakang}</p> */}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ExploreMentor;
