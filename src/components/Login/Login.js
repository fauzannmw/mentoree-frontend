import React from "react";
import "./Login.scss";
import mentorImage from "../../assets/image/mentor-login.svg";
import menteeImage from "../../assets/image/mentee-login.svg";

const Login = () => {
  return (
    <div className="login flex justify-center md:p-24">
      <div className="grid grid-cols-2 px-6 py-12 space-x-12 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300">
        <img src={mentorImage} alt="" />
        <div className="flex flex-col items-center justify-between">
          <div className="title">
            <h1 className="text-4xl">Masuk Sebagai Mentor</h1>
            <h5 className="text-xl">
              Silahkan isi data-data dibawah dengan benar.
            </h5>
          </div>
          <div className="form"></div>

          <button className="flex justify-center w-5/6 p-2.5 rounded-xl text-white text-2xl font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-500">
            Masuk
          </button>
        </div>
      </div>
      {/* <div className="px-6 py-12">
        <h5>Belum</h5>
      </div> */}
    </div>
  );
};

export default Login;
