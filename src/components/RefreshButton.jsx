import React from "react";
import '../css/Home.css';

const RefreshButton = ({onClick, label = "Refresh Featured Fish"}) => {
    return (
    <div id="refresh-featured">
        <button className="btn-refresh" onClick={onClick}>
            {label}
        </button>
    </div> 
    )
};

export default RefreshButton;
