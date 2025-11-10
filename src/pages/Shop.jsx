import React from 'react';
import Fish from '../components/Fish.jsx';
import '../css/Shop.css';
import FishList from '../components/FishList.jsx';

export default function Shop() {
  return (
    <div id="content">
        <div id="fish-nav">
            <button id="btn-salt-water">Salt Water</button>
            <button id="btn-fresh-water">Fresh Water</button>
        </div>
        
        <div id="fish-div">
            <FishList />
        </div>
    </div>
  );
};