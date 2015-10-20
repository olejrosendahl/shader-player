import React from 'react';

let PlayButton = React.createClass({
  render() {
    return <button onClick={this._handleClick}>Play</button>
  },
  _handleClick() {
    this.props.audio.play();
  }
})

let PauseButton = React.createClass({
  render() {
    return <button onClick={this._handleClick}>Pause</button>
  },
  _handleClick() {
    this.props.audio.pause();
  }
});

let ShaderPlayer = React.createClass({
  render() {
    return (
      <ul>
        <PlayButton {...this.props} />
        <PauseButton {...this.props} />
      </ul>
    );
  }
});

module.exports = ShaderPlayer;
