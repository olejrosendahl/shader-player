import React from 'react';

let PlayButton = React.createClass({
  render() {
    return <button onClick={this._handleClick}>Play</button>
  },
  _handleClick() {
    alert("Play!");
  }
})

let StopButton = React.createClass({
  render() {
    return <button onClick={this._handleClick}>Stop</button>
  },
  _handleClick() {
    alert("Stop!");
  }
});

let ShaderPlayer = React.createClass({
  render() {
    return (
      <ul>
        <PlayButton />
        <StopButton />
      </ul>
    );
  }
});

module.exports = ShaderPlayer;
