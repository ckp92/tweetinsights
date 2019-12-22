import "../../styles/main/Info.css";
import React from "react";
import capitalizeFirst from "../../utils/capitalizeFirst";

const Info = props => {
  const { searchQueries, bucket, dataObjects } = props;
  let { start, end } = props;

  // show times only if daily
  if (bucket === "day") {
    start = start.split(" ")[0];
    end = end.split(" ")[0];
  } else {
    start = start.replace(" ", " @ ");
    end = end.replace(" ", " @ ");
  }

  const renderSearchType = () => {
    const locations = dataObjects.map(({ location }) => location.toLowerCase());

    if (locations.includes("uk")) return "International";
    if (locations.includes("london")) return "National";
    if (locations.includes("nw")) return "London";
  };

  const renderLocations = () => {
    return dataObjects.map(({ location, total }) => {
      return (
        <li key={location}>
          {location} (Total Tweets: {total})
        </li>
      );
    });
  };

  const renderKeywords = () => {
    return searchQueries.map(q => <li key={q}>'{q}'</li>);
  };

  return (
    <div className="info">
      <h2>More Info</h2>
      <ul>
        <li>
          <span>Search Type:</span>
          {renderSearchType()}
        </li>
        <li className="multiple" id="locations">
          <span>Locations:</span>
          <ul>{renderLocations()}</ul>
        </li>
        <li>
          <span>Interval:</span>
          {capitalizeFirst(bucket)}
        </li>
        <li>
          <span>Start:</span>
          {start}
        </li>
        <li>
          <span>End:</span>
          {end}
        </li>
        <li className="multiple">
          <span>Keywords:</span>
          <ul>{renderKeywords()}</ul>
        </li>
      </ul>
    </div>
  );
};

export default Info;
