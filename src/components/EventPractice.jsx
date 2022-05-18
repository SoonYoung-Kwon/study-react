import React from 'react';

const EventPractice = () => {
    return (
        <div>
            <h1>Event</h1>
            <input
                type="text"
                name="message"
                placeholder="input anything"
                onChange={ (e) => {
                    console.log(e.target.value)
                }}
            ></input>
        </div>
    );
};

export default EventPractice;