import React from "react";

export default class Weather extends React.Component {
    constructor (props) {
      super(props);
      this.state = { counter : props.val }
    }

    render() {
        return <div className="bar"><div className="in"></div></div>
        ;
      }
    
  }
  

  