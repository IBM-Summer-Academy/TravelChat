import React, { Fragment, useState } from 'react';
import styled from 'styled-components'
import { AiFillAliwangwang } from "react-icons/ai";
import { IoMdThumbsDown } from "react-icons/io";
import { IoMdThumbsUp } from "react-icons/io";


function ChatbotLine  ({ chatbotLine }) {
    const [activeIcon, setActiveIcon] = useState(null);

    const handleIconClick = (icon) => {

      if (activeIcon === icon) {
        setActiveIcon(null); // Clicking the active icon again toggles it off
       
      } else {
        setActiveIcon(icon); // Clicking a different icon sets it as active
      }

      if(icon === 'thumbsDown') {
        sendUserEvaluation(0)

      } else {
        sendUserEvaluation(1)
      }
    };

    const sendUserEvaluation = async (value) => {
      try {
        const response = await fetch('http://localhost:5046/Chat/RateResult', { 
          method: 'POST',
          body: JSON.stringify( value ), // Send the value as JSON
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Failed to send number value:', error);
        return { error: 'Failed to send number value' };
      }
    };

  return(    
  <React.Fragment >
    <ChatbotIconContainer>
    <SIconLogo></SIconLogo>
    <ChatbotElContainer>
      <Fragment>
        <div>{chatbotLine}</div>
      </Fragment>
      <SIconThumbsD
        active={activeIcon === 'thumbsDown'}
        onClick={() => handleIconClick('thumbsDown')}
      />
      <SIconThumbsU
        active={activeIcon === 'thumbsUp'}
        onClick={() => handleIconClick('thumbsUp')}
      />
 </ChatbotElContainer>
    </ChatbotIconContainer>
    
    
</React.Fragment>
);
};

const ChatbotIconContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  margin-bottom: 1.2rem
`;
const ChatbotElContainer = styled.div`
 padding: 0.75rem;
  background-color: #F0F1FF;
  border-radius: 1rem; 
  height: fit-content;
    max-width: 50%;
  flex-wrap: wrap;
`

const SIconThumbsD = styled(IoMdThumbsDown)`
  font-size: 24px;
  color: ${props => props.active ? '#f44336' : '#ccc'};
  margin-right: 8px;
  cursor: pointer;
`;

const SIconThumbsU = styled(IoMdThumbsUp)`
  width: 24px;
  height: 24px;
  color: ${props => props.active ? '#00bcd4' : '#ccc'};
  background-color:none;
  margin-right: 8px;
  cursor: pointer;
`;
const SIconLogo = styled(AiFillAliwangwang)`
font-size: 2rem;
margin-right: 0.45rem;
color: #0077CC;
margin-top: 0.3rem;
margin-bottom: 0.3rem;
`
export default ChatbotLine;
