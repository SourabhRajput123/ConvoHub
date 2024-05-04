// Sidebar.jsx
import React from 'react';

function Sidebar({ chatRooms, onSelect }) {
  return (
    <div className="Sidebar">
      <h2>ConvoHub</h2>
      <ul className="room-list">
        {chatRooms.map((room) => (
          <li key={room.id} onClick={() => onSelect(room)}>
            {room.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
