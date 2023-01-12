import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MENTOR_GET_DETAIL } from "../api";

const Payment = () => {
  const [mentor, setMentor] = useState({});
  const { id } = useParams();
  const [IsloggedIn, setIsLoggedIn] = useState(false);

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
      <div className="grid">
        <label htmlFor="payment-check">
          Silahkan Unggah Bukti transfer anda pada kolom di bawah.
        </label>
        <input type="file" name="payment-check" id="payment-check" />
      </div>
      {IsloggedIn && (
        <Link
          to={`/success/${mentor.id_mentor}`}
          className="row-span-2 flex justify-center p-2 rounded text-white bg-blue-500 hover:bg-blue-400 transition duration-500"
        >
          Pesan Sekarang
        </Link>
      )}
    </div>
  );
};

export default Payment;
