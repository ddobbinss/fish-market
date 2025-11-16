import "../css/AddFish.css";
import { use, useState } from "react";
import axios from "axios";

const AddFish = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async(event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);

        //make render fetch render link when done 
        const response = await fetch('http://localhost:3001/api/fishes', {
            method: 'POST',
            body: formData
        }); 

        if(response.status == 200) {
            setResult("Fish added to the Tank");
            event.target.reset();
            props.closeAddDialog();
            props.updateFishes(await response.json());
        }
        else {
            setResult("Error adding fish");
        }
    };

    //temp template from portia 
    return (
        <div id="add-fish" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="add-fish-close" className="w3-button w3-display-topright" onClick={props.closeAddFish}>&times;</span>
                    <form id="add-fish-form" onSubmit={addToServer}>
                        <h3>Sell A Fish</h3>

                        <p>
                            <label htmlFor="name">Fish Name:</label>
                            <input type="text" id="name" name="name" required min="3"></input>
                        </p>

                        <p>
                            <label htmlFor="species">Fish Species:</label>
                            <input type="text" id="species" name="species" min="1" required></input>
                        </p>

                        <p>
                            <label htmlFor="region">Region: </label>
                            <input type="text" id="region" name="region" min="1" required></input>
                        </p>

                        <p>
                            <label htmlFor="price">Price: $</label>
                            <input type="number" id="price" name="price" min="1" required></input>
                        </p>
                        <p>
                            <label htmlFor="description">Description:</label>
                            <input type="text" id="description" name="description" min="1" required></input>
                        </p>

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc!=""?
                                    (<img id="img-prev" src={prevSrc}></img>):
                                    ("")
                                    }
                                </p>
                            </div>
                            <p id="img-upload">
                                <label htmlFor="img">Upload Image:</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default AddFish;