import "../../styles/main/Graph.css";
import React, { Component } from "react";
import Chart from "chart.js";
let myLineChart;

class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount = () => {
    this.buildChart();
  };

  componentDidUpdate = () => {
    this.buildChart();
  };

  buildChart = () => {
    const ctx = this.chartRef.current.getContext("2d");
    const { dataObjects, labels, bucket } = this.props;
    // black red blue purple yellow
    const colors = ["#000000", "#ff6384", "#36a2eb", "#cc65fe", "#ffce56"];

    // destroy if previously built
    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: dataObjects.map((query, i) => {
          return {
            label: query.location,
            borderColor: colors[i % 5], // one of the 5 colors
            data: query.count
          };
        })
      },
      // chart options
      options: {
        animation: false,
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "COUNT"
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: `TIME (${bucket.toUpperCase()}S)`
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

export default LineGraph;
