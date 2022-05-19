import React, { useState } from 'react';

import './../styles/ValidationSample.css'

const ValidationSample = () => {

    const [form, setForm] = useState({
        password: '',
        clicked: '',
        validated: ''
    })

    const { password, clicked, validated } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleButtonClick = () => {
        setForm({
            ...form,
            clicked: true,
            validated: password === '0000'
        })
    }

    return (
        <div>
            <input type="password" name="password" onChange={handleChange} placeholder="input password" className={clicked ? validated ? 'success': 'failure' : ''}></input>
            <button onClick={handleButtonClick}>Check</button>
        </div>
    );
};

export default ValidationSample;