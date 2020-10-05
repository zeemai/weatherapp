import React from "react";
import "./style.scss";
import Forecast from "./forecast";

const BottomPart = (props) => {

    const { forecasedays } = props;

    return (
        <div className="bottom-container">
            {forecasedays && forecasedays.map((day, i) => {
                return <Forecast day={day} key={i} />
            })}
        </div>
    );
}

export default BottomPart;