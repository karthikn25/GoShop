import React, { useEffect, useState } from 'react';
import './Home.css';

export default function FollowData({ _id, followers }) {
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    // Simulating the user info being fetched from localStorage
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (followers?.some((id) => id === user._id)) {
      setFollow(true);
    }

    return () => setFollow(false);
  }, [followers]);

  const handleFollow = () => {
    // Simulate following logic
    setFollow(true);

    // Here, you would send a request to backend, for example:
    // await axios.put(`http://localhost:4000/api/follow/${_id}`);

    // You can also simulate storing the updated followers list in localStorage or state
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const updatedFollowers = [...followers, user._id];  // Add user ID to followers list
    localStorage.setItem('followers', JSON.stringify(updatedFollowers));
    console.log('User followed', updatedFollowers);
  };

  const handleUnFollow = () => {
    // Simulate unfollowing logic
    setFollow(false);

    // Here, you would send a request to backend, for example:
    // await axios.put(`http://localhost:4000/api/unfollow/${_id}`);

    // Simulate removing the user ID from the followers list
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const updatedFollowers = followers.filter((id) => id !== user._id);  // Remove user ID from followers list
    localStorage.setItem('followers', JSON.stringify(updatedFollowers));
    console.log('User unfollowed', updatedFollowers);
  };

  return (
    <>
      {follow ? (
        <button onClick={handleUnFollow} className="button">Unfollow</button>
      ) : (
        <button onClick={handleFollow} className="button">Follow</button>
      )}
    </>
  );
}
