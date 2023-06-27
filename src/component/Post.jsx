// Post.js
import React, { useState } from 'react';

const Post = ({ post, updatePost, deletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedContent, setUpdatedContent] = useState(post.content);

  const handleUpdate = () => {
    const updatedPost = {
      id: post.id,
      title: updatedTitle,
      content: updatedContent,
    };
    updatePost(post.id, updatedPost);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div style={{ width: "50%", marginLeft: '50px'}}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Post;
