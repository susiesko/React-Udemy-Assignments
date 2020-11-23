import React from 'react';
import '';

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.inputChanged}/>
        </div>
    );
};

export default userInput;