import React, { Component } from "react";
import "../css/navbar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img
              src="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/19894990_1714516235519013_2363144978537003656_n.png?_nc_cat=101&_nc_ht=scontent-maa2-1.xx&oh=dae645411ca915048efee9262d368900&oe=5CA57C2D"
              height="100"
              width="100"
              className="d-inline-block align-top"
            />
            <span className="navbar-text m-2" style={{ fontSize: "3vh" }}>
              IOT
            </span>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
