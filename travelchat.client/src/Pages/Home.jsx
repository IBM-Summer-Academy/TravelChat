import React, { useState, useEffect } from 'react';
import BottomBar from '../Components/BottomBar'
import Conversation from '../Components/Conversation'

function Home() {
  const [userQuestion, setUserQuestion] = useState('');
  const [chatbotAnswer, setChatbotAnswer] = useState('');
  const [sessionId, setSessionId] = useState('');

  const handleUserQuestion = (event) => {
    setUserQuestion(event);
    sendQuery(event);
  };

  useEffect(() => {
    const createSession = async () => {
      const response = await fetch('/chat/CreateSession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status == 500) {
        console.log(await response.json());
      }

      const data = await response.json();

      setSessionId(data.sessionId);
      localStorage.setItem('sessionId', data.sessionId);
    }

    createSession();
  }, []);

  const sendQuery = async (content) => {

    const response = await fetch('/chat/SendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId, content })
    });

    if (response.status == 403) {
      createSession();
      sendQuery(userLine);
    }

    const data = await response.json();
    setChatbotAnswer(data.content);
  }

  useEffect(() => { }, [chatbotAnswer]);


  return (
    <>
      <Conversation userLine={userQuestion} chatbotAnswer={chatbotAnswer} />
      <BottomBar onSendUserQuestion={handleUserQuestion} />

    </>
  )
}

export default Home