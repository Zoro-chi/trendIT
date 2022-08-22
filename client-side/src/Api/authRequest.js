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

export const logIn = (formData) => API.post("/api/auth/login", formData);
export const signUp = (formData) => API.post("/api/auth/register", formData);
