import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {title, body, id} = post;
    const navigate = useNavigate();
    const handalNavigate = ()=>{
        navigate(`/post/${id}`);
    }
    return (
      <div className="post">
        <h3>Title: {title}</h3>
        <p>Description: {body}</p>
        <Link to={`/post/${id}`}>Visit {id}</Link>
        <Link to={`/post/${id}`}>
          <button>Show Details</button>
        </Link>
        <button onClick={handalNavigate}>Show Details 2</button>
      </div>
    );
};

export default Post;