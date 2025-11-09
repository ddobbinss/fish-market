import React, {useState} from 'react';
import '../css/Fish.css';

const Fish = (props) => {

    const [popupOpen, setPopupOpen] = useState(false);   
    
    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    return (
    
    <div>
        <section className="fish-item" onClick={openPopup}>
            <img src={"https://fish-server-i3ie.onrender.com/"+props.fishPic} alt={props.name} />
            <h1>{props.name}</h1>
            <h2>{props.species}</h2>
            <p className="fish-region">{props.region}</p>
            <p className="fish-price">{props.price}</p>
            <button className="btn-cart">Add To Cart</button>
        </section>

        {/* Popup fo fish  */}
        {popupOpen && (<div className="popup-backdrop" onClick={(e) => e.stopPropagation()}>
          <div id="fish-popup-content">
            <button id="close-popup" onClick={closePopup}>
              &times;
            </button>

            {/* fish info*/}
            <img id="popup-img" src={"https://fish-server-i3ie.onrender.com/"+props.fishPic} alt={props.name} />
            <h1 id="popup-name">{props.name}</h1>
            <h2 id="popup-species">{props.species}</h2>
            <p id="popup-region">{props.region}</p>
            <h3 id="popup-price">{props.price}</h3>
            <p id="popup-description">
                {props.info || "This is one of our featured fish, great fish."}
            </p>
            <button className="btn-cart">Add To Cart</button>
        </div>
    </div>)}
</div>
        

    );
};

export default Fish;