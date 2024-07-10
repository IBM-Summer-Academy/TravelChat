import React, { useState } from 'react';
import styled from 'styled-components'
import { IoSend } from "react-icons/io5";

const BottomBar = ({ onSendUserQuestion }) => {
    const [userQuestion, setUserQuestion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSendUserQuestion(userQuestion);
        setUserQuestion('');
    };

    const handleChange = (e) => {
        setUserQuestion(e.target.value);
    };

    return (
        <>
            <SBottomBar>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your message" name="userQuestion"
                        value={userQuestion} autoComplete="off"
                        onChange={(e) => setUserQuestion(e.target.value)} />
                    <button type="submit"><IoSend /></button>
                </form>
            </SBottomBar>
        </>
    )
}

const SBottomBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #E2F1FE;
    
    form {
        display: flex;
        align-items: center;
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;
        border: none;
        border-radius: 0.5rem;
        margin-right: 1rem;
        width: 50rem;
        height: 2rem;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #0077CC;
        color: white;
        font-size: 1.3rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        height: 3rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
    }

    button:hover {
        background-color: #005FA3;
    }

    button:active {
        background-color: #0D1B1A;
    }

    input:focus {
        outline: none;
    }
`

export default BottomBar