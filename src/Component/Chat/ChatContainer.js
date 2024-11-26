import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import Picker from 'emoji-picker-react';
import animationData from '../../animations/typing.json';
import { toast } from 'react-toastify';
import Chatheader from './Chatheader';
import ChatMessage from './ChatMessage';

function ChatContainer({ fetchAgain, setFetchAgain, currentChat, chatprofile }) {

  // Static user and mock data for the chat
  const user = {
    username: "JohnDoe",
    avatar: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
  };

  const mockMessages = [
    { sender: "Alice", content: "Hey, how are you?", timestamp: "10:00 AM" },
    { sender: "Bob", content: "I'm doing great, thanks!", timestamp: "10:05 AM" },
    { sender: "Charlie", content: "What's up?", timestamp: "10:10 AM" },
  ];

  const [messages, setMessages] = useState(mockMessages);
  const [msg, setMsg] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  // Handle emoji picker click
  const onEmojiClick = (event, emojiObject) => {
    setMsg(prevInput => prevInput + event.emoji);
  };

  // Handle sending the message
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      const newMessage = { sender: user.username, content: msg, timestamp: new Date().toLocaleTimeString() };
      setMessages([...messages, newMessage]);
      setMsg(""); // Reset the input field
    }
  };

  // This mimics the typing animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Static content when there's no selected chat
  if (!currentChat) {
    return (
      <div className="chat-display">
        <h2>Welcome</h2>
        <h1>Go Shop Application</h1>
      </div>
    );
  }

  return (
    <>
      <div className="grid-item">
        <Chatheader chatprofile={chatprofile} />
      </div>
      <div className="grid-item">
        <ChatMessage messages={messages} />
      </div>
      <div className="grid-item">
        <div className='chat-btn-container'>
          <div className='chat-form'>
            <img
              className='emoji-icon'
              src='https://icons.getbootstrap.com/assets/icons/emoji-smile.svg'
              onClick={() => setShowPicker(!showPicker)}
              alt=''
            />
            <form onSubmit={sendChat}>
              <input
                className='input-style'
                value={msg}
                onClick={() => setShowPicker(false)} // Close picker when input is clicked
                onChange={(e) => setMsg(e.target.value)}
              />
              <button type="submit">
                <i className='bx bxs-send msg-send-btn'></i>
              </button>
            </form>
            <div className='emoji-box'>
              {showPicker && <Picker onEmojiClick={onEmojiClick} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatContainer;
