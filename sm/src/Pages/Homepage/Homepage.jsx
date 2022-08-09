import React from "react";

import "./Homepage.css";
import Profileside from "../../components/Profileside/Profileside.jsx";
import PostSide from "../../components/PostSide/PostSide.jsx";
import RightSide from "../../components/RightSide/RightSide.jsx";

const Homepage = () => {
  return (
    <div className="home">
      <Profileside />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Homepage;
