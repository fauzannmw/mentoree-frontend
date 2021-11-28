import React from "react";
import "./Hero.scss";
import illustrationAboutUs from "../../assets/illustration/illustration_about_us_1.svg";
import illustrationLandingPage from "../../assets/illustration/illustration_landing_page_2.svg";

const Content = () => {
  return (
    <div className="content md:py-24">
      <div className="grid md:grid-cols-3">
        <div className="hidden xl:flex grid justify-start">
          <img src={illustrationAboutUs} alt="" />
        </div>
        <div className="md:p-40 md:w-5/6 col-span-2">
          <h1 className="title">Our Mission</h1>
          <h5 className="subtitle md:py-4">
            Mentoree memiliki misi untuk memfasilitasi akses pembelajaran kepada
            para mentee dalam hal pendidikan dan persiapan karir, meningkatkan
            partisipasi aktif para mentor dalam perkembangan pendidikan
            Indonesia, dan memotivasi mentee di Indonesia dengan adanya
            interaksi oleh mentor berpengalaman. Kami percaya bahwa pendidikan
            dan pengajaran merupakan hak setiap individu demi mendapatkan masa
            depan yang lebih baik. Maka dari itu, Mentoree hadir sebagai sarana
            untuk mempertemukan mentee dengan mentor yang berkualitas dengan
            biaya yang terjangkau.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Content;
