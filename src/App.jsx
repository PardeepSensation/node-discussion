import React, { useState, useEffect } from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";

const App = () => {
  const [posts, setPosts] = useState([]);

  const createPost = async (newPost) => {
    try {
      setPosts([...posts, { ...newPost, id: posts.length }]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const updatePost = async (postId, updatedPost) => {
    try {
      const updatedPosts = posts.map((post) =>
        post.id === postId ? updatedPost : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div style={{ display: "grid", placeItems: "center", width: "100%" }}>
      <h1>CRUD Operations App</h1>
      <div style={{ display: "flex", justifyContent: 'space-around', width: '70%' }}>
        <PostForm createPost={createPost} />
        <PostList
          posts={posts}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      </div>
    </div>
  );
};

export default App;
