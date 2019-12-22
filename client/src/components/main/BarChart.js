import "../../styles/main/Graph.css";
import React, { Component } from "react";
import Chart from "chart.js";
let myBarChart;

class BarChart extends Component {
  chartRef = React.createRef();

  componentDidMount = () => {
    this.buildChart();
  };

  componentDidUpdate = () => {
    this.buildChart();
  };

  buildChart = () => {
    const ctx = this.chartRef.current.getContext("2d");
    const { dataObjects } = this.props;
    // black red blue purple yellow
    const colors = ["#000000", "#ff6384", "#36a2eb", "#cc65fe", "#ffce56"];

    // destroy if previously built
    if (typeof myBarChart !== "undefined") myBarChart.destroy();

    myBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: dataObjects.map(q => q.location),
        datasets: [
          {
            barPercentage: 0.5,
            barThickness: "flex",
            minBarLength: 2,
            data: dataObjects.map(q => q.total),
            backgroundColor: colors
          }
        ]
      },
      // chart options
      options: {
        animation: false,
        legend: { display: false },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "TOTAL"
              },
              ticks: { beginAtZero: true }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "QUADRANT OF LONDON"
              }
            }
          ]
        }
      }
    });
  };

  render() {
    return (
      <div className="graph">
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default BarChart;
