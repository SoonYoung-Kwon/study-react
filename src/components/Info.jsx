import React, { useState, useEffect } from 'react';

const Info = () => {

    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    }

    useEffect(() => {
        console.log("Render")
        console.log({
            name,
            nickname
        })
    }, [name, nickname])

    return (
        <div>
            <div>
                <input type="text" value={name} onChange={onChangeName}/>
                <input type="text" value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div><b>Name : </b> {name}</div>
                <div><b>Nickname : </b> {nickname}</div>
            </div>
        </div>
    );
};

export default Info;