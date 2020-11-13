import React from 'react';

const randomNumber = () => {
    return Math.floor(Math.random() * 30);
}

const person = () => {
    return <p>I'm a Person and I am {randomNumber()} years old!</p>;
};

export default person;