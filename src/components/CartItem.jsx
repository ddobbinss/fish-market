import React from "react";
import '../css/CartItem.css';
import fishPic from './../images/fish1.png';

const CartItem = (props) => {
    return (
        <div className="checkout-item">
            <img src={fishPic} alt="Fish" />
            <h1>{props.name} ~ {props.species}</h1>
            <p className="item-qt">Qt. {props.quantity}   </p>
            <p className="item-price">{props.price}</p>
        </div>
    );
};

export default CartItem;