import React, { useState } from 'react';

const IterationSample = () => {

    const [names, setNames] = useState([
        {
            id: 1,
            name: 'kwon'
        },
        {
            id: 2,
            name: 'kim'
        },
        {
            id: 3,
            name: 'lee'
        },
        {
            id: 4,
            name: 'choi'
        },
    ])

    const [inputName, setInputName] = useState('')
    const [nextId, setNextId] = useState(names.length + 1)

    const onChange = (e) => {
        setInputName(e.target.value)
    }

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            name: inputName
        })
        setNames(nextNames)
        setNextId(nextId + 1)
        setInputName('')
    }

    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id)
        setNames(nextNames)
    }

    return (
        <div>
            <input
                onChange={onChange}
                name="inputName"
                placeholder="input name"
                value={inputName}
            ></input>
            <button onClick={onClick}>ADD</button>
            <ul>
                {names.map((name, index) => 
                    <li key={index}>{name.name}
                        <button onClick={() => {
                            onRemove(name.id)
                        }}>DEL
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default IterationSample;