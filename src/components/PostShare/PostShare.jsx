import React from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoCalendar } from "react-icons/go";

import "./PostShare.css";
import profilepic from "../../images/profilepic.jpg";

function PostShare() {
  return (
    <div className="postshare">
      <img src={profilepic} alt="" />
      <div>
        <input type="text" placeholder="What's up?" />
      </div>
      <div className="postOptions">
        <div className="option">
          <HiOutlinePhotograph />
          Photo
        </div>
        <div className="option">
          <MdSlowMotionVideo />
          Video
        </div>
        <div className="option">
          <MdOutlineLocationOn />
          Location
        </div>
        <div className="option">
          <GoCalendar />
          Schedule
        </div>
      </div>
    </div>
  );
}

export default PostShare;
