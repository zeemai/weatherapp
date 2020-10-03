import React from "react";
import "./style.scss";
import Weather from "./weather";
import Timer from "./timer"


const TopPart = (props) => {
    return (
        <div className="top-container">
            <Timer />
            <Weather { ...props }/>
        </div>
    );
}

export default TopPart;