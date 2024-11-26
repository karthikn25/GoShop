import React, { useState, useEffect } from "react";
import "./OrderLocate.css";
import Base from "../../../Base/Base";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderLocate() {
  const navigate = useNavigate();
  const location = useLocation();

  // Simulating the order data since we don't have backend interaction
  const [orderData, setOrderData] = useState({
    user: {
      username: "John Doe",
    },
    shippingInfo: {
      address: "1234 Main St, Springfield, IL",
      totalPrice: 1299,
    },
    payment: true,
    orderItems: [
      {
        product: {
          name: "Product 1",
          price: 999,
          images: [{ image: "https://via.placeholder.com/150" }],
        },
      },
    ],
  });

  // Normally, you'd get this data from location.state, but here we simulate it.
  useEffect(() => {
    // In a real application, you'd get the data from location.state
    // Here, we just simulate it.
    if (location.state && location.state.p) {
      setOrderData(location.state.p);
    }
  }, [location.state]);

  return (
    <Base>
      <div className="locate-order-container">
        <div className="back-btn">
          <button onClick={() => navigate(-1)}>BACK</button>
        </div>
        <div className="user-detail">
          <div className="user-address">
            <h3>
              <b>Shipping Address</b>
            </h3>
            <h4>{orderData.user.username}</h4>
            <h6>Address: {orderData.shippingInfo.address}</h6>
          </div>
          <div className="payment-detail">
            <h3>
              <b>Payment Method</b>
            </h3>
            <h5>{orderData.payment ? "Online Payment" : "Cash On Delivery"}</h5>
          </div>
          <div className="order-summery-class">
            <h3>
              <b>Order Summary</b>
            </h3>
            <h6>
              <span>
                Item Price: <span>₹{orderData.orderItems[0].product.price}</span>
              </span>
            </h6>
            <h6>
              <span>
                Convenience Fee: <strike>₹70</strike>
              </span>
            </h6>
            <h6>
              <span>
                Delivery Fee: <strike>₹40</strike>
              </span>
            </h6>
            <h5>
              <b>
                <span>
                  Grand Total: <span>₹{orderData.shippingInfo.totalPrice}</span>
                </span>
              </b>
            </h5>
          </div>
        </div>

        <div className="product-detail">
          <div className="product-image">
            <img alt="img" src={orderData.orderItems[0].product.images[0].image} />
          </div>
          <div className="product-info">
            <h5>{orderData.orderItems[0].product.name}</h5>
            <h4>₹{orderData.orderItems[0].product.price}</h4>
            <button className="reorder-btn">
              <i className="bx bx-repeat"></i>Buy it again
            </button>
          </div>
        </div>
      </div>
    </Base>
  );
}
