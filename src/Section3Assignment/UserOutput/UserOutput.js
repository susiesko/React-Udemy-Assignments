import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.content}</p>
        </div>
    );
};

export default userOutput;