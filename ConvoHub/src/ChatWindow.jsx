// ChatWindow.jsx
import React, { useState, useEffect } from 'react';

function ChatWindow({ selectedRoom }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages for the selected room when component mounts or selected room changes
    if (selectedRoom) {
      fetchMessages(selectedRoom.id); // Assuming you have a function to fetch messages for a room
    }
  }, [selectedRoom]);

  const fetchMessages = async (roomId) => {
    try {
      // Fetch messages for the selected room from the server
      const messagesData = await fetch(`/api/rooms/${roomId}/messages`); // Adjust URL as per your server endpoint
      const messages = await messagesData.json();
      setMessages(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div className="ChatWindow">
      <h2>{selectedRoom ? `Chatting in ${selectedRoom.name}` : 'Select a room'}</h2>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <p>{message.sender}: {message.text}</p>
          </div>
        ))}
      </div>
      {/* Add input field and send button for sending messages */}
    </div>
  );
}

export default ChatWindow;
