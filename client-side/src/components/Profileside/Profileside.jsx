import React from "react";

import "./Profileside.css";
import SearchLogo from "../SearchLogo/SearchLogo.jsx";
import ProfileCard from "../ProfileCard/ProfileCard.jsx";
import FollowersCard from "../FollowersCard/FollowersCard.jsx";

function Profileside() {
  return (
    <div className="profileside">
      <SearchLogo />
      <ProfileCard location="homePage" />
      <FollowersCard />
    </div>
  );
}

export default Profileside;
