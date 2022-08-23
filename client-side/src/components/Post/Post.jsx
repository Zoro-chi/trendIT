import React, { useState, useEffect } from "react";

import "./Post.css";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { useSelector } from "react-redux";
import { likePost } from "../../Api/postRequest";
import { getAllUsers } from "../../Api/userRequest.js";
import { getUser } from "../../Api/userRequest.js";
import followerspfp from "../../images/followerspfp.png"

function Post(props) {
  let publicFolder;
  const { data } = props;
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const [persons, setPersons] = useState([]);

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  
  const idToUsername = (id) => {
    let user = persons.filter(person => person._id == id)
    return user[0].username
  }

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  
  

  // if (process.env.NODE_ENV == "production") {
  //   publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_PROD
  // } else {
  //   publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_DEV
  // }
  
  return (
    <div className="post">

      <div className="poster">
        <img
            src={followerspfp}
            alt=""
            className="followerImg"
          />

          <div className="name">
            <span> {persons.length == 0 ? null : idToUsername(data.userId) } </span>
          </div>
      </div>

      <img
        src={
          data.image
            ? publicFolder + "/" + data.image
            : ""
        }
        alt=""
      />

      <div className="description">
        <span> {data.name} </span>
        <span> {data.desc} </span>
      </div>

      <div className="postReact">
        <div
          className="like"
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        >
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
        <div className="comment">
          <BiCommentDetail />
        </div>
        <div className="share">
          <FaShare />
        </div>
      </div>

      <span style={{ color: "gray" }}>{likes} Likes</span>

    </div>
  );
}

export default Post;
