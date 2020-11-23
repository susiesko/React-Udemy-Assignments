import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid pink'
    };
    
    return (
        <div className="UserInput">
            <input 
                type="text" 
                style={inputStyle}
                onChange={props.inputChanged}
                value={props.currentName}
            />
        </div>
    );
};

export default userInput;