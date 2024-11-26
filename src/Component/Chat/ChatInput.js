import React, { useState } from 'react';
import './Chat.css';
import Picker from 'emoji-picker-react';

export default function ChatButton({ sendMessage }) {
  const [msg, setMsg] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  // Handle emoji click
  const onEmojiClick = (event, emojiObject) => {
    setMsg(prevInput => prevInput + emojiObject.emoji);
  };

  // Send the chat message
  const sendChat = (event) => {
    event.preventDefault();

    if (msg.length > 0) {
      sendMessage(msg, setMsg);
      setMsg(""); // Clear the input field
    }
  };

  // Toggle the emoji picker visibility
  const toggleEmojiPicker = () => {
    setShowPicker(prev => !prev);
  };

  // Close emoji picker if clicked outside the input or picker area
  const closeEmojiPicker = (event) => {
    if (event.target.closest('.chat-form') === null) {
      setShowPicker(false);
    }
  };

  // Use effect to listen for clicks outside to close emoji picker
  React.useEffect(() => {
    // Adding event listener on mount
    document.addEventListener('click', closeEmojiPicker);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('click', closeEmojiPicker);
    };
  }, []);

  return (
    <div className='chat-btn-container'>
      <div className='chat-form'>
        {/* Emoji Icon */}
        <img
          className='emoji-icon'
          src='https://icons.getbootstrap.com/assets/icons/emoji-smile.svg'
          alt='Emoji Picker'
          onClick={toggleEmojiPicker}
        />

        {/* Message Input Form */}
        <form onSubmit={sendChat}>
          <input
            className='input-style'
            value={msg}
            onClick={() => setShowPicker(false)} // Close emoji picker when typing
            onChange={(e) => setMsg(e.target.value)}
            placeholder='Type a message...'
            autoFocus
          />
          <button type="submit">
            <i className='bx bxs-send msg-send-btn'></i>
          </button>
        </form>

        {/* Emoji Picker */}
        <div className='emoji-box'>
          {showPicker && (
            <Picker
              onEmojiClick={onEmojiClick}
              pickerStyle={{ position: 'absolute', bottom: '60px', left: '5px', zIndex: 999 }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
