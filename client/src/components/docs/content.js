import React from "react";

export default [
  {
    heading: "General",
    list: [
      <div className="list-item">
        <span className="first-line">
          Tweet Insights is a web app that graphically displays the volume of
          tweets containing specific keywords and phrases.
        </span>{" "}
        The data was obtained using the Twitter API in the summer of 2019, while
        I was learning about APIs. The next paragraph explains why more recent
        data was not used.
      </div>,
      <div className="list-item">
        <span className="first-line">
          Getting volumetric data from the Twitter API does not come free.
        </span>{" "}
        The standard tier is free but it only lets you read and write the tweets
        themselves.{" "}
        <strong>
          To access data about the volume of tweets, you must pay.
        </strong>{" "}
        The cheapest premium-tier service gives you access to volumetric data
        for all tweets made within 30 days of the API request. It cost me around
        £120 to use it 30 days, and it is for this reason that this web app:{" "}
        <ol>
          <li>Is not using more recent data</li>
          <li>
            Does not have a search option, where a user can type in their own
            keyword(s) and get the findings displayed on charts.
          </li>
        </ol>
        For more information from the Twitter Developers' website,{" "}
        <a
          href="https://developer.twitter.com/en/pricing"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here.
        </a>
      </div>,
      <div className="list-item">
        <span className="first-line">
          Only tweets with geolocation enabled were used,{" "}
          <a
            href="https://developer.twitter.com/en/docs/tutorials/filtering-tweets-by-location"
            target="_blank"
            rel="noopener noreferrer"
          >
            allowing me to filter by location
          </a>
          .
        </span>{" "}
        The filtering was done using coordinates which I mapped out on{" "}
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Maps
        </a>
        . The data was compared in 3 categories:
        <ol>
          <li>Internationally (UK, USA, Global)</li>
          <li>Nationally (London, Manchester, Birmingham)</li>
          <li>Between quadrants of London (NW, NE, SW, SE)</li>
        </ol>
      </div>,
      <div className="list-item">
        The project was easy and was quick to complete, but only because I
        already had the data. The data took me a while to obtain back in the
        summer because I was very new to APIs and working with bearer tokens.
        The code was also much messier than anything I would write these days!
      </div>,
      <div className="list-item">
        The front-end uses React, Redux, and Chart.js
      </div>,
      <div className="list-item">The the back-end uses Nodejs and Express</div>,
      <div className="list-item">
        This web app uses MongoDB to store data because the data is
        non-relational.
      </div>
    ]
  },
  {
    heading: "Useage",
    list: [
      <div className="list-item">
        Select which results you would like to see from the navigation menu.
      </div>,
      <div className="list-item">
        Hover over the data to get more info about each individual point/bar.
      </div>,
      <div className="list-item">
        Information about the search is shown below, along with my thoughts and
        observations.
      </div>
    ]
  },
  {
    heading: "What Went Well",
    list: [
      <div className="list-item">
        <span className="first-line">
          Using the Chart.js API to create line graphs and bar charts.
        </span>{" "}
        The{" "}
        <a
          href="https://www.chartjs.org/docs/latest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>{" "}
        on their website is very easy to understand.
      </div>,
      <div className="list-item">
        <span className="first-line">
          Creating a script to make a copy of the existing data, with some
          changes to the formatting.
        </span>{" "}
        I made a new Mongoose schema for this so as to not mutate the original
        data.
      </div>
    ]
  },
  {
    heading: "What Was Difficult",
    list: [
      <div className="list-item">
        <span className="first-line">Creating a sidebar.</span> Until now I have
        only used horizontal navbars, so I decided to experiment with creating a
        sidebar similar to the one used for the{" "}
        <a
          href="https://mongoosejs.com/docs/guide.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mongoose docs
        </a>
        . Unlike a simple horizontal navbar, was tricky to get everything
        behaving correctly with this vertical sidebar. And when the sidebar was
        set up correctly, the rest of the page started behaving weirdly. It
        seems to be working fine now, but I'm sure I've made some mistakes with
        the CSS. I have tried to find them, but to no avail. That being said, I
        am sure this is something which I will get better at doing over time.
      </div>,
      <div className="list-item">
        <span className="first-line">Initially getting the data.</span> When I
        was learning about APIs I decided to throw myself into the deep-end by
        using the Twitter API, knowing that if I was unsuccessfull, I would have
        wasted the money I used to pay for the data with. While I did manage to
        get the data, it took me two whole weeks of searching on google,
        stackoverflow, and experimenting until I understood things like headers,
        bearer tokens, and manipulating the data received. I didn't want to use
        one of those helper packages (where you just type in your credentials
        and the search criteria) because I wanted to do it myself. I learned a
        lot during this period and I am quite confident with APIs now.
      </div>,
      <div className="list-item">
        <span className="first-line">
          Getting the same amount of data for each location.{" "}
        </span>
        Seeing as the study was done geographically, the locations aren't all
        the same size and so more data will come from some places than for
        others. London, for example, is much larger than Birmingham, so there
        were always more tweets coming from there. The same can be said for the
        USA compares to the UK. Because of this, the changes in activity was
        more important than the amount of activity.
      </div>,
      <div className="list-item">
        <span className="first-line">Getting reliable data.</span> Twitter
        didn't give reliable data when the tweet counts were very low. If an
        interval has no tweets with the specified keyword(s), it would show 0,
        but if there were anything between 1-5 tweets, it would always show 5.
        This made things unreliable when working with small amounts of data.
        This was the case, for example, with some intervals in the A-Level
        Results charts.
      </div>,
      <div className="list-item">
        <span className="first-line">Getting enough data.</span> A lot of
        searches didn't give enough results to let us make meaningful
        conclusions, and a big cause for this is the fact that most people
        nowadays have geolocation turned off for privacy concerns. If the study
        didn't require comparing between locations, it wouldn't be a problem,
        but in this case it meant less results.
      </div>
    ]
  }
];
