import React from 'react';
import styled from 'styled-components'
function UserLine ({ userLine }) {
  return(
    <SUserLineContainer>
       <div>{userLine}</div>
    </SUserLineContainer>
   
  ); 
};
const SUserLineContainer = styled.div
` background-color: #AFDAFB;
  border-radius: 1rem;
  margin-right: 0.3rem;
  width: 25rem;
  height: fit-content;
`
export default UserLine;
