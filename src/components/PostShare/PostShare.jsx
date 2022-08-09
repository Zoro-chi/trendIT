import React, { useState, useRef } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { FaTimes } from "react-icons/fa";

import "./PostShare.css";
import profilepic from "../../images/profilepic.jpg";

function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="postshare">
      <img src={profilepic} alt="" />
      <div>
        <input type="text" placeholder="What's up?" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "dodgerBlue" }}
            onClick={() => imageRef.current.click()}
          >
            <HiOutlinePhotograph style={{ height: "20px", width: "20px" }} />
            Photo
          </div>
          <div className="option" style={{ color: "darkMagenta" }}>
            <MdSlowMotionVideo style={{ height: "20px", width: "20px" }} />
            Video
          </div>
          <div className="option" style={{ color: "green" }}>
            <MdOutlineLocationOn style={{ height: "20px", width: "20px" }} />
            Location
          </div>
          <div className="option" style={{ color: "darkGoldenrod" }}>
            <GoCalendar style={{ height: "20px", width: "20px" }} />
            Schedule
          </div>
          <button className="button psButton">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <FaTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
