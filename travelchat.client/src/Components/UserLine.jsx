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
  margin-right: 0.3rem;
  height: fit-content;
  padding: 1rem;
  display: flex;
  align-self: flex-end;
  max-width: 40%;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  overflow-wrap: break-word;
`
export default UserLine;
