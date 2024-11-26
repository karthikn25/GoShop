import React, { useState } from "react";
import Base from "../../Base/Base";
import "./Cart.css";
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);  // Default count for items in the cart

    const handleInc = () => {
        setCount(count + 1);  // Increase the count
    };

    const handleDec = () => {
        if (count > 1) {
            setCount(count - 1);  // Decrease the count
        }
    };

    const handleProductPage = (item) => {
        navigate(`/product/${item.product._id}`, { state: { item } });  // Navigate to product page
    };

    // Sample cart item data
    const cartItems = [
        {
            product: {
                _id: "1",
                name: "Sample Product",
                price: 999,
                images: [{ image: "https://via.placeholder.com/150" }],
                user: { username: "Seller 1" },
                stock: 10,
            },
        },
        // Add more sample items if needed
    ];

    return (
        <Base>
            <div className="cart-box-container">
                <div className="back-btn">
                    <button onClick={() => navigate(-1)}>BACK</button>
                </div>

                {cartItems.length === 0 ? (
                    <h1 style={{ margin: '15rem 25rem' }}>Your Cart is Empty</h1>
                ) : (
                    <div className="cart-container row" style={{ position: "relative" }}>
                        <div className="cart-details-container col-6" style={{ width: "100%" }}>
                            {cartItems.map((item) => (
                                <div key={item.product._id} className="row cart-box">
                                    <div className="col-4 cart-img" style={{ width: "30%", padding: "10px" }}>
                                        <img alt="img" src={item.product.images[0].image} />
                                    </div>
                                    <div className="col-4" style={{ width: "50%" }}>
                                        <h4 className="cart-product-name" onClick={() => handleProductPage(item)}>
                                            {item.product.name}
                                        </h4>
                                        <p style={{ color: "#878787", textTransform: "capitalize" }} className="seller-name">
                                            Seller: {item.product.user.username}
                                        </p>
                                        <br />
                                        <h4 className="cart-product-price">
                                            <strike style={{ color: "#878787" }}>₹1,49,999</strike> ₹{item.product.price}
                                        </h4>
                                        <div className="cart-add-items row">
                                            <div className="stockCounter d-inline">
                                                <span className="btn btn-danger" onClick={handleDec}>-</span>
                                                <input
                                                    type="number"
                                                    className="form-control count d-inline"
                                                    value={count}
                                                    readOnly
                                                />
                                                <span className="btn btn-primary plus" onClick={handleInc}>+</span>
                                            </div>
                                        </div>
                                        <h6 style={{ color: "green", fontWeight: "600" }} className="cart-product-offer">16% Off</h6>
                                        <div className="cart-links">
                                            <h6 className="cart-product-name" style={{ fontWeight: "550" }}>SAVE FOR LATER</h6>
                                            <h6 className="cart-product-name1" style={{ paddingLeft: "40px", fontWeight: "550" }}>
                                                REMOVE
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="col-4 cart-dispatch-detail" style={{ width: "20%" }}>
                                        <p>
                                            Delivery by Sun Sep 24 |
                                            <span style={{ color: "green" }}>
                                                <strike style={{ color: "#878787" }}>₹40</strike> Free
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-buy-container">
                            <div className="total-buy-box">
                                <h4 className="total-product">Total Product: {cartItems.length}</h4>
                                <h3 className="total-price">Total Price: ₹{cartItems.reduce((total, item) => total + item.product.price * count, 0)}</h3>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Cart */}
                <div className="mobile-cart-container">
                    {cartItems.map((item) => (
                        <div key={item.product._id} className="mobile-cart-products">
                            <div className="mobile-cart-product-img">
                                <img src={item.product.images[0].image} alt="img" />
                                <div className="mobile-cart-product-detail">
                                    <p className="mobile-cart-p-name">{item.product.name}</p>
                                    <p className="mobile-cart-p-name">₹{item.product.price}</p>
                                    <div className="mobile-cart-no">
                                        <div className="mobile-cart-inc">+</div>
                                        <input type="text" value={count} readOnly />
                                        <div className="mobile-cart-dec">-</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mobile-cart-price">
                        <div className="mobile-cart-p-quantity">Total Product: {cartItems.length}</div>
                        <div className="m-b-p-price">₹{cartItems.reduce((total, item) => total + item.product.price * count, 0)}</div>
                        <div className="mobile-cart-buy-btn">
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    );
}
