import React, { useState, useEffect } from 'react';
import '../App.css'; // Import a CSS file for custom styles
import axios from 'axios';
import about1 from '../images/1.jpeg';
import about2 from '../images/2.jpeg';
import about3 from '../images/3.jpg';
import about4 from '../images/4.jpg';
import about5 from '../images/5.jpg';
import about6 from '../images/6.jpg';
import about7 from '../images/7.jpg';
import about8 from '../images/8.jpg';
import about9 from '../images/9.jpg';
import about10 from '../images/10.jpg';
import about11 from '../images/about.jpg';

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantityPerPlant, setQuantityPerPlant] = useState({}); // Store quantity for each plant
  const imageMapping = {
    1: about1,
    2: about2,
    3: about3,
    4: about4,
    5: about5,
    6: about6,
    7: about7,
    8: about8,
    9: about9,
    10: about10,
    11: about11,
  };

  useEffect(() => {
    // Fetch plant data from your server using axios
    axios
      .get('http://localhost:8060/Plant/plants') // Replace with your actual API endpoint
      .then((response) => {
        setPlants(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const incrementQuantity = (plantId) => {
    setQuantityPerPlant((prevQuantity) => ({
      ...prevQuantity,
      [plantId]: (prevQuantity[plantId] || 1) + 1,
    }));
  };

  const decrementQuantity = (plantId) => {
    if (quantityPerPlant[plantId] > 0) {
      setQuantityPerPlant((prevQuantity) => ({
        ...prevQuantity,
        [plantId]: prevQuantity[plantId] - 1,
      }));
    }
  };

  const addToCart = (plant) => {
    const quantity = quantityPerPlant[plant.id] || 1; // Get quantity for the selected plant

    // Create a copy of the plant object with the selected quantity
    const plantWithQuantity = { ...plant, quantity };

    axios
      .post(`http://localhost:8060/Cart/carts/add`, plantWithQuantity) // Adjust the URL to your actual route
      .then((response) => {
        setCart([...cart, plantWithQuantity]);
        // Reset the quantity back to 1 after adding to the cart
        setQuantityPerPlant((prevQuantity) => ({
          ...prevQuantity,
          [plant.id]: 1,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const plantRows = [];
  let currentRow = [];
  for (let i = 0; i < plants.length; i++) {
    currentRow.push(plants[i]);
    if (currentRow.length === 2 || i === plants.length - 1) {
      plantRows.push(currentRow);
      currentRow = [];
    }
  }

  return (
    <div className="HomeBack">
      <div
        style={{
          fontSize: '30px',
          fontFamily: 'italic',
          padding: '10px',
          marginLeft: '350px',
          fontWeight:'600',
          color:'black'
        }}
      >
        AVAILABLE PLANTS RIGHT NOW
      </div>
      <div >
        {plantRows.map((row, index) => (
          <div className="plant-row" style={{color:'black'}} key={index}>
            {row.map((plant) => (
              <div key={plant.id} className="plant-container">
                <div className="plant-item">
                  <h3>{plant.name}</h3>
                  <img
                    src={imageMapping[plant.id]}
                    alt={`Plant ${plant.id}`}
                    style={{
                      width: '200px',
                      borderRadius: '20px',
                      boxShadow: '2px 2px 5px 2px',
                    }}
                  />
                  <p>{plant.description}</p>
                  <p>${plant.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => decrementQuantity(plant.id)}
                      className="btn btn-secondary"
                    >
                      -
                    </button>
                    <span>{quantityPerPlant[plant.id] || 1}</span>
                    <button
                      onClick={() => incrementQuantity(plant.id)}
                      className="btn btn-secondary"
                    >
                      +
                    </button>
                  </div>
                  <button
                    style={{ marginTop: '10px' }}
                    onClick={() => addToCart(plant)}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
