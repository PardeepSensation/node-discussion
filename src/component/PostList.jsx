// PostList.js
import React from 'react';
import Post from './Post';

const PostList = ({ posts, updatePost, deletePost }) => {
  return (
    <div>
      <h2>Post List</h2>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
};

export default PostList;
