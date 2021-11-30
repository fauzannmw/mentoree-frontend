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

export const MENTOR_REGISTER = (
  fname,
  lname,
  email,
  password,
  alamat,
  pekerjaan,
  bidang,
  about,
  rate,
  pendidikan
) =>
  axios.post(BASE_URL + "/mentor/register", {
    nama_depan: fname,
    nama_belakang: lname,
    email: email,
    password: password,
    alamat: alamat,
    pekerjaan: pekerjaan,
    id_bidang: bidang,
    latar_belakang: about,
    tarif: rate,
    pendidikan: pendidikan,
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

export const CATEGORY_GET_ALL = () => axios.get(BASE_URL + "/bidang");

export const CATEGORY_GET_MENTOR = (categoryId) =>
  axios.get(BASE_URL + "/bidang/mentor/" + categoryId);

export const MENTOR_GET_ALL = () => 
  axios.get(BASE_URL + "/mentor");

export const MENTOR_GET_DETAIL = (userId) =>
  axios.get(BASE_URL + "/mentor/" + userId);

export const MENTEE_GET_USER = (userId) =>
  axios.get(BASE_URL + "/users" + userId);
