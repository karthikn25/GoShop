import React, { useState } from 'react';

function SearchUser({ chats, setChats, setCurrentChat }) {
  // Simulated static list of users
  const users = [
    { _id: '1', username: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { _id: '2', username: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { _id: '3', username: 'Mike Johnson', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { _id: '4', username: 'Emily Davis', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    // Add more users as needed for testing
  ];

  const [keyword, setKeyword] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Handle search input
  const handleSearch = () => {
    if (keyword.trim() === '') {
      setFilteredUsers(users);
    } else {
      const searchResults = users.filter(user =>
        user.username.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredUsers(searchResults);
    }
  };

  // Handle user click to create or select a chat
  const accessChat = (userId) => {
    const user = users.find(u => u._id === userId);
    if (user) {
      const newChat = {
        _id: `chat-${userId}`,
        users: [user],
        chatName: `${user.username}'s chat`,
      };

      if (!chats.find((chat) => chat._id === newChat._id)) {
        setChats([newChat, ...chats]);
      }
      setCurrentChat(newChat);
    }
  };

  return (
    <div className="users">
      <div className="chat-user-search">
        <input
          type="search"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder="Search"
        />
        <button onClick={handleSearch}>
          <span>Search</span>
        </button>
      </div>

      <div className="chat-search-user-details">
        {filteredUsers.length > 0 ? (
          <ul>
            {filteredUsers.map((e) => (
              <li
                key={e._id}
                className="person"
                onClick={() => accessChat(e._id)}
              >
                <img alt="img" src={e.avatar ?? "https://cdn-icons-png.flaticon.com/512/21/21104.png"} />
                <p>{e.username}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default SearchUser;
