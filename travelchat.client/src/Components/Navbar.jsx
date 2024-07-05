import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillAliwangwang } from "react-icons/ai";

function Navbar() {
    return (
        <>
            <SNav>
                <h1>TravelChat</h1>
                <SIcon></SIcon>
                <Sbutton onClick={window.location.reload}>New Conversation</Sbutton>
            </SNav>
            
        </>
    )


}

const SNav = styled.div`
    display: flex;
    padding: 0.8rem 1.5rem;
    background-color: #E2F1FE;
    margin: 0rem 0.0rem;
    margin-bottom: 1.5rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    h1 {
        font-size: 1.5rem;
        color: #0077CC;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
    }
`

const Sbutton = styled(Link)`
    padding: 0.8rem 1rem;
    background-color: #0077CC;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    margin-left: auto;
    &:hover {
        background-color: #005FA3;
    }
    &:active{
        background-color: #0D1B1A;
    }
`
const SIcon = styled(AiFillAliwangwang)`
   padding: 0.2rem 1rem;
   position:absolute;
   font-size: 2.7rem;
`
export default Navbar