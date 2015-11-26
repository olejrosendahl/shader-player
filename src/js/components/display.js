import React from 'react';

let Display = React.createClass({
  render() {
    return (
      <p>Shader: {this.props.text}</p>
    );
  }
});

module.exports = Display;
