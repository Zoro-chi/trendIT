import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./Posts.css";
import Post from "../Post/Post.jsx";
import { getTimelinePosts } from "../../Actions/postAction.js";
// import { getTimelinePosts as gt } from "../../Api/postRequest.js";

function Posts(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams();

  // const fetchPosts = async () => {
  //   let post = gt(user._id);
  //   post = await post;
  //   return post;
  // };

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return "No posts";
  if (params.id) {
    posts = posts.filter((post) => post.userId === params.id);
  }

  // console.log(posts);

  return (
    <div className="posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post key={id} data={post} />;
          })}
    </div>
  );
}

export default Posts;
