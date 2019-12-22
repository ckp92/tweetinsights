import "../../styles/main/Main.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions";
import footerText from "./footerText";
import Shell from "../Shell";
import LineGraph from "./LineGraph";
import BarChart from "./BarChart";
import Info from "./Info";

class Main extends Component {
  renderHeader = () => {
    const {
      searchType: { type, subType }
    } = this.props;

    return (
      <h1>
        {type}: {subType}
      </h1>
    );
  };

  renderContent = () => {
    if (!this.props.data) return <p>Loading...</p>;
    const {
      data: { data }
    } = this.props;

    const sortedData = data.sort((a, b) =>
      a.location.localeCompare(b.location)
    );

    const first = sortedData[0];
    const firstResults = first.data.results;

    // single object with all the important stuff
    const info = {
      bucket: first.bucket,
      start: first.start,
      end: first.end,
      searchQueries: first.searchQueries,
      dates: firstResults.map(result => result.timePeriod.date),
      times: firstResults.map(result => result.timePeriod.time),
      dateTimes: firstResults.map(result => result.timePeriod.dateTime),
      labels: null,
      dataObjects: null
    };

    // labels prop
    // if day just show dates, if times, show times except for midnight, in which case show dates
    if (info.bucket === "day") {
      info.labels = info.dates;
    } else {
      info.labels = info.dateTimes.map((dateTime, i) => {
        return dateTime.includes("00:00") ? dateTime : info.times[i];
      });
    }

    // data objects will show location and count array
    info.dataObjects = sortedData.map(query => {
      const count = query.data.results.map(resultObj => resultObj.count);
      return {
        location: query.location,
        total: query.data.totalCount,
        count
      };
    });

    const { bucket, start, end, labels, dataObjects, searchQueries } = info;

    return (
      <React.Fragment>
        {this.renderChart(dataObjects, labels, bucket)}
        <Info
          bucket={bucket}
          start={start}
          end={end}
          searchQueries={searchQueries}
          dataObjects={dataObjects}
        />
      </React.Fragment>
    );
  };

  // return bar chart of line graph according to the searchType
  renderChart = (dataObjects, labels, bucket) => {
    const {
      searchType: { subType }
    } = this.props;

    if (subType.includes("Decile")) {
      return <BarChart dataObjects={dataObjects} />;
    } else {
      return (
        <LineGraph dataObjects={dataObjects} labels={labels} bucket={bucket} />
      );
    }
  };

  // render footer text according to the searchType
  renderFooter = () => {
    const {
      searchType: { type }
    } = this.props;

    const formattedType = type
      .toLowerCase()
      .split("-")
      .join("")
      .split(" ")
      .join("");

    return (
      <React.Fragment>
        <h2>Thoughts and Observations</h2>
        {footerText[formattedType].map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="main">
        <Shell
          id="main-shell"
          header={this.renderHeader()}
          content={this.renderContent()}
          footer={this.renderFooter()}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ searchType, data }) => {
  return { data, searchType };
};

export default connect(mapStateToProps, { getData })(Main);
