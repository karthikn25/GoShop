import React, { useEffect, useState } from "react";
import "./Product.css";
import Base from "../../Base/Base";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Base/Loader";
import Likes from "./Likes";
import Share from "./Share";

export default function Product() {
  const navigate = useNavigate();
  const location = useLocation();

  // Mock product data for showcasing
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getProd();
    getComment();
  }, []);

  // Simulate fetching product data (mocked)
  const getProd = () => {
    setLoading(true);
    try {
      // Mocked product data
      const data = {
        product: {
          _id: "1",
          name: "Awesome Product",
          price: "₹1999",
          stock: 20,
          description: "This is an amazing product that will solve your problems.",
          images: [
            { image: "https://via.placeholder.com/400" },
            { image: "https://via.placeholder.com/400?text=Image+2" },
            { image: "https://via.placeholder.com/400?text=Image+3" },
          ],
          likes: 100,
        },
      };
      setItems(data.product);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Simulate fetching comments (mocked)
  const getComment = () => {
    setLoading(true);
    try {
      const mockComments = [
        { user: { username: "JohnDoe", avatar: null }, content: "Great product!", createdAt: new Date().toISOString() },
        { user: { username: "JaneDoe", avatar: null }, content: "Worth the price.", createdAt: new Date().toISOString() },
      ];
      setComment(mockComments);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [img, setImg] = useState(items.images ? items.images[0].image : "");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast("Item added to cart!", {
      type: "success",
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const handleChangeImage = (im) => {
    setImg(im.image);
  };

  const handleBuyNow = () => {
    toast("Redirecting to checkout!", {
      type: "success",
      position: toast.POSITION.BOTTOM_CENTER,
    });
    navigate(`/checkout/${items._id}`, { state: { items, quantity } });
  };

  return (
    <Base>
      {loading ? (
        <Loader />
      ) : (
        <div className="product-container">
          <div className="back-btn">
            <button onClick={() => navigate(-1)}>BACK</button>
          </div>
          <div className="row product-img-row">
            <div className="col-4 product-images" style={{ width: "30%" }}>
              <div className="product-img-box">
                <img src={img} alt="product" />
              </div>
            </div>
            <div className="col-4 product-buy" style={{ width: "50%" }}>
              <h4>{items.name}</h4>
              <h3>{items.price}</h3>
              <h5>In Stock: {items.stock}</h5>
              <div className="stockCounter d-inline">
                <span
                  className="btn btn-danger"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </span>

                <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                <span
                  className="btn btn-primary plus"
                  onClick={() =>
                    setQuantity(quantity < items.stock ? quantity + 1 : items.stock)
                  }
                >
                  +
                </span>
              </div>
              <div className="product-buy-btn">
                <button
                  className="product-add-btn"
                  style={{ background: "#bf00ff", color: "white" }}
                  disabled={items.stock === 0}
                  onClick={handleAddToCart}
                >
                  <i className="bx bx-cart"></i> Add to cart
                </button>
                <button
                  style={{ background: "#7fff84" }}
                  onClick={handleBuyNow}
                  className="product-b-btn"
                >
                  <i className="bx bxs-truck"></i> Buy Now
                </button>
              </div>
            </div>
            <div className="col-4 product-wishlist" style={{ width: "20%" }}>
              <Likes product={items} />
              <Share product={items} />
            </div>
          </div>
          <div className="row image-show">
            <div className="p-images" style={{ marginLeft: "25px" }}>
              {items.images.map((im, index) => (
                <div
                  key={index}
                  className="img-slide"
                  onClick={() => handleChangeImage(im)}
                >
                  <img alt="" src={im.image} />
                </div>
              ))}
            </div>
          </div>
          <div className="row product-decription-row">
            <div className="col-12 product-details" style={{ width: "100%" }}>
              <div className="product-detail-box">
                <h2>Product Details</h2>
                <hr />
                <ul>
                  <li>{items.description}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-4 product-reviews" style={{ width: "15%" }}>
            <div className="reviews-box">
              <h3>Reviews</h3>
              <hr />
              <ul>
                {comment.map((c, index) => (
                  <div className="reviewer-box" key={index}>
                    <div className="reviewer-info">
                      <img
                        src={
                          c.user.avatar ?? "https://cdn-icons-png.flaticon.com/512/21/21104.png"
                        }
                        alt="img"
                      />
                      <h4 className="reviewer-name">{c.user.username}</h4>
                    </div>
                    <div className="review-content">
                      <li>{c.content}</li>
                      <h6>{c.createdAt.slice(0, 10)}</h6>
                      <h6>{c.createdAt.slice(11, 19)}</h6>
                      <span className="comment-like">
                        <Likes product={items} />
                        <h6>8</h6>
                      </span>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Base>
  );
}
