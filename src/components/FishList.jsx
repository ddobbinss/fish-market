import {useState, useEffect} from 'react';
import axios from "axios";
import "./../css/Fish.css";
import Fish from './Fish.jsx';

const FishList = (props) => {
    const [fishes, setFishes] = useState([]);
    const [featuredFish, setFeaturedFish] = useState([]);

    //after page load
    useEffect(() => {
        const loadFishes = async() => {
            const response = await axios.get("https://fish-server-i3ie.onrender.com/api/fishes");
            setFishes(response.data.splice(0, props.num));
        };

        loadFishes();
    },[]);

    //grab 3 random fish buddy to be featured 
    const getRandomFish = () => {
    if (fishes.length === 0) return;
    const randomThree = fishes.slice().sort(() => 0.5 - Math.random()).slice(0, 3);
    setFeaturedFish(randomThree);
  };

  useEffect(() => {
    if (fishes.length > 0) getRandomFish();
  }, [fishes]);

    return (
    
    <div id="fish-list" className="columns">
        {fish.map((fishItem) => (
            <Fish
            key={fishItem._id}
            id={fishItem._id}
            name={fishItem.name}
            species={fishItem.species}
           region={fishItem.region}
           price={fishItem.price}
          description={fishItem.description}
          fishPic={fishItem.image}
          />
          ))}
       </div>
    );
};

export default FishList;