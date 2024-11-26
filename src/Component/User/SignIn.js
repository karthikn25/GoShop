import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import images from '../../images/logo.jpg';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to toggle password visibility
  const handlePasswordShow = () => setShow(!show);

  // Simulate a successful login (this would be a mock in the frontend)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "password123") {
      toast.success("Login successful! Redirecting...");
      localStorage.setItem('userInfo', JSON.stringify({ email })); // Mock user login data
      setTimeout(() => {
        navigate('/home'); // Redirect to home page after successful login
      }, 2000); // Simulate delay
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  useEffect(() => {
    // If the user is already "logged in", redirect to home page
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div className="sign-container">
      <div className="row">
        <div className="wrapper">
          <div className="form-container signin">
            <form action="#" onSubmit={handleSubmit}>
              <div className="d-flex align-items-center">
                <figure className="avatar mr-3 item-rtl">
                  <img
                    src={images}
                    alt="Avatar"
                    style={{
                      width: "130px",
                      height: "130px",
                      position: "relative",
                      top: "20px",
                      left: "7rem",
                      border: "6px double #011d4a",
                      cursor: "pointer",
                      borderRadius: "50%",
                    }}
                  />
                </figure>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-group">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <label htmlFor="password">Password</label>
              </div>

              <div className="password-show-sign-in">
                <span>
                  <input type="checkbox" onClick={handlePasswordShow} /> Show
                  password
                </span>
              </div>

              <div className="forgot-pass">
                <Link to="/forget" className="forgot-link">
                  Forgot Password
                </Link>
              </div>

              <button type="submit" className="btn">
                Login
              </button>

              <div className="login-link">
                <p>
                  Don't have an account?
                  <Link to="/signup" className="signin-link">
                    Register
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
