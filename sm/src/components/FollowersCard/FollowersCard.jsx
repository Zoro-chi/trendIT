import React from "react";

import "./FollowersCard.css";
import followers from "../../Data/followersData.js";

function FollowersCard() {
  return (
    <div className="followersCard">
      <h3> Who is following you </h3>

      {followers.map((follower, index) => {
        return (
          <div key={index} className="follower">
            <div>
              <img src={follower.img} alt="" className="followerImg" />
              <div className="name">
                <span> {follower.name} </span>
                <span> @{follower.username} </span>
              </div>
            </div>
            <button className="button followButton">Follow</button>
          </div>
        );
      })}
    </div>
  );
}

export default FollowersCard;
