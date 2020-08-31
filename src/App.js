import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/Courses';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  const [cart, setCart] = useState([]);
  

  const addToCart = (course) => {
    console.log('added');
    setCart([...cart, {...course}]);
  };

  const removeFromCart = (courseToRemove) => {
    setCart(cart.filter(course => course !== courseToRemove)
    );
  };

  const total = cart.reduce((total, course) => total + course.cost, 0);
  const totalCost = (total).toFixed(2);
  return (
    <div className="App">
      <Header cart={cart}></Header>
      <div className="course-container">
      <h1>Courses</h1>
      <div className="all-courses">
        <Courses addToCart={addToCart}></Courses> 
      </div>
      <div className="cart-items">
        <Cart cart={cart} removeFromCart={removeFromCart} totalCost={totalCost}></Cart>
      </div>
      </div>
    </div>
  );
}

export default App;
