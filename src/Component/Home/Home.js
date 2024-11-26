import React, { useEffect, useState } from "react";
import Base from "../../Base/Base";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../Base/Loader";
import FollowData from "./FollowData";

export default function Home() {
  // Simulating the authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState({
    _id: "user123",
    username: "John Doe",
    token: "fakeToken",
  });

  // Simulating the state for products
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([
    {
      _id: "product1",
      name: "Product 1",
      price: 999,
      images: [{ image: "https://via.placeholder.com/150" }],
      user: {
        _id: "user123",
        username: "John Doe",
        followers: ["user123"],
      },
      likes: [1, 2, 3],
    },
    {
      _id: "product2",
      name: "Product 2",
      price: 1999,
      images: [{ image: "https://via.placeholder.com/150" }],
      user: {
        _id: "user456",
        username: "Jane Doe",
        followers: ["user123"],
      },
      likes: [1, 2],
    },
  ]);

  // Simulating category data (dummy categories)
  const categories = [
    {
      _id: "1",
      name: "Electronics",
      photo: "https://via.placeholder.com/150",
    },
    {
      _id: "2",
      name: "Fashion",
      photo: "https://via.placeholder.com/150",
    },
    {
      _id: "3",
      name: "Home Decor",
      photo: "https://via.placeholder.com/150",
    },
    {
      _id: "4",
      name: "Books",
      photo: "https://via.placeholder.com/150",
    },
    {
      _id: "5",
      name: "Sports",
      photo: "https://via.placeholder.com/150",
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    // Simulate fetching products after a delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleCategoryNavigate = (category) => {
    if (category.name) {
      navigate(`/category/${category.name}`);
    }
  };

  const handleProductPage = (product) => {
    navigate(`/product/${product._id}`, { state: { product } });
  };

  return (
    <>
      {isAuthenticated ? (
        <Base>
          {loading ? (
            <Loader />
          ) : (
            <div className="container">
              <div className="row">
                <div className="col reel-type-category">
                  {/* Displaying Categories */}
                  {categories.map((category) => (
                    <div
                      className="category-reel"
                      onClick={() => handleCategoryNavigate(category)}
                      key={category._id}
                    >
                      <img src={category.photo} alt={category.name} />
                      <p style={{ fontWeight: "550" }}>{category.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {products &&
                products.map((product) => (
                  <div className="card" key={product._id}>
                    <div className="profile-card">
                      <div className="user-info">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_IULLOXJT80cLu-eRqkRGrHY23yLEx4p0w&usqp=CAU"
                          alt="img"
                        />
                        <h1 className="name">{product.user.username}</h1>
                      </div>

                      <FollowData
                        _id={product.user._id}
                        followers={product.user.followers}
                      />
                    </div>

                    <hr
                      style={{ margin: "0px 5px" }}
                      className="profile-divider"
                    />

                    <div className="product">
                      <img
                        src={product.images[0].image}
                        alt={product.name}
                        onClick={() => handleProductPage(product)}
                      />
                      <div>
                        <h1
                          className="pro-name"
                          onClick={() => handleProductPage(product)}
                        >
                          {product.name}
                        </h1>

                        <hr className="product-divider" />

                        <h1
                          className="price"
                          onClick={() => handleProductPage(product)}
                        >
                          ₹{product.price}
                        </h1>
                        <span style={{ padding: "20px" }}>
                          <i className="fa fa-heart" style={{ color: "red" }} />
                          <span className="like-no">{product.likes.length}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </Base>
      ) : (
        navigate("/")
      )}
    </>
  );
}
