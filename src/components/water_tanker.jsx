import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class WaterTanker extends Component {
  state = {
    chartdata: {
      labels: [
        "5 HOURS BACK",
        "4 HOURS BACK",
        "3 HOURS BACK",
        "2 HOURS BACK",
        "1 HOUR BACK",
        "Current"
      ],
      datasets: [
        {
          label: "Population 1",
          data: [617594, 181045, 153060, 106519, 800000, 95072],
          backgroundColor: [
            "rgba(64,164,223,0.6)"
            // "rgba(54,162,235,0.6)",
            // "rgba(255,206,86,0.6)",
            // "rgba(75,192,192,0.6)",
            // "rgba(153,102,255,0.6)",
            // "rgba(255,159,64,0.6)",
            // "rgba(255,99,132,0.6)"
          ]
        }
      ]
    }
  };
  render() {
    return (
      <div>
        <h1 className="display-3 text-primary">WATER TANKER {this.props.no}</h1>
        <Line
          data={this.state.chartdata}
          height={80}
          width={300}
          options={{}}
        />
      </div>
    );
  }
}

export default WaterTanker;
