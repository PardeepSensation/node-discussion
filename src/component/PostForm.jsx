// PostForm.js
import React, { useState } from 'react';
import './PostForm.css'

const PostForm = ({ createPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
    };
    createPost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder='Description'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostForm;