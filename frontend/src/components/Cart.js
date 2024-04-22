import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the server
    axios.get('http://localhost:8060/Cart/carts') // Replace with your actual API endpoint
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const deleteItem = (itemId) => {
    console.log('Deleting item with ID:', itemId);

    // Make an API call to delete the item with the specified itemId
    axios.delete(`http://localhost:8060/Cart/carts/${itemId}`) // Adjust the URL to your actual delete route
      .then(() => {
        console.log('Item deleted successfully');

        // Update the cart items by removing the item with the specified itemId
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item._id !== itemId));
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2);
  };

  return (
    <div>
      <div>
      <div style={{fontSize:'20px',padding:'30px',marginLeft:'550px',fontWeight:'700'}}>Your Plant Order</div>
      <table className="table" style={{padding:'30px'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Item Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.quantity * item.price).toFixed(2)}</td>
              <td>
                <button
                  onClick={() => deleteItem(item._id)}
                  className="btn btn-danger colorful-button "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{marginLeft:'580px'}}>
        <p>Total Price: ${calculateTotalPrice()}</p>
        <button
          className="btn btn-primary"
          style={{marginLeft:'35px'}}>
        
          Buy Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
