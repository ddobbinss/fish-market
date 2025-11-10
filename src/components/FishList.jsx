import { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/Fish.css';
import Fish from './Fish.jsx';


const FishList = (props) => {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    const loadFishes = async () => {
      const response = await axios.get('https://fish-server-i3ie.onrender.com/api/fishes');
      setFishes(response.data);
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
        ))}
    </div>
  );
};
export default FishList;