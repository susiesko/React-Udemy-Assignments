import React from 'react';

const validation = (props) => {
    let lengthValidationText = 'Text too short.';

    if (props.textInputLength >= 5){
        lengthValidationText = 'Text long enough.';
    }

    return (
        <div>
            <p>{lengthValidationText}</p>
        </div>
    );
};

export default validation;