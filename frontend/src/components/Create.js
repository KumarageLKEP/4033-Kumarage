import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import your CSS file with custom styles

const CreateUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    delivery_address: '', // Changed to match your backend model
    phone_number: '', // Changed to match your backend model
    password: '', // Changed to match your backend model
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const createUser = async () => {
    try {
      const response = await axios.post('http://localhost:8060/User/add', user);
      if (response.status === 201) {
        alert('User created successfully');
        // Clear the form
        setUser({
          name: '',
          email: '',
          delivery_address: '',
          phone_number: '',
          password: '',
        });
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
<div className="container colorful-login">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <h2 className="mt-5 mb-4">Create User</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className="form-control colorful-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="form-control colorful-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="delivery_address">Delivery Address:</label>
          <input
            type="text"
            id="delivery_address"
            name="delivery_address"
            value={user.delivery_address}
            onChange={handleInputChange}
            className="form-control colorful-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={user.phone_number}
            onChange={handleInputChange}
            className="form-control colorful-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            className="form-control colorful-input"
          />
        </div>
        <button type="button" onClick={createUser} className="btn btn-primary colorful-button">
          Create User
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default CreateUser;
