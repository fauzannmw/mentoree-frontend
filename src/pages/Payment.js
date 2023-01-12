import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MENTOR_GET_DETAIL } from "../api";

const Payment = () => {
  const [mentor, setMentor] = useState({});
  const { id } = useParams();
  const [IsloggedIn, setIsLoggedIn] = useState(false);

  let IDR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });

  const getMentorDetail = async () => {
    const req = await MENTOR_GET_DETAIL(id);
    console.log(req.data.data[0]);
    setMentor(req.data.data[0]);
  };

  useEffect(() => {
    getMentorDetail();
  }, []);

  useEffect(() => {
    const checkLocalStorage = () => {
      if (localStorage.getItem("token") === null) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };
    window.addEventListener("storage", checkLocalStorage);
    checkLocalStorage();
  }, []);

  return (
    <div className="grid place-content-center h-screen content-center space-y-3">
      <div className="description">
        <h1 className="title ">Unggah Bukti Pembayaran</h1>
      </div>
      <ul className="subtitle">
        <li className="text-xl">Bank BCA - 5221 4909 7845 1089</li>
        <li className="text-xl">Bank BNI - 5221 4909 7845 1089</li>
        <li className="text-xl">Bank Mandiri - 5221 4909 7845 1089</li>
      </ul>
      {IsloggedIn && (
        <>
          <a
            href={`https://wa.me/62895606819311?text=Halo, Saya ingin melakukan konfirmasi pembayaran Mentoree,dengan :\n
            Nama Mentor : ${mentor.nama}\n
            Besar Tarif : ${IDR.format(mentor.tarif)}\n
            Dengan bukti pembayaran sebagai berikut :\n 
            [silahkan masukkan bukti pembayaran di sini]`}
            target={"_blank"}
            className="row-span-2 flex justify-center p-2 rounded text-white bg-blue-500 hover:bg-blue-400 transition duration-500"
          >
            Kirim Bukti Pembayaran
          </a>
          <Link
            to={`/paymentCode/${mentor.id_mentor}`}
            className="row-span-2 flex justify-center p-2 rounded text-white bg-blue-500 hover:bg-blue-400 transition duration-500"
          >
            Konfirmasi Token Mentor
          </Link>
        </>
      )}
    </div>
  );
};

export default Payment;
