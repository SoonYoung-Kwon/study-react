import React, { useState } from 'react';

const EventPractice = () => {

    const [form, setFrom] = useState({
        username: '',
        message: ''
    });

    const {username, message} = form;

    return (
        <div>
            <h1>Event</h1>
            <input
                type="text"
                name="username"
                value={username}
                placeholder="input username"
                onChange={ (e) => {
                    setFrom({
                        ...form,
                        [e.target.name]: e.target.value
                    })
                }}
            ></input>
            <input
                type="text"
                name="message"
                value={message}
                placeholder="input message"
                onChange={ (e) => {
                    setFrom({
                        ...form,
                        [e.target.name]: e.target.value
                    })
                }}
                onKeyPress={ (e) => {
                    if(e.key === 'Enter'){
                        alert(username + " : " + message)
                        setFrom({
                            username: '',
                            message: ''
                        })
                    }
                }}
            ></input>
            <button onClick={ () => {
                alert(username + " : " + message)
                setFrom({
                    username: '',
                    message: ''
                })
            }}
            >GET</button>
        </div>
    );
};

export default EventPractice;