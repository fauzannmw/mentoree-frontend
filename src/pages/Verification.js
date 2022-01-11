import React, { useState } from "react";
import { MENTEE_VERIFIKASI } from "../api";

const Verification = () => {
  const [kode, setKode] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const req = await MENTEE_VERIFIKASI(kode);
    const token = req.data.data.token;
    localStorage.setItem("token", token);
    window.location.href = "/";
  }

  return (
    <div className="grid place-content-center py-32">
      <div className="grid gap-2 p-12 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-500">
        <p className="text-lg font-semibold">
          Masukkan kode verifikasi yang telah dikirimkan ke email anda
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
          type="button"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Verification;
