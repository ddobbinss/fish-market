import React from "react";
import '../css/Fish.css';
import fishPic from './../images/fish1.png';

const Fish = (props) => {
    return (
        <section className="fish-item">
            <img src={fishPic} alt="Fish" />
            <h1>{props.name}</h1>
            <h2>{props.species}</h2>
            <p className="fish-region">{props.region}</p>
            <p className="fish-price">{props.price}</p>
            <button className="btn-cart">Add To Cart</button>
        </section>
    );
};

export default Fish;