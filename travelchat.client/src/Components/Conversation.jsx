import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components'
import UserLine from './UserLine';
import ChatbotLine from './ChatbotLine.jsx';

function Conversation({ userLine, chatbotAnswer }) {
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    if (!userLine || !chatbotAnswer) return;

    setConversation(prevConversation => [...prevConversation, { userQuestion: userLine, chatBotAnswer: chatbotAnswer }]);
  }, [userLine && chatbotAnswer]);

  return (
    <>
      <SConverstaion>
        {conversation.map((line, index) => {
          return (
            <React.Fragment key={index}>
              <UserLine userLine={line.userQuestion} />
              <ChatbotLine chatbotLine={line.chatBotAnswer} />
            </React.Fragment>
          );
        })}
      </SConverstaion>
    </>
  )
}

const SConverstaion = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 5rem;
`
export default Conversation;