import { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/Fish.css';
import Fish from './Fish.jsx';

const FeaturedFish = (props) => {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    const loadFishes = async () => {   
      //const response = await axios.get('https://fish-server-i3ie.onrender.com/api/fishes');
      const response = await axios.get('http://localhost:3001/api/fishes');
      const data = response.data;
      const selected = [];

      // make sure data exists and has enough fish
      if (Array.isArray(data) && data.length > 0) {
        const usedIndexes = new Set();
        while (usedIndexes.size < 3 && usedIndexes.size < data.length) {
          const randomIndex = Math.floor(Math.random() * data.length);
          usedIndexes.add(randomIndex);
        }
        usedIndexes.forEach(i => selected.push(data[i]));
      }

      setFishes(selected);
    };

    loadFishes(); 
  }, []);

  return (
    <div id="fish-list" className="columns">
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
      ))};
    </div>
  );
};

export default FeaturedFish;