import React from "react";

import "./Post.css";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FaShare } from "react-icons/fa";

function Post(props) {
  const { data } = props;

  return (
    <div className="post">
      <img src={data.img} alt="" />

      <div className="postReact">
        <div className="like">
          {data.liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
        <div className="comment">
          <BiCommentDetail />
        </div>
        <div className="share">
          <FaShare />
        </div>
      </div>

      <span style={{ color: "gray" }}>{data.likes} Likes</span>

      <div className="description">
        <span> {data.name} </span>
        <span> {data.desc} </span>
      </div>
    </div>
  );
}

export default Post;
