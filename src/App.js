import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import BasketBall from "./components/basketballcourt";
import VolleyBall from "./components/volleyballcourt";
import WaterTanker from "./components/water_tanker";
import FootBall from "./components/footballcourt";
import data from "./data.json";
class App extends Component {
  state = {
    courts: [
      { id: 1, class: <BasketBall /> },
      { id: 2, class: <VolleyBall /> },
      { id: 3, class: <FootBall /> },
      {
        id: 4,
        class: <WaterTanker no={1} data={data["level"]} />
      }
    ],
    selected: <WaterTanker no={1} data={data["level"]} />
  };
  handletanker = no => {
    const selected = <WaterTanker no={no} data={data["level"]} />;
    this.setState({ selected });
  };
  handleSelect = listid => {
    const selected = this.state.courts[listid - 1].class;
    this.setState({ selected });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <SideBar onSelect={this.handleSelect} onTanker={this.handletanker} />
        {this.state.selected}
      </div>
    );
  }
  JSON_to_value(level) {
    console.log(data["level"]);
  }
}
export default App;
