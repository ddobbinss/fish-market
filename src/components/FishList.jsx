import { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/Fish.css';
import Fish from './Fish.jsx';
import {FishContext} from './FishContext.jsx';


const FishList = ({ num, showList = true, children }) => {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    const loadFishes = async () => {
      try {
        const res = await axios.get('/api/fishes'); 
        const list = Array.isArray(res.data) ? res.data : [];
        setFishes(num ? list.slice(0, num) : list);   // keep original order
      } catch (err) {
        console.error('Error loading fish:', err);
        setFishes([]);
      }
    };
    loadFishes();
  }, [num]);

  return (
    <div id="fish-list" className="columns">
      <FishContext.Provider value={fishes}>
        {showList && fishes.map((fishItem) => (
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
        {children}
      </FishContext.Provider>
    </div>
  );
};
export default FishList;