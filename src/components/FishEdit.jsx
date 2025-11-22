//APPEND EDIT TO THE FISH HIDDEN POPUP
import React, {useState} from 'react';

const FishEdit = (props) => {
    const [result, setResult] = useState("");
    //const [prevSrc, setPrevSrc] = useState("https://fish-server-i3ie.onrender.com/" + props.fishPic);
    const [prevSrc, setPrevSrc] = useState("http://localhost:3001/" + props.fishPic);

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch('http://localhost:3001/api/fishes/' + props._id, {
        //const response = await fetch('https://fish-server-i3ie.onrender.com/api/fishes/' + props._id, {
            method: 'PUT',
            body: formData
        });

        if (response.status === 200) {
            setResult("Fish updated");
            event.target.reset();
            event.closeEditDialog();
            props.updateFish(await response.json());
        } else {
            setResult("Error updating fish");
        }
    };

    return (
       <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name ">Property Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={props.name}
                required
              />
            </p>
            <p>
              <label htmlFor="size">Size:</label>
              <input
                type="number"
                id="size"
                name="size"
                defaultValue={props.size}
                required
              />
            </p>
            <p>
              <label htmlFor="bedrooms">Bedrooms:</label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                defaultValue={props.bedrooms}
                required
              />
            </p>
            <p>
              <label htmlFor="bathrooms">Bathrooms:</label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                defaultValue={props.bathrooms}
                required
              />
            </p>

            <section>
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

    );
};

export default FishEdit;