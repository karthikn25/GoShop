import React, { useState } from 'react';
import Base from '../../Base/Base';
import './Chat.css';
import ChatContainer from './ChatContainer';
import SearchUser from './SearchUser';
import ListUsers from './ListUsers';

function Chat() {
  // Mock user data (replace with actual data or Redux state in real use cases)
  const user = {
    avatar: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    username: "JohnDoe",
  };

  // Mock chat data (static example)
  const [chats, setChats] = useState([
    { _id: 1, username: "Alice", avatar: "https://via.placeholder.com/50", messages: ["Hi!", "How are you?"] },
    { _id: 2, username: "Bob", avatar: "https://via.placeholder.com/50", messages: ["Hello!", "Long time no see."] },
    { _id: 3, username: "Charlie", avatar: "https://via.placeholder.com/50", messages: ["Hey!", "What's up?"] },
  ]);

  const [currentChat, setCurrentChat] = useState(undefined);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [chatprofile, setChatprofile] = useState("");

  const toggle = () => setIsOpenSearch(!isOpenSearch);

  return (
    <Base>
      <div className='chat-container'>
        <div className="chat-person-list" style={{ width: "35%" }}>
          <div className='chat-profile'>
            <div className='db'>
              <img src={user.avatar} alt='db' />
            </div>
            <div className='chat-user-name'>
              <h3>{user.username}</h3>
            </div>
            <div className='chat-user-search-icon' onClick={toggle} style={{ display: !isOpenSearch ? "block" : "none" }}>
              <i className='bx bx-search'></i>
            </div>
          </div>

          <div style={{ display: !isOpenSearch ? "none" : "block" }}>
            <SearchUser chats={chats} setChats={setChats} setCurrentChat={setCurrentChat} />
          </div>

          <div className='chat-user-list'>
            <ListUsers chats={chats} setChats={setChats} setCurrentChat={setCurrentChat} setChatprofile={setChatprofile} />
          </div>

        </div>

        <div className='grid-container'>
          <ChatContainer currentChat={currentChat} chatprofile={chatprofile} />
        </div>
      </div>
    </Base>
  );
}

export default Chat;
