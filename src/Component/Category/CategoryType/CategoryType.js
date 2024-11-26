import React from "react";
import Base from "../../../Base/Base";
import "./CategoryType.css";
import { useNavigate } from "react-router-dom";

export default function CategoryType() {
  const navigate = useNavigate();

  // Mock category data
  const category = {
    name: "Electronics", // Category Name
  };

  // Mock product data
  const products = [
    {
      _id: "1",
      name: "Smartphone XYZ",
      price: 19999,
      images: [{ image: "https://via.placeholder.com/150" }],
      user: {
        username: "JohnDoe",
        avatar: "https://via.placeholder.com/50",
        _id: "user1",
        followers: 150,
      },
      likes: [1, 2, 3],
    },
    {
      _id: "2",
      name: "Laptop ABC",
      price: 59999,
      images: [{ image: "https://via.placeholder.com/150" }],
      user: {
        username: "JaneDoe",
        avatar: "https://via.placeholder.com/50",
        _id: "user2",
        followers: 250,
      },
      likes: [1, 2, 3, 4, 5],
    },
    {
      _id: "3",
      name: "Headphones 123",
      price: 2999,
      images: [{ image: "https://via.placeholder.com/150" }],
      user: {
        username: "TechGuru",
        avatar: "https://via.placeholder.com/50",
        _id: "user3",
        followers: 500,
      },
      likes: [1, 2, 3, 4],
    },
  ];

  // Navigate to the product page
  const handleProductPage = (product) => {
    console.log(product.name);
    navigate(`/product/${product._id}`, { state: { product } });
  };

  return (
    <Base>
      <div className="category-type-container">
        <div className="back-btn">
          <button onClick={() => navigate(-1)}>BACK</button>
        </div>
        <h4 className="type-name">{category?.name}</h4>
        <div className="row type-row">
          {products.map((product) => (
            <div key={product._id} className="card">
              <div className="profile-card">
                <div className="user-info">
                  <img
                    src={product.user.avatar}
                    alt="img"
                    className="profile-avatar"
                  />
                  <h1 className="name">{product.user.username}</h1>
                </div>
                <div className="followers">
                  <span>{product.user.followers} Followers</span>
                </div>
              </div>
              <hr className="profile-divider" />
              <div className="product">
                <img
                  src={product.images[0].image}
                  alt={product.name}
                  className="product-img"
                  onClick={() => handleProductPage(product)}
                />
                <div>
                  <h1 className="pro-name" onClick={() => handleProductPage(product)}>
                    {product.name}
                  </h1>
                  <hr className="product-divider" />
                  <h1 className="price" onClick={() => handleProductPage(product)}>
                    ₹{product.price}
                  </h1>
                  <span style={{ padding: "20px" }}>
                    <i className="fa fa-heart" style={{ color: "red" }}></i>{" "}
                    <span>{product.likes.length}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
}
