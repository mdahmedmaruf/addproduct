import React from 'react';

const Cart = ({cart, removeFromCart, totalCost}) => {
    return (
        <div>
            <div className="cart">
            <p>Total Course: {cart.length}</p>
                {cart.map((course, idx) => (
                <div key={idx}>
                    
                    <h3>{course.name}</h3>
                    <h4>${course.cost}.00</h4>
                    <div className="cart-image">
                        <img src={course.img} alt={course.name}/>
                    </div>
                    <button onClick={() => removeFromCart(course)}>Remove from Cart</button>
                </div>
                ))}
                <p className="total-amount">Total Cost: {totalCost}</p>
            </div>
        </div>
    );
};

export default Cart;