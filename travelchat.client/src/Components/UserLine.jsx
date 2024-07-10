import React from 'react';
import styled from 'styled-components'
function UserLine({ userLine }) {
  return (
    <SUserLineContainer>
      <div>{userLine}</div>
    </SUserLineContainer>

  );
};
const SUserLineContainer = styled.div` 
  background-color: #AFDAFB;
  border-radius: 1rem;
  margin-right: 1rem;
  height: fit-content;
  padding: 1rem;
  display: flex;
  align-self: flex-end;
  max-width: 40rem;
  margin-bottom: 1rem;
  overflow-y: hidden;

  div {
    overflow-y: hidden;
    overflow-wrap: break-word;
  }
`
export default UserLine;
