import React from 'react';

const UncntrlledField = () => {
    return (
        <div>
            <input type="text" name="name" />
            <br />
            <input type="email" name='email' />
            <br />
            <input type="submit" value="Submit" />
        </div>
    );
};

export default UncntrlledField;