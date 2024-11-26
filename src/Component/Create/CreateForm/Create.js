import React, { useState } from 'react';
import Base from '../../../Base/Base';
import './Create.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Create() {
  // Simulated categories
  const categories = [
    { _id: '1', name: 'Electronics' },
    { _id: '2', name: 'Fashion' },
    { _id: '3', name: 'Home Appliances' },
    { _id: '4', name: 'Books' },
    { _id: '5', name: 'Toys' },
  ];

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState(0);
  const [seller, setSeller] = useState('');
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const navigate = useNavigate();

  // Handle image upload
  const onImagesChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, file]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    // Simulate product creation
    const product = {
      name,
      price,
      stock,
      description,
      seller,
      category,
      images,
    };

    // Log product creation (simulating backend interaction)
    console.log('Product Created:', product);

    // Show success toast
    toast('Product Created Successfully!', {
      type: 'success',
      position: toast.POSITION.BOTTOM_CENTER,
    });

    // Reset the form fields
    setName('');
    setPrice('');
    setDescription('');
    setCategory('');
    setStock(0);
    setSeller('');
    setImages([]);
    setImagesPreview([]);

    // Navigate back to the home page (or any other page)
    navigate('/home');
  };

  return (
    <Base>
      <div className="row">
        <div className="col-12 col-md-2"></div>
        <div className="col-12 col-md-10 create-container">
          <div className="back-btn">
            <button onClick={() => navigate(-1)}>BACK</button>
          </div>
          <div className="wrapper my-5">
            <form
              onSubmit={submitHandler}
              className="shadow-lg create-box"
              encType="multipart/form-data"
            >
              <h1 className="mb-4 create-head">New Product</h1>

              {/* Product Name */}
              <div className="form-group create-form-group">
                <label htmlFor="name_field">Name</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  placeholder="Enter product name..."
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>

              {/* Product Price */}
              <div className="form-group create-form-group">
                <label htmlFor="price_field">Price</label>
                <input
                  type="text"
                  id="price_field"
                  className="form-control"
                  placeholder="Enter product price..."
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  required
                />
              </div>

              {/* Product Description */}
              <div className="form-group create-form-group">
                <label htmlFor="description_field">Description</label>
                <textarea
                  className="form-control"
                  id="description_field"
                  rows="8"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter product description..."
                  value={description}
                  required
                ></textarea>
              </div>

              {/* Product Category */}
              <div className="form-group create-form-group">
                <label htmlFor="category_field">Category</label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-control"
                  id="category_field"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Stock */}
              <div className="form-group create-form-group">
                <label htmlFor="stock_field">Stock</label>
                <input
                  type="number"
                  id="stock_field"
                  className="form-control"
                  placeholder="Enter product Availability..."
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}
                  required
                />
              </div>

              {/* Seller Name */}
              <div className="form-group create-form-group">
                <label htmlFor="seller_field">Seller Name</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  placeholder="Enter product seller name..."
                  onChange={(e) => setSeller(e.target.value)}
                  value={seller}
                  required
                />
              </div>

              {/* Product Images */}
              <div className="form-group create-form-group">
                <label>Images</label>
                <div className="custom-file">
                  <input
                    type="file"
                    name="product_images"
                    className="custom-file-input"
                    id="customFile"
                    multiple
                    onChange={onImagesChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    <h3>Choose Images</h3>
                  </label>
                </div>
                <div className="create-img">
                  {imagesPreview.map((image, index) => (
                    <img
                      className="mt-3 mr-2 creating-images"
                      key={index}
                      src={image}
                      alt={`Image Preview ${index}`}
                    />
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                id="login_button"
                type="submit"
                className="create-btn"
              >
                CREATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </Base>
  );
}
