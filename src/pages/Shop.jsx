import React from 'react';
import axios from "axios";
import '../css/Shop.css';
import FishList from '../components/FishList.jsx';

const Shop = () =>{
  return (
    <div id="content">
        <div id="fish-nav">
            <button id="btn-salt-water">Salt Water</button>
            <button id="btn-fresh-water">Fresh Water</button>
        </div>
        
        <div id="fish-div">
            <FishList num="9"/>
        </div>
    </div>
  );
};

export default Shop;