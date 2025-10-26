import React from 'react';
import '../css/Cart.css';
import CartItem from '../components/CartItem.jsx';
export default function Cart() {
  return (
    <div id="content">
        <h1>Your Cart</h1>
        <div id="cart-div">
            <CartItem name="Mandarinfish" species="Synchiropus splendidus" quantity="1" price="$150.00" />
            <CartItem name="Clown Triggerfish" species="Balistoides conspicillum" quantity="2" price="$400.00" />
            <CartItem name="Royal Gramma" species="Gramma loreto" quantity="1" price="$80.00" />
        </div>
        <div id="cart-actions">        
            <button id="cart-confirm">Confirm</button>
        </div>
    </div>
  );
}