import axios from "axios";

const getBaseUrl = () => {
  let url 
  switch (process.env.NODE_ENV) {
    case "production":
      url = "https://trenddit.herokuapp.com"
      break;
    
    case "development":
      default:
      url = "http://localhost:5000" 
  }
  return url 
}

const API = axios.create({
  baseURL: getBaseUrl(),
});

export const getTimelinePosts = (id) => API.get(`/api/post/${id}/timeline`);

export const likePost = (id, userId) =>
  API.put(`/api/post/${id}/like`, { userId: userId });
