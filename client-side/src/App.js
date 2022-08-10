import { Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Auth from "./Pages/Auth/Auth.jsx";

function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="app">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Homepage /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
