import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import illustrationAboutUs from "../../assets/illustration/illustration_about_us_1.svg";
import illustrationSuccess from "../../assets/illustration/illustration_landing_page_2.svg";

const Content = (props) => {
  return (
    <div className="content md:py-24">
      {props.page === "success" ? (
        <div className="grid md:grid-cols-3">
          <div className="hidden xl:flex grid justify-start">
            <img src={illustrationSuccess} alt="" />
          </div>
          <div className="md:p-40 md:w-5/6 col-span-2">
            <h1 className="title">Selamat Pembayaran Anda Berhasil</h1>
            <h5 className="subtitle md:py-4">
              Silahkan menghubungi Mentor melalui kontak yang telah kami berikan
              pada email anda, terimakasih telah menggunakan layanan kami.
              Hubungi kami di +62123456789 untuk pertanyaan lebih lanjut.
            </h5>
            <Link
              to=""
              className="flex justify-center p-2.5 rounded text-white bg-yellow-400 hover:bg-yellow-500 transition duration-500"
            >
              Kembali ke halaman Home
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3">
          <div className="hidden xl:flex grid justify-start">
            <img src={illustrationAboutUs} alt="" />
          </div>
          <div className="md:p-40 md:w-5/6 col-span-2">
            <h1 className="title">Our Mission</h1>
            <h5 className="subtitle md:py-4">
              Mentoree memiliki misi untuk memfasilitasi akses pembelajaran
              kepada para mentee dalam hal pendidikan dan persiapan karir,
              meningkatkan partisipasi aktif para mentor dalam perkembangan
              pendidikan Indonesia, dan memotivasi mentee di Indonesia dengan
              adanya interaksi oleh mentor berpengalaman. Kami percaya bahwa
              pendidikan dan pengajaran merupakan hak setiap individu demi
              mendapatkan masa depan yang lebih baik. Maka dari itu, Mentoree
              hadir sebagai sarana untuk mempertemukan mentee dengan mentor yang
              berkualitas dengan biaya yang terjangkau.
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
