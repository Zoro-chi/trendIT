import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./ProfileCard.css";
import { getTimelinePosts as gt } from "../../Api/postRequest.js";
import defaultCover from "../../images/defaultCover.jpg"
import defaultPfp from "../../images/defaultPfp.jpg"

function ProfileCard({ location }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const [dbPosts, setDbPosts] = useState([]);
  let publicFolder;

  const fetchPosts = async () => {
    let post = gt(user._id);
    post = await post;
    return post;
  };

  useEffect(() => {
    const post = async () => {
      let post = fetchPosts();
      post = await post;
      setDbPosts(post.data);
    };
    post();
  }, [posts]);

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img
          src={defaultCover}
          alt="profile banner"
        />
        <img
          src={
            // user.coverPicture
            //   ? publicFolder + "/" + user.profilePicture
            //   : publicFolder + "/" + "defaultPfp.jpg"
            defaultPfp
          } 
          alt="profile"
        />
      </div>

      <div className="profilename">
        <span>
          {user.firstname} {user.lastname}
        </span>
        <span> {user.worksAt ? user.worksAt : "Tell us more about you"} </span>
      </div>

      <div className="followstatus">
        <hr />
        <div>
          <div className="follow">
            <span> {user.following.length} </span>
            <span> Following </span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span> {user.followers.length} </span>
            <span> Followers </span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {dbPosts.filter((post) => post.userId === user._id).length}
                </span>
                <span> Posts </span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
}

export default ProfileCard;
