import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./Posts.css";
import Post from "../Post/Post.jsx";
import { getTimelinePosts } from "../../Actions/postAction.js";
import { getTimelinePosts as gt } from "../../Api/postRequest.js";

function Posts(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  let [dbPosts, setDbPosts] = useState([]);
  const params = useParams();

  const fetchPosts = async () => {
    let post = gt(user._id);
    post = await post;
    return post;
  };

  useEffect(() => {
    const post = async () => {
      let post = fetchPosts();
      post = await post;
      // console.log(post.data);
      setDbPosts(post.data);
    };
    post();
  }, [posts]);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!dbPosts) return "No posts";

  let userPosts = dbPosts.filter((post) => post.userId === params.id);

  return (
    // <div className="posts">
    //   {loading
    //     ? "Fetching Posts..."
    //     : posts.map((post, id) => {
    //         return <Post key={id} data={post} />;
    //       })}
    // </div>
    <div className="posts">
      {params.id
        ? userPosts.map((post, id) => {
            return <Post key={id} data={post} />;
          })
        : dbPosts.map((post, id) => {
            return <Post key={id} data={post} />;
          })}
    </div>
  );
}

export default Posts;
