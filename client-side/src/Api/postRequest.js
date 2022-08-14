import axios from "axios";

const API = axios.create({
  baseURL: "https://trenddit.herokuapp.com/" || "http://localhost:5000",
});

export const getTimelinePosts = (id) => API.get(`/api/posts/${id}/timeline`);

export const likePost = (id, userId) =>
  API.put(`/api/post/${id}/like`, { userId: userId });
