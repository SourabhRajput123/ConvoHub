// api.js
export const getChatRooms = async () => {
    try {
      // Assume you're fetching chat rooms from an API endpoint
      const response = await fetch('/api/chat-rooms'); // Adjust URL as per your server endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch chat rooms');
      }
      const chatRooms = await response.json();
      return chatRooms;
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
      throw error; // Re-throw the error for the caller to handle
    }
  };
  