import React from "react";
import "./Hero.scss";
import illustration from "../../assets/illustration/illustration_landing_page_1.svg";

const Hero = () => {
  return (
    <div className="hero md:py-24">
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
          <img src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
