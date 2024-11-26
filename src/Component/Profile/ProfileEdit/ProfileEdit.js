import React, { useEffect, useRef, useState } from "react";
import "./ProfileEdit.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProfileEdit({
  user,
  setIsOpenEditProfile,
  isOpenEditProfile,
}) {
  const handleOpenProfileEdit = () => setIsOpenEditProfile(!isOpenEditProfile);
  const inputRef = useRef(null);

  // Local state to hold profile data
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(
    "https://cdn-icons-png.flaticon.com/512/21/21104.png"
  );

  // Handle image file selection
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const onChangeAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(file);
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle form submission (mocked)
  const submitHandler = (e) => {
    e.preventDefault();

    // Simulate updating profile data
    const updatedProfile = {
      username,
      email,
      phone,
      avatar: avatar ? avatarPreview : user.avatar,
    };

    console.log("Profile updated:", updatedProfile);

    // Show success message
    toast("Profile updated successfully!", {
      type: "success",
      position: toast.POSITION.BOTTOM_CENTER,
    });

    // Close the edit modal
    setIsOpenEditProfile(false);
  };

  useEffect(() => {
    // Prepopulate fields with user data
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setPhone(user.phone || "");
      if (user.avatar) {
        setAvatarPreview(user.avatar);
      }
    }
  }, [user]);

  return (
    <div className="profile-details-edit">
      <form onSubmit={submitHandler}>
        <div className="profile-detail-edit-img">
          <figure
            className="avatar mr-3 item-rtl"
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          >
            <img
              src={avatarPreview}
              alt="Avatar"
              style={{
                position: "relative",
                top: "20px",
                left: "6rem",
                border: "2px solid black",
                borderRadius: "50%",
              }}
            />
            <span>
              <i className="bx bx-image-add" id="bx-image-add"></i>
            </span>
          </figure>

          <div className="custom-file">
            <input
              type="file"
              name="avatar"
              onChange={onChangeAvatar}
              accept="image/*"
              className="custom-file-input"
              id="customFile"
              style={{ display: "none" }}
              ref={inputRef}
            />
          </div>
        </div>

        <div className="profile-edited-details">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
            required
          />
          <input
            type="number"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Contact"
            value={phone}
          />
          <textarea placeholder="Edit your bio" />
        </div>

        <div className="profile-details-edit">
          <button type="button" onClick={handleOpenProfileEdit}>
            Cancel
          </button>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
