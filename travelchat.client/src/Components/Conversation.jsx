import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import UserLine from './UserLine';
import ChatbotLine from './ChatbotLine.jsx';


function Conversation({ userLine }) {
  const [conversation, setConversation] = useState([]);
  const [sessionId, setSessionId] = useState('');
  const [chatbotAnswer, setChatbotAnswer] = useState('');

  useEffect(() => {
    if (userLine) {
      const iteration = {
        userQuestion: userLine,
        chatBotAnswer: ''
      };

      const updateConversation = async () => {
        const response = await getChatBotAnswer();
        setConversation(prevConversation => [...prevConversation, { ...iteration, chatBotAnswer: response }]);
      };

      updateConversation();
    }

  }, [userLine]);

  useEffect(() => {
    const sendQuery = async (query) => {
      const response = fetch('http://localhost:5046/Chat/SendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId, query })
      });
      if (!(await response).ok) {
        throw new Error('Failed to send query');
      }
      else await response.json();
      setChatbotAnswer();
    }

    sendQuery('initial query');
  }, []);

  useEffect(() => {
    const createSession = async () => {
      const response = fetch('http://localhost:5046/Chat/CreateSession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!(await response).ok) {
        throw new Error('Failed to create session');
      }

      const data = await response.json();
      setSessionId(data.sessionId);
      localStorage.setItem('sessionId', data.sessionId);
    }

    createSession();
  }, []);


  return (
    <>
      <SConverstaion>

        {conversation.map((item, index) => (
          <React.Fragment key={index}>
            <UserLine userLine={item?.userQuestion} />
            <ChatbotLine chatbotLine={item?.chatBotAnswer} />
          </React.Fragment>
        ))}
      </SConverstaion>
    </>
  )
}

const SConverstaion = styled.div
  ` display: flex;
flex-direction: column;
width: 100%;
height: 75%;

`
export default Conversation;