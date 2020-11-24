import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <div className="Char" onClick={props.charClicked}>
            {props.character}
        </div>
    );
};

export default char;