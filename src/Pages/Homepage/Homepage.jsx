import React from "react";

import "./Homepage.css";
import Profileside from "../../components/Profileside/Profileside.jsx";
import PostSide from "../../components/PostSide/PostSide.jsx";

const Homepage = () => {
  return (
    <div className="home">
      <Profileside />
      <PostSide />
      <div className="rightside">Right side</div>
    </div>
  );
};

export default Homepage;
