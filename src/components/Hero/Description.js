import React from "react";
import "./Hero.scss";

const Description = () => {
  return (
    <div className="description grid gap-4 justify-items-center md:pt-24 text-center ">
      <h1 className="title ">About Us</h1>
      <h5 className="subtitle md:w-2/3">
        Mentoree merupakan sebuah website yang bergerak pada bidang pendidikan
        dan persiapan karir. Website ini digunakan untuk menjembatani para
        mentee dan mentor yang memiliki kendalanya masing-masing. Kami
        memberikan layanan kepada para mentee yang membutuhkan mentor dan mentor
        yang ingin membagikan ilmu serta pengalamannya kepada mentee.
      </h5>
      <h5 className="subtitle md:w-2/3">
        Ide kami tercetus karena masing-masing dari kami, juga kebanyakan orang
        di luar sana, memiliki kesulitan yang sama, yaitu sulitnya mencari
        mentor yang sesuai. Oleh karena itu, kami memiliki tujuan untuk membantu
        mereka dalam hal mencari mentor yang memiliki pengalaman di bidangnya
        masing-masing.
      </h5>
    </div>
  );
};

export default Description;
