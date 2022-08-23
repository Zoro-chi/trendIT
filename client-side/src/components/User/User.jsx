import React, { useState } from "react";
import { FaPrescription } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import { followUser, unFollowUser } from "../../Actions/userAction";
import followerspfp from "../../images/followerspfp.png"


const User = ({ person, id }) => {
  let publicFolder
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );

  if (process.env.NODE_ENV == "production") {
    publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_PROD
  } else {
    publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_DEV
  }

  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

  return (
    <div key={id} className="follower">
      <div style={{ cursor: "pointer" }}>
        <Link to={`/profile/${person._id}`} style={{ textDecoration: "none", color: "inherit",  }}>
          <img
            src={
              // FaPrescription.coverPicture
              //   ? publicFolder + "/" + person.profilePicture
              //   : publicFolder + "/" + "defaultPfp.png"
              followerspfp
            }
            alt=""
            className="followerImg"
          />
        </Link>  
          <div className="name">
            <span> {person.firstname} </span>
            <span> {person.username} </span>
          </div>
      </div>
      
      <button
        className={
          following
            ? "button followButton unfollowButton"
            : "button followButton"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
