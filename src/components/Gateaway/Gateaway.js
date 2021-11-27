import React from "react";
import mentorImage from "../../assets/image/mentor-login.svg";
import menteeImage from "../../assets/image/mentee-login.svg";
import { Link } from "react-router-dom";

const Gateaway = (props) => {
  return (
    <div className="gateaway flex items-center justify-center py-8 md:py-24">
      <div className="grid grid-cols-2 md:gap-4">
        <div className="flex flex-col justify-between bg-white shadow-md hover:shadow-2xl m-2 md:m-8 py-8 space-y-8 rounded-2xl hover:bg-gray-50 transition duration-300">
          <img className="md:py-8" src={mentorImage} alt="" />
          <Link
            className="flex justify-center w-full"
            to={`${props.destination}-mentor`}
          >
            <button className="md:w-3/4 px-4 py-2 md:p-4 rounded-lg md:rounded-full text-xs md:text-xl font-semibold text-white hover:text-gray-100 bg-yellow-400 hover:bg-yellow-500 transition duration-500">
              {props.action} Sebagai Mentor
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-between bg-white shadow-md hover:shadow-2xl m-2 md:m-8 py-8 space-y-8 rounded-2xl hover:bg-gray-50 transition duration-300">
          <img className="" src={menteeImage} alt="" />
          <Link
            className="flex justify-center w-full"
            to={`${props.destination}-mentee`}
          >
            <button className="md:w-3/4 px-4 py-2 md:p-4 rounded-lg md:rounded-full text-xs md:text-xl font-semibold text-white hover:text-gray-100 bg-yellow-400 hover:bg-yellow-500 transition duration-500">
              {props.action} Sebagai Mentee
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gateaway;
