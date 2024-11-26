import React, { useEffect, useState } from 'react';

function ListUsers({ setCurrentChat }) {
  const [loggedUser, setLoggedUser] = useState({
    _id: '1',
    name: 'John Doe',
  }); // Mock logged-in user data
  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState(null); // Added error state
  const [chats, setChats] = useState([]); // Mock chats

  // Mocked list of chats for showcase
  const dummyChats = [
    {
      _id: '1',
      chatName: 'Chat with Alice',
      users: [
        { _id: '1', name: 'John Doe' },
        { _id: '2', name: 'Alice' },
      ],
      isGroupChat: false,
    },
    {
      _id: '2',
      chatName: 'Chat with Bob',
      users: [
        { _id: '1', name: 'John Doe' },
        { _id: '3', name: 'Bob' },
      ],
      isGroupChat: false,
    },
    {
      _id: '3',
      chatName: 'Group Chat 1',
      users: [
        { _id: '1', name: 'John Doe' },
        { _id: '4', name: 'Charlie' },
        { _id: '5', name: 'David' },
      ],
      isGroupChat: true,
    },
  ];

  // Simulate fetching chats on component mount or when a dependency changes
  useEffect(() => {
    setLoading(true);
    setError(null);
    setChats(dummyChats); // Mock chat data
    setLoading(false);
  }, []); // Empty dependency array, runs only once when component mounts

  const handleClick = (chat) => {
    if (chat) {
      setCurrentChat(chat);
    }
  };

  const getSenderProfile = (loggedUser, users) => {
    const sender = users.find((user) => user._id !== loggedUser._id);
    return sender ? 'https://via.placeholder.com/50' : ''; // Dummy profile image
  };

  const getSender = (loggedUser, users) => {
    const sender = users.find((user) => user._id !== loggedUser._id);
    return sender ? sender.name : '';
  };

  return (
    <div className="chat-users-list">
      {loading ? (
        <div>Loading chats...</div> // Display loading state
      ) : error ? (
        <div>{error}</div> // Display error message
      ) : (
        chats && (
          <ul>
            {chats.map((chat) => (
              <li
                key={chat._id}
                className="chatName"
                onClick={() => handleClick(chat)}
              >
                <img
                  className="list-user-img"
                  src={
                    !chat.isGroupChat
                      ? getSenderProfile(loggedUser, chat.users)
                      : 'https://cdn-icons-png.flaticon.com/512/21/21104.png'
                  }
                  alt={chat.chatName}
                />
                {!chat.isGroupChat
                  ? getSender(loggedUser, chat.users)
                  : chat.chatName}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default ListUsers;
