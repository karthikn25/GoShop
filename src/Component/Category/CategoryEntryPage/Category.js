import React from "react";
import Base from "../../../Base/Base";
import "./Category.css";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();

  // Sample category data
  const categories = [
    {
      name: "Electronics",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Fashion",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Home Appliances",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Books",
      photo: "https://via.placeholder.com/150",
    },
  ];

  const handleNavigate = (category) => {
    console.log(category);
    if (category.name) {
      navigate(`/category/${category.name}`);
    }
  };

  return (
    <Base>
      <div id="back-btn">
        <button onClick={() => navigate(-1)}>BACK</button>
      </div>
      <div className="cat-container">
        {categories.map((category, index) => (
          <div key={index} className="category-container">
            <div className="c-container" onClick={() => handleNavigate(category)}>
              <img src={category.photo} alt={category.name} />
              <h4 className="cat-name">{category.name}</h4>
              <h4 className="c-offer">Min. 50% Off</h4>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}
