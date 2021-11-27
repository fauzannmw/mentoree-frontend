import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const MENTEE_REGISTER = (fname, lname, email, password, status) =>
  axios.post(BASE_URL + "/mentee/register", {
    nama_depan: fname,
    nama_belakang: lname,
    email: email,
    password: password,
    status: status,
  });

export const MENTEE_LOGIN = (email, password) =>
  axios.post(BASE_URL + "/mentee/login", {
    email: email,
    password: password,
  });

export const MENTOR_LOGIN = (email, password) =>
  axios.post(BASE_URL + "/mentor/login", {
    email: email,
    password: password,
  });

export const MENTEE_GET_USER = (userId) =>
  axios.get(BASE_URL + "/users/" + userId);
