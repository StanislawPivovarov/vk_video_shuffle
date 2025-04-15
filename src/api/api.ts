import axios from "axios";

export const BASE_URL = 'https://api.vk.com/method/video.get'

axios.defaults.withCredentials = true;

const headers = {
 "Content-Type": "application/json",
 Charset: "utf-8",
};

const instance = axios.create({
 withCredentials: true,
 baseURL: BASE_URL,
 headers,
});


const playlistApi = {
 getPlaylist(id: number, playlist_id: number, access_token: any) {
  return instance.post(BASE_URL, {id, playlist_id, access_token})
  .then((res) => {
   return res.data
  })
 },
 getMyPlaylist(playlist_id: number, access_token: any) {
  return instance.post(BASE_URL, {playlist_id, access_token})
  .then((res) => {
   return res.data
  })
 }
};

export default playlistApi