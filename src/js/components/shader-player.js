import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';

let PlayButton = React.createClass({
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name="play" />
      </Button>
    );
  },
  _handleClick() {
    this.props.audio.play();
  }
})

let PauseButton = React.createClass({
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name="pause" />
      </Button>
    );
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
