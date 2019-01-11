import React, { Component } from "react";
import "../css/sidebar.css";

class SideBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <div id="sidebar">
          <ul>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => this.props.onSelect(1)}
            >
              <li>Basketball Court</li>
            </a>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => this.props.onSelect(2)}
            >
              <li>Voleyball Court</li>
            </a>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => this.props.onSelect(3)}
            >
              <li>Football Court</li>
            </a>
            <div className="dropdown">
              <li className="dropbtn dropdown-toggle">Water Tanker</li>
              <div className="dropdown-content">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => this.props.onTanker(1)}
                >
                  <li>Water Tanker 1</li>
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => this.props.onTanker(2)}
                >
                  <li>Water Tanker 2</li>
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => this.props.onTanker(3)}
                >
                  <li>Water Tanker 3</li>
                </a>
              </div>
            </div>
          </ul>
          <button onClick={reveal} className="btn btn-toolbar toggle-btn">
            <i className="fa fa-list" />
          </button>
        </div>
      </div>
    );
    function reveal() {
      document.getElementById("sidebar").classList.toggle("active");
    }
  }
}

export default SideBar;
