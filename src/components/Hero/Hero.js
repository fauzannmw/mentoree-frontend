import React, { useEffect, useState } from "react";
import "./Hero.scss";
import illustrationHomepage from "../../assets/illustration/illustration_landing_page_1.svg";
import illustrationExplore from "../../assets/illustration/illustration_explore_1.svg";
// import { MENTEE_GET_USER } from "../../api";

const Hero = (props) => {
  //   const [desc, setDesc] = useState("");
  //   const getUser = async () => {
  //     const req = await MENTOR_GET_USER(1);
  //     console.log(req.data);
  //     setDesc(req.data.data.alamat);
  //   };
  //   useEffect(() => {
  //     getUser();
  //   }, []);

  return (
    <div className="hero md:py-24">
      {props.page === "homepage" ? (
        <div className="grid md:grid-cols-2">
          <div className="md:p-48">
            <h1 className="title">Temukan mentor yang berpengalaman</h1>
            <h5 className="subtitle">
              Mentor adalah orang yang memiliki kebijaksanaan dan ini merupakan
              kombinasi dari pengetahuan dan pengalaman yang dimiliki. Mereka
              adalah seseorang yang berada di suatu bidang dan berhasil pada apa
              yang telah mereka lakukan.
            </h5>
          </div>
          <div className="hidden xl:flex grid justify-end">
            <img src={illustrationHomepage} alt="" />
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2">
          <div className="md:p-48">
            <h1 className="title">Cari Mentor</h1>
            <h5 className="subtitle">
              Pilih kategori subjek, lalu pilih mentor yang sudah tersedia di
              bawah ini. Pastikan pilih mentor yang sesuai dengan kriteria kamu.
            </h5>
          </div>
          <div className="hidden xl:flex grid justify-end">
            <img src={illustrationExplore} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
