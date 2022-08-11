import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./Posts.css";
import Post from "../Post/Post.jsx";
import { getTimelinePosts } from "../../Actions/postAction";

function Posts(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return "No posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);

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
