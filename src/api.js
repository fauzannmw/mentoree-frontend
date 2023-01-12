import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const MENTEE_REGISTER = (name, email, password, status) =>
  axios
    .post(BASE_URL + "/mentee/register", {
      nama: name,
      email: email,
      password: password,
      status: status,
    })
    .catch((error) => {
      return error.response;
    });

export const MENTOR_REGISTER = (
  nama,
  email,
  password,
  alamat,
  deskripsi,
  bidang,
  about,
  rate,
  pendidikan
) =>
  axios.post(BASE_URL + "/mentor/register", {
    nama: nama,
    email: email,
    password: password,
    alamat: alamat,
    deskripsi: deskripsi,
    id_subject: bidang,
    background: about,
    tarif: rate,
    pendidikan: pendidikan,
  });

export const MENTEE_VERIFIKASI = (kode, tokenLama) =>
  axios
    .create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${tokenLama}`,
      },
    })
    .post("/mentee/register/kode", {
      kode: kode,
    })
    .catch((error) => {
      return error.response;
    });

// axios.post(BASE_URL + "/mentee/register/kode", {
//   kode: kode,
// });

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

export const CATEGORY_GET_ALL = () => axios.get(BASE_URL + "/subject");

export const CATEGORY_GET_MENTOR = (categoryId) =>
  axios.get(BASE_URL + "/subject/mentor/" + categoryId);

export const MENTOR_GET_ALL = () => axios.get(BASE_URL + "/mentor");

export const MENTOR_GET_DETAIL = (userId) =>
  axios.get(BASE_URL + "/mentor/" + userId);

export const MENTEE_GET_ALL = () => axios.get(BASE_URL + "/mentee");

export const MENTEE_GET_DETAIL = (userId) =>
  axios.get(BASE_URL + "/mentee/" + userId);
