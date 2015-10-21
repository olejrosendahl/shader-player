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
    if (this.props.audio.currentTime == 0)
      this.props.audio.load();

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

let StopButton = React.createClass({
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name="stop" />
      </Button>
    );
  },
  _handleClick() {
    this.props.audio.pause();
    this.props.audio.currentTime = 0;
  }
});

let FastBackwardButton = React.createClass({
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name="fast-backward" />
      </Button>
    );
  },
  _handleClick() {
    this.props.audio.currentTime = 0;
    this.props.audio.load();
    this.props.audio.play();
  }
});

let FastForwardButton = React.createClass({
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name="fast-forward" />
      </Button>
    );
  },
  _handleClick() {
    this.props.audio.currentTime = this.props.audio.duration;
  }
});

let ShaderPlayer = React.createClass({
  render() {
    return (
      <div>
        <ul>
          <FastBackwardButton {...this.props} />
          <PlayButton {...this.props} />
          <FastForwardButton {...this.props} />
          <PauseButton {...this.props} />
          <StopButton {...this.props} />
        </ul>
      </div>
    );
  }
});

module.exports = ShaderPlayer;
