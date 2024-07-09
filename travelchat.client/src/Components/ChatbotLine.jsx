import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components'
import { AiFillAliwangwang } from "react-icons/ai";
import { IoMdThumbsDown } from "react-icons/io";
import { IoMdThumbsUp } from "react-icons/io";


function ChatbotLine({ chatbotLine }) {
  const [activeIcon, setActiveIcon] = useState(false);

  useEffect(() => { }, [chatbotLine]);

  const handleIconClick = (icon) => {

    if (activeIcon === icon) {
      setActiveIcon(null);
    }

    else {
      setActiveIcon(icon);
    }

    if (icon === 'thumbsDown') {
      sendUserEvaluation(0);

    }
    else {
      sendUserEvaluation(1);
    }
  };

  const sendUserEvaluation = async (value) => {
    try {
      const response = await fetch('/chat/RateResult', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        throw new Error('Failed to send result');
      }
    }
    catch (error) {
      console.error('Failed to send number value:', error);
      return { error: 'Failed to send number value' };
    }
  };

  return (
    <>
      <ChatbotIconContainer>
        <SIconLogo />
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


    </>
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
