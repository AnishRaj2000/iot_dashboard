import React, { Component } from "react";
import "../css/volleyballcourt.css";

class VoleyBall extends Component {
  state = {
    number: 0
  };
  render() {
    return (
      <div className="image1">
        <h1 className="display-3 text-white">VOLLEYBALL COURT</h1>
        <h1 className="text-white">No Of People In Court</h1>
        <h2 className="text-white">{this.state.number}</h2>
        <h2 className="text-white">
          Click here to refresh
          <br />
          <a>
            <i className="fa fa-refresh" style={{ cursor: "pointer" }} />
          </a>
        </h2>
      </div>
    );
  }
}

export default VoleyBall;
