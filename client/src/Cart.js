import React from 'react'

const Cart = () => {
    const userId = localStorage.getItem("userId")
    const cart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || []

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <h3>{item.title}</h3>
                            <p>Price: ₹{item.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Cart