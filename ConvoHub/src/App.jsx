import React, { useState, useEffect } from 'react';
import './App.css';
import ChatWindow from './ChatWindow';
import Sidebar from './Sidebar';
//import { getChatRooms } from './api'; // Assuming you have an API file for fetching chat rooms

function App() {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    // Fetch chat rooms when component mounts
    fetchChatRooms();
  }, []);

  const fetchChatRooms = async () => {
    try {
      const rooms = await getChatRooms(); // Function to fetch chat rooms from the server
      setChatRooms(rooms);
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
    }
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="App">
      <Sidebar chatRooms={chatRooms} onSelect={handleRoomSelect} />
      <ChatWindow selectedRoom={selectedRoom} />
    </div>
  );
}

export default App;
