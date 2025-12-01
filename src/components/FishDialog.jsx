import "./../css/FishDialog.css"; //CREATE CSS FILE
import React, { useState } from "react";
import FishDetail from "./FishDetail.jsx";
import FishEdit from "./FishEdit.jsx";
import FishDelete from "./FishDelete.jsx";

const FishDialog = (props) => {
    const [showContent, setShowContent] = useState("details");

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    }
    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    }
    return (
        <div id="fish-popup" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="popup-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeFishDialog}
                    >
                        &times;
                    </span>
                    <div id="fish-popup-content">
                        {showContent==="details"?(
                            <FishDetail 
                                showEdit={showEdit}
                                showDelete={showDelete} 
                                name={props.name}
                                species={props.species}
                                region={props.region}
                                price={props.price}
                                description={props.description}
                                fishPic={props.fishPic}
                                />
                        ):showContent === "edit"?(
                            <FishEdit
                                _id={props._id} 
                                name={props.name}
                                species={props.species}
                                region={props.region}
                                price={props.price}
                                description={props.description}
                                fishPic={props.fishPic} 
                                closeEditDialog={props.closeFishDialog}
                                updateFish={props.updateFish}
                                />
                        ):(
                            <FishDelete 
                               _id={props._id}
                               name={props.name}
                               closeDeleteDialog={props.closeFishDialog}
                               hideFish={props.hideFish}
                               />
                            )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FishDialog
