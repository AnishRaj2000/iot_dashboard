import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import level from "../data.json";
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
          data: [
            this.props.data[5],
            this.props.data[4],
            this.props.data[3],
            this.props.data[2],
            this.props.data[1],
            this.props.data[0]
          ],
          backgroundColor: [
            "rgba(62,164,223,0.6)"
            //s "rgba(54,162,235,0.6)",
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
