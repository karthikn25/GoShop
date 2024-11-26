import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Likes({ product }) {
  const { user } = useSelector((state) => state.authState);

  const [isLike, setIsLike] = useState(false);
  const [loadLike, setLoadLike] = useState(false);

  // Simulate handle Like
  const handleLike = async (id) => {
    if (loadLike) return;

    setLoadLike(true);

    // Simulate API call to "like" a product
    console.log(`Liked product with ID: ${id}`);

    setLoadLike(false);
    setIsLike(true);
  };

  // Simulate handle UnLike
  const handleUnLike = async (id) => {
    if (loadLike) return;

    setLoadLike(true);

    // Simulate API call to "unlike" a product
    console.log(`Unliked product with ID: ${id}`);

    setLoadLike(false);
    setIsLike(false);
  };

  // Check if the user has already liked the product
  useEffect(() => {
    // Simulate checking if the product is liked by the user
    if (product.likes.some((id) => id === user._id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [product, user._id]);

  return (
    <div className="product-icons">
      {
        // Conditionally render the like/unlike icon based on the isLike state
        isLike ? (
          <i
            className="bx bxs-heart"
            id="review-like"
            onClick={() => handleUnLike(product._id)}
            style={{ color: 'red' }}
          ></i>
        ) : (
          <i
            className="bx bx-heart"
            id="review-like"
            onClick={() => handleLike(product._id)}
            style={{ color: '' }}
          ></i>
        )
      }
    </div>
  );
}
