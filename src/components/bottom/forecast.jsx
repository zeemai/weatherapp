import React from 'react';

const Forecast = (props) => {
    const { day } = props;

    if (!day) return null;

    return (
        <div className="forecast-container">
            <div className="dayName">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(day.dt * 1000)
                    .getDay()]
                    .slice(0, 3)
                    .toUpperCase()}
            </div>
            <div className="temp">{day.temp.day}°</div>
            <div className="forecast-inner-container">
                <div className="image">
                    <img src={'http://openweathermap.org/img/wn/' + day.weather[0].icon + '@2x.png'} 
                        alt="weather" />
                </div>
                <div className="description">{day.weather[0].description}</div>
            </div>
        </div>
    );
}

export default Forecast;

