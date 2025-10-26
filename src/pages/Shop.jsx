import React from 'react';
import Fish from '../components/Fish.jsx';
import '../css/Shop.css';

export default function Shop() {
  return (
    <div id="content">
        <div id="fish-nav">
            <button id="btn-salt-water">Salt Water</button>
            <button id="btn-fresh-water">Fresh Water</button>
        </div>
        
        <div id="fish-div">
                <Fish name="Mandarinfish" species="Synchiropus splendidus" region="Western Pacific" price="$150.00" />
                <Fish name="Clown Triggerfish" species="Balistoides conspicillum" region="Indo-Pacific" price="$200.00" />
                <Fish name="Royal Gramma" species="Gramma loreto" region="Caribbean Sea" price="$80.00" /> 
        </div>
    </div>
  );
};