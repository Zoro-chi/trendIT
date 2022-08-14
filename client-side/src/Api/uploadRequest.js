import axios from "axios";

const API = axios.create({
  baseURL: "https://trenddit.herokuapp.com/" || "http://localhost:5000",
});

export const uploadImage = (data) => API.post("/api/upload", data);

export const uploadPost = (data) => API.post("/api/post", data);
