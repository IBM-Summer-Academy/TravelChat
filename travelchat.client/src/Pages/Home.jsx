import React, { useState } from 'react';
import BottomBar from '../Components/BottomBar'
import Conversation from '../Components/Conversation'

function Home() {
    const [userQuestion, setUserQuestion] = useState('');

  // Function to update userQuestion
  const handleUserQuestion = (event) => {
    console.log(event)
    setUserQuestion(event);
  };
    return (
        <>
           
            <Conversation userLine={userQuestion}/>
            <BottomBar onSendUserQuestion={handleUserQuestion} />
            
        </>
    )
}

export default Home