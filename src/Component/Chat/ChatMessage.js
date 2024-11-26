import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

function ChatMessage({ messages }) {
  const { user } = useSelector((state) => state.authState);
  const scrollRef = useRef();

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-messages">
      {messages.map((m, i) => (
        <div key={uuidv4()}>
          <div className="message">
            <div className={m.sender._id === user._id ? 'sender' : 'receiver'}>
              <div
                className={m.sender._id === user._id ? 'sender-msg' : 'receiver-msg'}
                style={{
                  backgroundColor: `${m.sender._id === user._id ? '#BEE3F8' : '#B9F5D0'}`,
                 
                }}
              >
                {m.content}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div ref={scrollRef}></div> {/* Ref to scroll to the latest message */}
    </div>
  );
}

export default ChatMessage;
