import { useContext, useEffect, useState } from 'react';
import { FishContext } from './FishContext.jsx';
import Fish from './Fish.jsx';
import "../css/Fish.css";

//featured fish component
const FeaturedFish = () => {
    const fishes = useContext(FishContext);   // use the already-imported list from FishList
    const [featuredFish, setFeaturedFish] = useState([]);

  
  const getRandomFish = () => {
    if (!Array.isArray(fishes) || fishes.length === 0) {
        setFeaturedFish([]);
        return;
        }
    // take 3 distinct
    const randomThree = fishes.slice().sort(() => 0.5 - Math.random()).slice(0, 3);
    setFeaturedFish(randomThree);
  };


  useEffect(() => {
    if (fishes.length > 0) getRandomFish();
}, [fishes]);

  return (
  <section className="featured-section">
      <h1>Featured Fish</h1>
      <div id="featured-div" className="columns">
        {featuredFish.length > 0 ? (
            featuredFish.map((fishItem) => (
            <Fish
              key={fishItem._id}
              name={fishItem.name}
              species={fishItem.species}
              region={fishItem.region}
              price={fishItem.price}
              info={fishItem.description}   
              fishPic={fishItem.image}
            />
          ))
        ) : (
          <p>No featured fish yet.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedFish;