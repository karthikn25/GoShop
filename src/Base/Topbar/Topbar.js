import React, { useState } from "react";
import "./Topbar.css";
import Search from "./Search";
import { useNavigate } from "react-router-dom";


export default function Topbar() {
  const navigate = useNavigate("");
  const [keyword, setKeyword] = useState();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => setIsOpenMenu(!isOpenMenu);
  const handleClick = async (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  };
  const [isOpen, setIsOpen] = useState();

  const toggle = () => setIsOpen(!isOpen);

  return (
  
      
        <div className="topbar">
          <nav className="nav-items">
            
            <div className="topbar-pro">
            <span>
              <img
                alt="img"
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                className="image"
               
              />
              <span
              className="topbar-username"
            >
              Joan doe
            </span>
            </span>
          </div>
              <div className="topbar-search">
                <Search />
              </div>
              <ul id="nav-list">
              <li className="icon" >
                <span className="t-icon">
                  <i class="bx bx-bell"></i>
                </span>
              </li>
              <li className="icon">
                <span className="t-icon" onClick={() => navigate("/orders")}>
                  <i class="bx bx-shopping-bag"></i>
                </span>
              </li>

              <li className="icon">
              <span className="t-icon" >
              <i class='bx bx-cog'></i>
              </span>
              </li>

              <li className="icon">
              <span className="t-icon" >
              <i class='bx bx-info-circle' onClick={()=>navigate("/about")}></i> 
              </span>
              </li>
            </ul>

          </nav>
          <nav className="nav-mobile-items">
            <ul>
              <h3 className="home-logo">Go Shop</h3>

              <li className="home-src">
                <input
                  type="text"
                  placeholder="Search for..."
                  onChange={(e) => setKeyword(e.target.value)}
                  value={keyword}
                />
                <i
                  class="bx bx-search-alt topbar-src-icon" style={{position:"relative",right:"25px",top:"5px",color:"black"}}
                ></i>
              </li>
              
              <li>
                <i class="bx bx-bell"></i>
              </li>
              <li>
              <i class="bx bx-menu"></i>
            </li>
             
            </ul>
          </nav>
        </div>
      
      
  );
}
