var React = require('react');

var WeatherMessage = ({temp, location}) => {
  debugger;
    return (
      <h3>It happens to be {temp} in {location}.</h3>
    );
};

module.exports = WeatherMessage;
