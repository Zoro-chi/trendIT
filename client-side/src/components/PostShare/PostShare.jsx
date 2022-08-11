import React, { useState, useRef } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage, uploadPost } from "../../Actions/uploadActions.js";

import "./PostShare.css";
import profilepic from "../../images/profilepic.jpg";

function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const desc = useRef();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.postReducer.uploading);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    // THIS IS TO STORE MULTIMEDIA ON SERVER MEM AS MONGODB CANT
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };

  return (
    <div className="postshare">
      <img
        src={
          user.coverPicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultPfp.jpg"
        }
        alt=""
      />
      <div>
        <input ref={desc} type="text" placeholder="What's up?" required />
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
          <button
            className="button psButton"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>
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
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
