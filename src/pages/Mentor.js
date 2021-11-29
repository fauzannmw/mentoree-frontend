import React from "react";
import { useLocation } from "react-router-dom";
import "./Mentor.scss";
import profileImage from "../assets/image/profile-image-1.png";

const Mentor = () => {
  // function usePageViews() {
  //   let location = useLocation();
  //   React.useEffect(() => {
  //     ga.send(["pageview", location.pathname]);
  //   }, [location]);
  // }

  return (
    <div className="mentor py-24 px-48">
      <div className="grid grid-cols-7 gap-4 items-center bg-white p-12 rounded-xl shadow-lg hover:shadow-xl transition duration-500">
        <div className="col-span-1">
          <img src={profileImage} className="rounded-full" alt="" />
        </div>
        <div className="grid gap-3 col-span-5 md:w-1/3">
          <h1 className="title text-2xl">Gideon Bakri</h1>
          <div className="title text-lg">
            <div className="grid grid-cols-5">
              <p className="col-span-2 text-gray-400">Lokasi</p>
              <p className="col-span-3">Malang</p>
            </div>
            <div className="grid grid-cols-5">
              <p className="col-span-2 text-gray-400">Pekerjaan</p>
              <p className="col-span-3">Karyawan Swasta</p>
            </div>
            <div className="grid grid-cols-5">
              <p className="col-span-2 text-gray-400">Pendidikan</p>
              <p className="col-span-3">Universitas Brawijaya</p>
            </div>
          </div>
        </div>
        <div className="grid grid-row-3 col-span-1">
          <h1 className="grid justify-end">5.0</h1>
          <h1>adasda</h1>
          <h1>adasda</h1>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
