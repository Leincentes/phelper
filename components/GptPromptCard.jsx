'use client'

import { useState } from 'react';

const GptPromptCard = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
  
    const handleUserInput = (e) => {
      setUserInput(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Send user input to backend API for processing
      const response = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ userInput }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      // Update chat history with user input and AI response
      setChatHistory([...chatHistory, { role: 'user', content: userInput }]);
      setChatHistory([...chatHistory, { role: 'assistant', content: data.response }]);
  
      // Clear user input
      setUserInput('');
    };
  
    return (
      <div>
        <div>
          {chatHistory.map((message, index) => (
            <div key={index}>
              <span>{message.role}: </span>
              <span>{message.content}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleUserInput} />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }

export default GptPromptCard;