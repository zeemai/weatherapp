import React from "react";

export default class Weather extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const { dayTime, dayName, temp, description, icon} = this.props;

        return <div className="weather-container">
            <div className="header">London Now</div>
            <div className="dayTime">{ dayTime.slice(16, 24) }</div>
            <div className="current-weather">{temp}°</div>
        </div>
    }
}