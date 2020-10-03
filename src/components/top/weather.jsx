import React from "react";

const Weather = (props) => {

    const { dayTime, temp } = props;

    return (
        <div className="weather-container">
            <div className="header">London Now</div>
            <div className="dayTime">{dayTime.slice(16, 24)}</div>
            <div className="current-weather">{temp}°</div>
        </div>
    );
}

export default Weather;