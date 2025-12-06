//APPPEND TO FISH ITME HIDDEN POPUP
import React, {useState} from 'react';

const FishDelete = (props) => { 
    const [result, setResult] = useState("");

    const deleteFish = async() => {
        //const response = await fetch(`http://localhost:3001/api/fishes/${props._id}`, {
        const response = await fetch(`https://fish-server-i3ie.onrender.com/api/fishes/${props._id}`, {
            method: 'DELETE'
        });

        if(response.status === 200) {
            setResult("Fish Deleted!")
            props.closeDeleteDialog();
            props.hideFish();
        }
        else {
            setResult("Error deleting fish");
        }
    };

     return (
        <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteFish}>Yes</button>
            </section>
            <span>{result}</span>
        </div>
    );
};

export default FishDelete;