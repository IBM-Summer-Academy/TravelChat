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
  justify-content: row;
  padding-left: 0.35rem;
`;
const ChatbotElContainer = styled.div`
  background-color: #F0F1FF;
  border-radius: 1rem; 
  width: 25rem;
  height: fit-content;
`

const SIconThumbsD = styled(IoMdThumbsDown)`
  font-size: 24px;
  color: ${props => props.active ? '#00bcd4' : '#ccc'};
  margin-right: 8px;
  cursor: pointer;
`;

const SIconThumbsU = styled(IoMdThumbsUp)`
  width: 24px;
  height: 24px;
  color: ${props => props.active ? '#f44336' : '#ccc'};
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
