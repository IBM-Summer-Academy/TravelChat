import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <>
      <TextWrapper>
        <Title>Uh oh...</Title>
        <h2>404 Not Found</h2>
        <h3>The page you're trying to reach could not be found</h3>
        <Sbutton to={'/'}>Return to home</Sbutton>
      </TextWrapper>
    </>
  )
}

const TextWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  h2 {
    font-size: 2rem;
    margin-top: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  `

const Title = styled.h1`
  font-size: 3rem;
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
    margin-top: 1rem;    
    &:hover {
        background-color: #005FA3;
    }
`


export default NotFound