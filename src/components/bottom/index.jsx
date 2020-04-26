import React from "react";
import "./style.scss";
import Forecast from "./forecast";

export default class BottomPart extends React.Component{
    constructor(props){
        super(props);
        this.state = {} ;
    }

    render() {
        const {forecasedays} = this.props;
        return <div className="bottom-container">
            {forecasedays && forecasedays.map((day, i) =>{
                return <Forecast day={day} key={i} />
            })}
        </div>
    }
}