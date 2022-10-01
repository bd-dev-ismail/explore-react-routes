import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { id, title, body, userId } = postDetails;
    const navigate = useNavigate();
    const handalAuthor = () =>{
        navigate(`/friend/${userId}`);
    }
    return (
        <div>
            <h1>Details about Post: {id}</h1>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
            <button onClick={handalAuthor}>Get The Author</button>
        </div>
    );
};

export default PostDetails;