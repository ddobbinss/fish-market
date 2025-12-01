//APPEND EDIT TO THE FISH HIDDEN POPUP
import React, {useState} from 'react';

const FishEdit = (props) => {
  console.log("Fish ID:", props._id);
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("https://fish-server-i3ie.onrender.com/images/" + props.fishPic);
    //const [prevSrc, setPrevSrc] = useState("http://localhost:3001/images/" + props.fishPic);

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);

        //const response = await fetch(`http://localhost:3001/api/fishes/${props._id}`, {
        const response = await fetch('https://fish-server-i3ie.onrender.com/api/fishes/' + props._id, {
            method: 'PUT',
            body: formData
        });

        if (response.status === 200) {
            setResult("Fish updated");
            event.target.reset();
            props.closeEditDialog();
            props.updateFish(await response.json());
        } else {
            setResult("Error updating fish");
        }
    };

     return (
     <form id="add-fish-form" onSubmit={onSubmit}>
      <h3>Edit Fish</h3>

      <p>
        <label htmlFor="name">Fish Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={props.name}
          required
          min="3"
        />
      </p>

      <p>
        <label htmlFor="species">Fish Species:</label>
        <input
          type="text"
          id="species"
          name="species"
          defaultValue={props.species}
          required
          min="1"
        />
      </p>

      <p>
        <label htmlFor="region">Region:</label>
        <select id="region" name="region" defaultValue={props.region} required>
          <option value="">Select region</option>
          <option value="freshwater">Freshwater</option>
          <option value="saltwater">Saltwater</option>
        </select>
      </p>

      <p>
        <label htmlFor="price">Price: $</label>
        <input
          type="number"
          id="price"
          name="price"
          defaultValue={props.price}
          required
          min="1"
        />
      </p>

      <p>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={props.description}
          required
          min="1"
        />
      </p>

      <section className="columns">
        <div>
          <p id="img-prev-section">
            {prevSrc !== "" && <img id="img-prev" src={prevSrc} alt="Preview" />}
          </p>
        </div>
        <p id="img-upload">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={uploadImage}
          />
        </p>
      </section>

      <p>
        <button type="submit">Update Fish</button>
      </p>

      {result && <p>{result}</p>}
    </form>
  );
};

export default FishEdit;