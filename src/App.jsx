import React, { Component } from 'react';
import './App.css';
import "./sass/app.scss";

import TopPart from "./components/top/index";
import BottomPart from "./components/bottom/index";

import axios from "axios";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){

    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=51.51&lon=-0.13&appid=ab310cc5fe7232f7f7bb52ae7850677b&units=metric`)
        .then((res) => {
          return res.data;
        }).then(data => {
          this.setState({
            isLoading: false,
            temp: data.current.temp,
            description: data.current.weather[0].description,
            icon: 'http://openweathermap.org/img/wn/'+ data.current.weather[0].icon + '@2x.png',
            dayName: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(data.current.dt * 1000).getDay()],
            dayTime: Date(data.current.dt * 1000),
            forecasedays: data.daily
          })
        })
        .catch((err) => {
          if (err) {
            console.error("Cannot get data")
          }
        })
  }

  render(){

    const { dayName, dayTime, temp, description, icon, isLoading, forecasedays} = this.state;

    return (
      <div className="app-container">
        <div className="main-container">
          {isLoading && <h2>Loading weather...</h2>}
          {!isLoading &&
          <div className="top-part">
            <TopPart
              dayName={dayName}
              dayTime={dayTime} 
              temp={temp} 
              description={description} 
              icon={icon} />
          </div>}
          <div className="bottom-part">
            <BottomPart forecasedays={forecasedays} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;

