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

export const uploadImage = (data) => API.post("/api/upload", data);

export const uploadPost = (data) => API.post("/api/post", data);
