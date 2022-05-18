import React, { useState } from 'react';

const Say = () => {

    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={() => {
                setMessage('IN')
            }}>IN</button>
            <button onClick={() => {
                setMessage('OUT')
            }}>OUT</button>
            <h1 style={{ color }}>{message}</h1>
            <button onClick={() => {
                setColor('red')
            }} style={{ color : 'red' }}>Red</button>
            <button onClick={() => {
                setColor('green')
            }} style={{ color : 'green' }}>Green</button>
            <button onClick={() => {
                setColor('blue')
            }} style={{ color : 'blue' }}>Blue</button>
        </div>
    );
};

export default Say;