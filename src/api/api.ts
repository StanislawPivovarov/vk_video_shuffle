import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

axios.defaults.withCredentials = true;

const headers = {
 "Content-Type": "application/json",
 Charset: "utf-8",
};

const instance = axios.create({
 withCredentials: true,
 baseURL: BASE_URL + "/api/",
 headers,
});


const playlistApi = {

};