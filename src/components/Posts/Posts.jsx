import React from "react";

import "./Posts.css";
import postsData from "../../Data/postsData.js";
import Post from "../Post/Post.jsx";

function Posts(props) {
  return (
    <div className="posts">
      {postsData.map((post, id) => {
        return <Post key={id} data={post} />;
      })}
    </div>
  );
}

export default Posts;
