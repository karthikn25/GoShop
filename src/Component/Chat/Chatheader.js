import React from 'react';

function Chatheader({ chatprofile }) {
  // Check if chatprofile is available to prevent errors
  if (!chatprofile) {
    return <div>Loading...</div>; // You can show a loading state or fallback
  }

  // Default avatar in case chatprofile doesn't have one
  const avatarUrl = chatprofile.avatar ?? 'https://cdn-icons-png.flaticon.com/512/21/21104.png';
  const username = chatprofile.username ?? 'Unknown User'; // Fallback to 'Unknown User' if no username is found

  return (
    <div className="chat-user-details">
      {/* Chat Avatar */}
      <div className="chat-user-avatar">
        <img
          className="chat-send-profile"
          src={avatarUrl}
          alt="User Avatar"
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        />
      </div>

      {/* Chat Username */}
      <div className="chat-user-username">
        <h3>{username}</h3>
      </div>
    </div>
  );
}

export default Chatheader;
