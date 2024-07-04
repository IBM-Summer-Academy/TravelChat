import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
    return (
        <>
            <SNav>
                <Sbutton onClick={window.location.reload}>New Conversation</Sbutton>
            </SNav>
        </>
    )


}

const SNav = styled.div`
    display: flex;
    padding: 0.8rem 1.5rem;
    background-color: #E2F1FE;
    margin: 0rem 0.5rem;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
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
`

export default Navbar