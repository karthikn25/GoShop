import React, { useState } from 'react';
import Base from '../../../Base/Base';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function PostEdit() {
  // Mock categories for showcasing
  const categories = [
    { _id: '1', name: 'Electronics' },
    { _id: '2', name: 'Fashion' },
    { _id: '3', name: 'Home Decor' },
    { _id: '4', name: 'Books' },
    { _id: '5', name: 'Sports' },
  ];

  const [name, setName] = useState("Product 1");
  const [price, setPrice] = useState("999");
  const [description, setDescription] = useState("This is a great product!");
  const [category, setCategory] = useState("1");
  const [stock, setStock] = useState(100);
  const [seller, setSeller] = useState("John Doe");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ]);

  const navigate = useNavigate();

  // Handle image selection and preview
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

  // Simulate submission of product data (without actual backend call)
  const submitHandler = (e) => {
    e.preventDefault();

    // Mock product data for showcasing
    const newProduct = {
      name,
      price,
      description,
      category,
      stock,
      seller,
      images,
    };

    console.log("Product Created:", newProduct);

    toast('Product Created Successfully!', {
      type: 'success',
      position: toast.POSITION.BOTTOM_CENTER,
    });

    // Navigate to homepage (or any other page for showcasing purposes)
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
              <h1 className="mb-4 create-head">Edit Product</h1>

              <div className="form-group create-form-group">
                <label htmlFor="name_field">Name</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  placeholder="Enter product name..."
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="form-group create-form-group">
                <label htmlFor="price_field">Price</label>
                <input
                  type="text"
                  id="price_field"
                  className="form-control"
                  placeholder="Enter product price..."
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>

              <div className="form-group create-form-group">
                <label htmlFor="description_field">Description</label>
                <textarea
                  className="form-control"
                  id="description_field"
                  rows="8"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter product description..."
                  value={description}
                ></textarea>
              </div>

              <div className="form-group create-form-group">
                <label htmlFor="category_field">Category</label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-control"
                  id="category_field"
                  value={category}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group create-form-group">
                <label htmlFor="stock_field">Stock</label>
                <input
                  type="number"
                  id="stock_field"
                  className="form-control"
                  placeholder="Enter product Availability..."
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}
                />
              </div>

              <div className="form-group create-form-group">
                <label htmlFor="seller_field">Seller Name</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  placeholder="Enter product seller name..."
                  onChange={(e) => setSeller(e.target.value)}
                  value={seller}
                />
              </div>

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
                      alt={`Image Preview`}
                    />
                  ))}
                </div>
              </div>

              <button id="login_button" type="submit" className="create-btn">
                CREATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </Base>
  );
}
