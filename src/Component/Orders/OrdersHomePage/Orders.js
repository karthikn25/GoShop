import React, { useEffect, useState } from "react";
import Base from "../../../Base/Base";
import "./Orders.css";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const navigate = useNavigate("");

  // Simulate order data, as we don't have an actual backend here
  const [orderData, setOrderData] = useState([]);
  const [deliverDate, setDeliverDate] = useState("");

  useEffect(() => {
    // Simulating the fetch of orders data
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      // Simulate user token and order data
      const user = { token: "fake-token" }; // Simulated user token
      const mockOrdersData = [
        {
          orderItems: [
            {
              product: {
                name: "Product 1",
                price: 999,
                images: [{ image: "https://via.placeholder.com/150" }],
              },
            },
          ],
          payment: true,
          createdAt: new Date().toISOString(),
        },
        {
          orderItems: [
            {
              product: {
                name: "Product 2",
                price: 499,
                images: [{ image: "https://via.placeholder.com/150" }],
              },
            },
          ],
          payment: false,
          createdAt: new Date().toISOString(),
        },
      ];
      
      // Simulating a successful response from an API
      setOrderData(mockOrdersData);

      // Calculate delivery date (3 days from order creation)
      const someDate = new Date(mockOrdersData[0].createdAt);
      const numberOfDaysToAdd = 3;
      const result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
      const deliveryDate = new Date(result).toISOString().slice(0, 10);
      setDeliverDate(deliveryDate);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLocate = (p) => {
    navigate(`/locate-order`, { state: { p } });
  };

  return (
    <Base>
      <div className="orders-container">
        <div className="back-btn">
          <button onClick={() => navigate(-1)}>BACK</button>
        </div>
        <div className="search-orders">
          <input type="text" placeholder="Search For..." />
          <button className="order-search-btn">SEARCH</button>
        </div>
        {orderData &&
          orderData.map((p, index) => (
            <div key={index}>
              {p.orderItems.map((i, index) => (
                <div
                  className="my-orders"
                  key={index}
                  onClick={() => handleLocate(p)}
                >
                  <div className="order-product-img">
                    <img alt="image" src={i.product.images[0].image} />
                  </div>
                  <div className="order-product-detail">
                    <div className="row">
                      <div className="col" style={{ marginLeft: "20px" }}>
                        <div className="order-pro-name">
                          <h5>{i.product.name}</h5>
                        </div>

                        {p.payment ? (
                          <p className="order-success">Payment Success</p>
                        ) : (
                          <p className="order-cod">Cash on Delivery</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="order-product-price">
                    <h5>₹{i.product.price}</h5>
                  </div>
                  <div className="order-dispatch-detail">
                    <h5>Delivered on {deliverDate}</h5>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </Base>
  );
}
