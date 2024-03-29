import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Content from "../components/Hero/Content";
import { MENTOR_GET_DETAIL } from "../api";

const Success = () => {
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
    <div>
      <Content page="success" email={mentor.email} />
    </div>
  );
};

export default Success;
