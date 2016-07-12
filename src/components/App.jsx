var React = require('react');
var Nav = require('./Nav.jsx');

var Main = (props) => {
    return (
      <div>
        <Nav/>
        <div className="callout primary">
          <h2>Main Component</h2>
        </div>
        {props.children}
      </div>
    );
};

module.exports = Main;
