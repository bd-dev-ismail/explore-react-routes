import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetils = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>Details About {friend.name}</h1>
            <p>Call him/her {friend.phone}</p>
            <h2>Every think you need to know about this person..</h2>
        </div>
    );
};

export default FriendDetils;