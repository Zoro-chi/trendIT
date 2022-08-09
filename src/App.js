import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Auth from "./Pages/Auth/Auth.jsx";

function App() {
  return (
    <div className="app">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Homepage /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
