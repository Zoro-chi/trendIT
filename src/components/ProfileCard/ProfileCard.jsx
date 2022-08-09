import React from "react";

import "./ProfileCard.css";
import profilebanner from "../../images/profilebanner.jpg";
import profilepic from "../../images/profilepic.jpg";

function ProfileCard() {
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={profilebanner} alt="profile banner" />
        <img src={profilepic} alt="profile" />
      </div>

      <div className="profilename">
        <span> Brad M </span>
        <span> Smart Contract Developer </span>
      </div>

      <div className="followstatus">
        <hr />
        <div>
          <div className="follow">
            <span> 5000 </span>
            <span> Following </span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span> 300 </span>
            <span> Followers </span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
}

export default ProfileCard;
