import React from "react";
import "./style.scss";
import Weather from "./weather";
import Timer from "./timer"

export default class TopPart extends React.Component{
    constructor(props){
        super(props);
        this.state = {} ;
    }


    render() {
        return <div className="top-container">
            <Timer />
            <Weather {...this.props} />
        </div>
    }
}