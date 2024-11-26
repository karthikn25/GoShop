import React, { useEffect, useRef, useState } from 'react'
import Base from '../../Base/Base'
import './Profile.css'
import ProfileEdit from './ProfileEdit/ProfileEdit'

export default function Profile() {
  // Simulate authenticated user and posts for showcase
  const [isOpenEditProfile, setIsOpenEditProfile] = useState(true);
  const [avatarPreview, setAvatarPreview] = useState("https://cdn-icons-png.flaticon.com/512/21/21104.png");

  const [user] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    avatar: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    followers: ["user1", "user2", "user3"],
    following: ["user4", "user5"],
  });

  const [posts, setPosts] = useState(5);
  const [data, setData] = useState([
    {
      _id: "1",
      name: "Product 1",
      images: [{ image: "https://via.placeholder.com/150" }],
      likes: [1, 2],
    },
    {
      _id: "2",
      name: "Product 2",
      images: [{ image: "https://via.placeholder.com/150" }],
      likes: [1, 2, 3],
    },
    {
      _id: "3",
      name: "Product 3",
      images: [{ image: "https://via.placeholder.com/150" }],
      likes: [1],
    },
    {
      _id: "4",
      name: "Product 4",
      images: [{ image: "https://via.placeholder.com/150" }],
      likes: [1, 2, 3],
    },
    {
      _id: "5",
      name: "Product 5",
      images: [{ image: "https://via.placeholder.com/150" }],
      likes: [1],
    },
  ]);

  const handleOpenProfileEdit = () => setIsOpenEditProfile(!isOpenEditProfile);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleProductPage = (p) => {
    console.log(p.name);
    // Normally navigate here to the product page
  };

  return (
    <Base>
      <div className='profile-container'>
        <div className="profile-edit">
          <i
            className='bx bxs-edit'
            style={{ display: isOpenEditProfile ? "block" : "none" }}
            onClick={handleOpenProfileEdit}
          ></i>
        </div>
        <div className='profile-edit-page' style={{ display: isOpenEditProfile ? "none" : "block" }}>
          <ProfileEdit setIsOpenEditProfile={setIsOpenEditProfile} isOpenEditProfile={isOpenEditProfile} />
        </div>
        <div style={{ display: isOpenEditProfile ? "block" : "none" }}>
          <div className='profile-user-detail' style={{ display: "flex" }}>
            <div className='profile-page-pic'>
              <figure className="avatar mr-3 item-rtl" onClick={handleImageClick}>
                <img
                  src={user.avatar ?? avatarPreview}
                  alt="Avatar"
                  className='profile-page-img'
                />
              </figure>
              <div className="custom-file">
                <input
                  type="file"
                  name="avatar"
                  onChange={""}
                  accept="image/*"
                  className="custom-file-input"
                  id="customFile"
                  style={{ display: "none" }}
                  ref={inputRef}
                />
              </div>
            </div>
            <div className='profile-details'>
              <h3>{user.username}</h3>
              <p>{user.email}</p>
              <p>Innocent boy😁</p>
            </div>
          </div>
        </div>

        <div className='profile-post'>
          <ul className='post-detail-box' style={{ display: isOpenEditProfile ? "block" : "none" }}>
            <li className='p-list p-content'>
              <span className='p-values'>{posts}</span><br />Post
            </li>
            <li className='p-list p-content'>
              <span className='p-values'>{user.followers.length}</span><br />Followers
            </li>
            <li className='p-list p-content'>
              <span className='p-values'>{user.following.length}</span><br />Following
            </li>
          </ul>
        </div>

        <div className='profile-post-box' style={{ display: isOpenEditProfile ? "block" : "none" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data && data.map((p) => (
              <div className='post-card' key={p._id}>
                <div className='post-img'>
                  <img
                    src={p.images[0].image}
                    alt='img'
                    onClick={() => handleProductPage(p)}
                  />
                </div>
                <div className='post-name'>
                  <h4 onClick={() => handleProductPage(p)}>{p.name}</h4>
                </div>
                <div className='post-edit-btn'>
                  <span style={{ padding: "0px" }}>
                    <i className="fa fa-heart" id="p-like" style={{ color: "red" }}></i>
                    <span id="p-no">{p.likes.length}</span>
                  </span>
                  <i className='bx bx-edit-alt'></i>
                  <i className='bx bx-trash-alt'></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Base>
  );
}
