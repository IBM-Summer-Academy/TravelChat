import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import UserLine from './UserLine';
import ChatbotLine from './ChatbotLine.jsx';


function Conversation({ userLine }) {
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    if (userLine) {
      const iteration = {
        userQuestion: userLine,
        chatBotAnswer: ''
      };

      const updateConversation = async () => {
        const response = await getChatBotAnswer();
        setConversation(prevConversation => [
          ...prevConversation,
          { ...iteration, chatBotAnswer: response }
        ]);
      };

      updateConversation();
    }
  }, [userLine]);

  const getChatBotAnswer = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('some random answer');
      }, 1000);
    });
  }; 

   return(<>
    <div>
      {conversation.map((item, index) => (
        <React.Fragment key={index}>
             <UserLine userLine={item?.userQuestion}/>
            <ChatbotLine chatbotLine={item?.chatBotAnswer}/>
        </React.Fragment>
      ))}
    </div>
        </>
    )
}
export default Conversation;