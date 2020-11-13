import React from 'react';

const randomNumber = () => {
    return Math.floor(Math.random() * 30);
};

const person = (props) => {
    return <p>I'm {props.name} and I am {props.age} years old!</p>;
};

export default person;