import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function SignUp() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [show, setShow] = useState(false);

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("https://cdn-icons-png.flaticon.com/512/21/21104.png");

  const handlePasswordShow = () => setShow(!show);

  const onChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(e.target.files[0]);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate the registration process
    if (userData.username && userData.email && userData.password && avatar) {
      toast.success("Registration successful! Redirecting...");
      setTimeout(() => {
        navigate('/'); // Redirect to login page after successful registration
      }, 2000); // Simulate delay for processing registration
    } else {
      toast.error("All fields are required! Please fill out the form.");
    }
  };

  return (
    <div className="sign-container">
      <div className="row">
        <div className="wrapper">
          <div className="form-container signup">
            <form action="#" onSubmit={handleSubmit}>
              <h2>Register</h2>
              <div className="d-flex align-items-center" id="signup-place">
                <figure className="avatar mr-3 item-rtl" onClick={handleImageClick}>
                  <img
                    src={avatarPreview}
                    alt="Avatar"
                    style={{
                      width: "100px",
                      height: "100px",
                      position: "relative",
                      top: "20px",
                      left: "6rem",
                      border: "2px solid rgb(211, 210, 210)",
                      cursor: "pointer",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    onChange={onChange}
                    accept="image/*"
                    className="custom-file-input"
                    id="customFile"
                    style={{ display: "none" }}
                    ref={inputRef}
                  />
                </div>
              </div>

              <div className="form-group" id="signup-place">
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={onChange}
                  required
                />
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <label htmlFor="username">Username</label>
              </div>

              <div className="form-group" id="signup-place">
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={onChange}
                  required
                />
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-group" id="signup-place">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={userData.password}
                  onChange={onChange}
                  required
                />
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <label htmlFor="password">Password</label>
              </div>

              <div className="password-show-sign-in" id="signup-place">
                <span><input type="checkbox" onClick={handlePasswordShow} /> Show password</span>
              </div>

              <button type="submit" className="btn" id="signup-btn">
                Register
              </button>

              <div className="login-link" id="signup-place">
                <p>
                  Already have an account?
                  <Link to="/" className="signin-link">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
