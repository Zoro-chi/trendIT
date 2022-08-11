import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./ProfileCard.css";

function ProfileCard({ location }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt="profile banner"
        />
        <img
          src={
            user.coverPicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultPfp.jpg"
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
                  {" "}
                  {posts.filter((post) => post.userId === user._id).length}{" "}
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