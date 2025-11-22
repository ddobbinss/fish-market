import React, {useState} from 'react';
import '../css/Fish.css';
import FishDialog from './FishDialog.jsx';

const Fish = (props) => {

    const [fish, setFish] = useState(props);
    const [showFish, setShowFish] = useState(true); //FISH ITEM
    const [showDialog, setShowDialog] = useState(false); //FISH POPUP 
    
    const showFishDetails = () => setShowDialog(true); //popup function
    const closeFishDetails = () => setShowDialog(false);

    const updateFish = (fish) => setFish(fish); //fish itself function 
    const hideFish = () => setShowFish(false);


    return (
    <>
    {showDialog?(
        <FishDialog closeFishDialog={closeFishDetails}
            _id={props._id}
            name={props.name}
            species={props.species}
            region={props.region}
            price={props.price}
            description={props.description}
            fishPic={props.fishPic}
            updateFish={updateFish}
            hideFish={hideFish}
        />
    ):("")}

    {showFish?(
        <section className="fish-item" onClick={showFishDetails}>
            <img src={"https://fish-server-i3ie.onrender.com/"+props.fishPic} alt={props.name} />
            <h1>{props.name}</h1>
            <h2>{props.species}</h2>
            <p className="fish-region">{props.region}</p>
            <p className="fish-price">${props.price}</p>
            <button className="btn-cart">Add To Cart</button>
        </section>
    ):("")};
    
    </>
    )
};

export default Fish;