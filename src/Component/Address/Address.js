import React, { useEffect, useState } from "react";
import Base from "../../Base/Base";
import "./Address.css";
import { Link, useNavigate } from "react-router-dom";


export const Address = () => {

  const navigate = useNavigate();




  

  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const [isSelectAddress,setIsSelectAddress]=useState(false);

  const [isOpenOrderConfirm, setIsOpenOrderConfirm] = useState(false);

  const toggle = () => setIsOpenLogin(!isOpenLogin);

  const toggle1 = () => setIsOpenAddress(!isOpenAddress);

  const toggle2 = () => setIsOpenOrderConfirm(!isOpenOrderConfirm);

 
 

  const [topping, setTopping] = useState("")

  const optionChange = e => {
    setTopping(e.target.value)
    console.log(topping)
  }




  return (
    <Base>

    
      <div className="order-confirm-container">
      <div className="back-btn">
        <button  onClick={()=>navigate(-1)}>BACK</button>

        </div>
     
        <>
      <div className="row user-info-row">
        <div className="col-12 user-info-box">
          <div className="user-info-head">
            <h2>Login</h2>
            <button
              className="change-btn"
              onClick={toggle}
              style={{ display: isOpenLogin ? "block" : "none" }}
            >
              Change
            </button>
          </div>

          <hr />
          <div
            className="row"
            style={{ height: isOpenLogin ? "60px" : "90px" }}
          >
            <div className="col-6 user-info-content">
              <h5>Name: Joan Doe</h5>
              <h5 style={{ display: isOpenLogin ? "none" : "block" }}>
                Email : johndoe@gmail.com
              </h5>
              <Link
                to="/"
                className="user-info-log"
                style={{
                  display: isOpenLogin ? "none" : "block",
                  
                }}
              >
                Logout & Signin to another Account
              </Link>
            </div>
            <div className="col-6">
              <button
                className="checkout-btn"
                onClick={toggle}
                style={{ display: isOpenLogin ? "none" : "block" }}
              >
                Continue Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
            </>
     

      <div className="row address-info-row">
      
        
        <div className="col-12 address-info-box">
         <div className="address-info-head">
                   <h2>DELIVERY ADDRESS</h2>


         <button className="address-add-btn" onClick={()=>navigate("/add/address")}><i class='bx bx-plus-circle'></i></button>

         </div>
         <hr />
       
         
        
        <div className="deliver-btn">
              <button
                onClick={toggle1}
                style={{ display: isOpenAddress ? "none" : "block" }}
              >
                DELIVER HERE
              </button>
            </div>
       </div>
        

        
      </div>

      <div className="row order-info-row">
        <div className="col-12 order-info-box" >
          <div className="row">
            <div className="col-12">
              <div className="order-info-head">
                <h2>ORDER SUMMERY</h2>
                <button
                  className="change-btn"
                  onClick={toggle2}
                  style={{ display: isOpenOrderConfirm ? "block" : "none" }}
                >
                  Change
                </button>
              </div>
              <hr style={{ display: isOpenOrderConfirm ? "none" : "block" }}/>
            </div>
          </div>
          <div className="row" style={{ display: isOpenOrderConfirm ? "none" : "block" }}>
            <div id="my-orders">
              <div id="order-product-img">
                <img
                  alt=""
                  src=""
                />
              </div>
              <div id="order-product-detail">
                <div className="row">
                  <div className="col add-pro-name">
                    <h5>Samsung galaxy s23 ultra</h5>
                  </div>
                </div>
                
              </div>
              <div id="order-product-price">
                <h5> ₹90000</h5>
              </div>
              <div id="order-dispatch-detail">
                <h5>
                  Delivered on Sep 23
                </h5>
                <p>Your item has been delivered</p>
              </div>
              
            </div>
            <div className="payment-option">
            <button className="order-confirm-btn cash-on-delivery" onClick={""}>Payment<p>(Cash on Delivery)</p></button>
            <button className="order-confirm-btn online-payment" style={{ display: isOpenOrderConfirm ? "none" : "block" }} >Payment<p>(Online Payment)</p></button>

            </div>

          </div>
        </div>
      </div>
         </div>

     
    </Base>
  );
};
