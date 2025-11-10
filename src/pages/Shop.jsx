import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Shop.css';
import Fish from '../components/Fish.jsx';

const Shop = () => {
  const [fishes, setFishes] = useState([]);
  const [allFish, setAllFish] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'freshwater' | 'saltwater'

  // Load fish once
  useEffect(() => {
    const loadFishes = async () => {
      try {
        const response = await axios.get('https://fish-server-i3ie.onrender.com/api/fishes');
        const data = Array.isArray(response.data) ? response.data : [];
        setAllFish(data);
        setFishes(data);
      } catch (error) {
        console.error('Error loading fish:', error);
      }
    };
    loadFishes();
  }, []);

  //Freshwater filter
  const showFreshwater = () => {
    if (activeFilter === 'freshwater') {
      setActiveFilter('all');
      setFishes(allFish); // reset to all
    } else {
      setActiveFilter('freshwater');
      const filtered = allFish.filter(fish => 
        String(fish.region).toLowerCase() === 'freshwater'
      );
      setFishes(filtered);
    }
  };

  //Saltwater filter
  const showSaltwater = () => {
    if (activeFilter === 'saltwater') {
      setActiveFilter('all');
      setFishes(allFish); // reset to all
    } else {
      setActiveFilter('saltwater');
      const filtered = allFish.filter(fish => 
        String(fish.region).toLowerCase() === 'saltwater'
      );
      setFishes(filtered);
    }
  };

  return (
    <div id="content">
      <div id="fish-nav">
        <button
          id="btn-salt-water"
          className={activeFilter === 'saltwater' ? 'active-filter' : ''}
          onClick={showSaltwater}
        >
          Salt Water
        </button>

        <button
          id="btn-fresh-water"
          className={activeFilter === 'freshwater' ? 'active-filter' : ''}
          onClick={showFreshwater}
        >
          Fresh Water
        </button>
      </div>

      <div id="fish-div" className="columns">
        {fishes.map((fishItem) => (
          <Fish
            key={fishItem._id}
            name={fishItem.name}
            species={fishItem.species}
            region={fishItem.region}
            price={fishItem.price}
            info={fishItem.description}
            fishPic={fishItem.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;