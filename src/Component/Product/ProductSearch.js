import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Base from '../../Base/Base';
import { toast } from 'react-toastify';
import Loader from '../../Base/Loader';
import FollowData from '../Home/FollowData';

const ProductSearch = () => {
    const navigate = useNavigate();
    const { keyword } = useParams();

    // Local state to hold products
    const [mockProducts, setMockProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]); // State to hold cart items

    // Mock fetch products (no backend)
    useEffect(() => {
        const fetchMockProducts = () => {
            setLoading(true);
            // Simulated product data (can vary based on keyword)
            const products = [
                {
                    _id: "1",
                    name: "Product 1",
                    price: 1000,
                    images: [{ image: "https://via.placeholder.com/150" }],
                    user: { username: "User1", _id: "u1", followers: 120 },
                    likes: [1, 2, 3]
                },
                {
                    _id: "2",
                    name: "Product 2",
                    price: 1500,
                    images: [{ image: "https://via.placeholder.com/150" }],
                    user: { username: "User2", _id: "u2", followers: 100 },
                    likes: [4, 5]
                },
                // Add more mock products here if needed
            ];
            setMockProducts(products);
            setLoading(false);
        };

        fetchMockProducts();
    }, [keyword]);

    // Simulate adding a product to the cart
    const handleAddToCart = (product) => {
        // Update cart with the added product
        setCart([...cart, product]);

        // Display success message
        toast("Item added to cart!", {
            type: "success",
            position: toast.POSITION.BOTTOM_CENTER,
        });
    };

    // Navigate to product details page
    const handleProductPage = (product) => {
        navigate(`/product/${product._id}`, { state: { product } });
    };

    return (
        <Base>
            <div id="search-back-btn">
                <button onClick={() => navigate(-1)}>BACK</button>
            </div>
            {loading ? (
                <Loader />
            ) : (
                <div className="container">
                    {mockProducts &&
                        mockProducts.map((product) => (
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
                                <hr style={{ margin: "0px 5px" }} />

                                <div
                                    className="product"
                                    onClick={() => handleProductPage(product)}
                                >
                                    <img src={product.images[0].image} alt="" />
                                    <div>
                                        <h1 className="pro-name">{product.name}</h1>
                                        <hr style={{ width: "19vw" }} />
                                        <h1 className="price">₹{product.price}</h1>
                                        <span style={{ padding: "20px" }}>
                                            <i className="fa fa-heart" style={{ color: "red" }}></i>{" "}
                                            <span>{product.likes.length}</span>
                                        </span>
                                    </div>
                                </div>

                                <div className="product-add-to-cart">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        style={{ backgroundColor: "#4CAF50", color: "white" }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </Base>
    );
};

export default ProductSearch;
