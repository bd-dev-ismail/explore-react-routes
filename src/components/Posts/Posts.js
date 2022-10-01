import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
      <div>
        <h3>A lost of Post</h3>
        {posts.map((post) => (
          <Post post={post} key={post.id}></Post>
        ))}
      </div>
    );
};

export default Posts;