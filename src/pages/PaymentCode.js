import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MENTOR_GET_DETAIL } from "../api";

const PaymentCode = () => {
  const [mentor, setMentor] = useState({});
  const [kode, setKode] = useState("");
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

  async function onSubmit(e) {
    e.preventDefault();
    if (kode == "5628338") {
      window.location.href = `/success/${mentor.id_mentor}`;
    }
    else{
      alert("Kode yang dimasukkan salah");
    }
  }

  return (
    <div className="grid place-content-center py-32">
      {IsloggedIn && (
        <form
          onSubmit={onSubmit}
          className="grid gap-2 p-12 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-500"
        >
          <p className="text-lg font-semibold">
            Masukkan kode verifikasi yang telah diberikan admin Mentoree
          </p>
          <input
            type="number"
            value={kode}
            onChange={(e) => setKode(e.target.value)}
            className="flex p-1.5 w-2/3 rounded-md justify-self-center bg-white text-gray-800  border border-gray-500"
            required
          />
          <button
            className="row-span-1 flex justify-center w-2/3 p-1 justify-self-center rounded-lg text-white text-xl font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-500"
            type="submit"
          >
            Submit Kode
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentCode;
