import React from 'react'
import Base from '../../../Base/Base'
import { useNavigate } from 'react-router-dom'
import './CreateItems.css'

export default function CreateItems() {
  const navigate = useNavigate()

  // Simulated categories for the frontend
  const categories = [
    { _id: '1', name: 'Electronics', photo: 'https://via.placeholder.com/150' },
    { _id: '2', name: 'Fashion', photo: 'https://via.placeholder.com/150' },
    { _id: '3', name: 'Home Appliances', photo: 'https://via.placeholder.com/150' },
    { _id: '4', name: 'Books', photo: 'https://via.placeholder.com/150' },
    { _id: '5', name: 'Toys', photo: 'https://via.placeholder.com/150' },
  ];

  const handleClick = (category) => {
    navigate(`/create/${category.name}`, { state: { category } });
  }

  return (
    <Base>
      <div className="categories-container">
        {categories.map((category) => (
          <div className='category-container1' key={category._id}>
            <div 
              className='c-container1' 
              style={{ cursor: "pointer" }} 
              onClick={() => handleClick(category)}
            >
              <img className='img' src={category.photo} alt={category.name} />
              <h4>{category.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}
