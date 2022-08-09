import React from "react";

import "./Profile.css";
import LeftProfile from "../../components/LeftProfile/LeftProfile.jsx";
import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
import PostSide from "../../components/PostSide/PostSide.jsx";
import RightSide from "../../components/RightSide/RightSide.jsx";

function Profile() {
  return (
    <div className="profile">
      <LeftProfile />

      <div className="profileCenter">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
}

export default Profile;
