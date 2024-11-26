import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Handle form submission (frontend-only)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate the success of sending the password reset link
    if (email) {
      toast.success("Password reset link sent! Please check your email.");
      setTimeout(() => {
        navigate("/verify");
      }, 2000); // Navigate to the verify page after 2 seconds to simulate success
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <div className="sign-container">
      <div className="row">
        <div className="wrapper">
          <div
            className="form-container signup"
            style={{
              maxWidth: "26rem",
              paddingRight: "100px",
              marginTop: "150px",
            }}
          >
            <form
              action="#"
              style={{ paddingLeft: "30rem" }}
              onSubmit={handleSubmit}
            >
              <h2
                style={{
                  marginRight: "20rem",
                  paddingLeft: "40px",
                  position: "relative",
                  left: "30px",
                }}
              >
                Forgot Password
              </h2>

              <div className="form-group">
                <input
                  type={"email"}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  placeholder="Enter your email"
                />
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>

                <label htmlFor="email">Email</label>
              </div>

              <button className="btn" type="submit">
                Verify
              </button>

              <ToastContainer />

              <div
                className="login-link"
                style={{ paddingLeft: "130px", fontSize: "25px" }}
              >
                <Link to="/" className="signin-link">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
