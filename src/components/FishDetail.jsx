const FishDetail = (props) => {

    return (
        <div id="fish-popup-content">
            <section id="edit-links">
                <a href="edit-link" onClick={props.showEdit}>&#9998;</a>
                <a href="delete-link" onClick={props.showDelete}>&#x2715;</a>
            </section>

            {/* fish info*/}
            <img id="popup-img" src={"https://fish-server-i3ie.onrender.com/"+props.fishPic} alt={props.name} />
            <h1 id="popup-name">{props.name}</h1>
            <h2 id="popup-species">{props.species}</h2>
            <p id="popup-region">{props.region}</p>
            <h3 id="popup-price">${props.price}</h3>
            <p id="popup-description">{props.description}</p>
            <button className="btn-cart">Add To Cart</button>
        </div>
    );
};
    export default FishDetail;