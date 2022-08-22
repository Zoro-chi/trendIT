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

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${JSON.parse(
//       localStorage.getItem("profile").token
//     )}`;
//   }
//   return req;
// });

export const getUser = (userId) => API.get(`/api/user/${userId}`);

export const updateUser = (id, formData) =>
  API.put(`/api/user/${id}`, formData);

export const getAllUsers = () => API.get(`/api/user`);

export const followUser = (id, data) => API.put(`/api/user/${id}/follow`, data);

export const unFollowUser = (id, data) =>
  API.put(`/api/user/${id}/unfollow`, data);
