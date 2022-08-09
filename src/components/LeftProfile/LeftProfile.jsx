import React from "react";

import SearchLogo from "../SearchLogo/SearchLogo.jsx";
import FollowersCard from "../FollowersCard/FollowersCard.jsx";
import InfoCard from "../InfoCard/InfoCard.jsx";

function LeftProfile() {
  return (
    <div className="profileside">
      <SearchLogo />
      <InfoCard />
      <FollowersCard />
    </div>
  );
}

export default LeftProfile;
