import React, { useEffect, useState } from 'react'
import Base from '../../../Base/Base'
import './AddressForm.css'
import {  useNavigate } from 'react-router-dom';


export default function EditAddress() {

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNo, setPhoneNo] = useState(0);
  const [postalCode, setPostalCode] = useState("");

 


  const navigate = useNavigate();


 
 

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('address', address);
    formData.append('phoneNo', phoneNo);
    formData.append('postalCode', postalCode);
    console.log(formData);
  }




  return (
    <Base>
    
    <div className="row">
    <div className="col-12 col-md-2">
    </div>
    <div className="col-12 col-md-10 create-container">
    <div className="back-btn">
    <button  onClick={()=>navigate(-1)}>BACK</button>

    </div>
      <div className="wrapper my-5">
        <form onSubmit={submitHandler} className="shadow-lg create-box" encType='multipart/form-data'>
          <h1 className="mb-4 create-head">Edit Address</h1>

          <div className="form-group create-form-group">
            <label htmlFor="name_field">Name</label>
            <input
              type="text"
              id="name_field"
              className="form-control"
              placeholder='Enter your name...'
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group create-form-group">
          <label htmlFor="name_field">Countries</label>
          <select onChange={e => setCountry(e.target.value)}>
        
          </select>
        </div>
       

          <div className="form-group create-form-group">
            <label htmlFor="description_field">Address</label>
            <textarea
              className="form-control"
              id="description_field"
              rows="8"
              onChange={e => setAddress(e.target.value)}
              placeholder='Enter your Address...'
              value={address}
            ></textarea>
          </div>

      
          <div className="form-group create-form-group">
            <label htmlFor="stock_field">Phone Number</label>
            <input
              type="number"
              id="stock_field"
              className="form-control"
              placeholder='Enter Your Number...'
              onChange={e => setPhoneNo(e.target.value)}
              value={phoneNo}
            />
          </div>

          <div className="form-group create-form-group">
            <label htmlFor="seller_field">City</label>
            <input
              type="text"
              id="seller_field"
              className="form-control"
              placeholder='Enter Your City...'
              onChange={e => setCity(e.target.value)}
              value={city}
            />
          </div>
          
          <div className="form-group create-form-group">
          <label htmlFor="stock_field">Postal Code</label>
          <input
            type="number"
            id="stock_field"
            className="form-control"
            placeholder='Enter Your Postal Code...'
            onChange={e => setPostalCode(e.target.value)}
            value={postalCode}
          />
        </div>
    


          <button
            id="login_button"
            type="submit"
            className=" create-btn"
            
          >
            UPDATE
          </button>

        </form>
      </div>

    </div>
  </div>
    </Base>

  )
}