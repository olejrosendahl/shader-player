import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';

let PlayButton = React.createClass({
  getInitialState: function() {
    return {playing: false};
  },
  render() {
    if (!this.state.playing)
      return (
        <Button onClick={this._handlePlay}>
          <FontAwesome name='play' />
        </Button>
      )
    else
      return (
        <Button onClick={this._handlePause}>
          <FontAwesome name='pause' />
        </Button>
      )
  },
  _handlePlay() {
    if (this.props.audio.currentTime == 0)
      this.props.audio.load();

    this.props.audio.play();
    this._toggleState();
  },
  _handlePause() {
    this.props.audio.pause();
    this._toggleState();
  },
  _toggleState() {
    this.setState({playing: !this.state.playing});
  }
});

let StopButton = React.createClass({
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name='stop' />
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
        <FontAwesome name='fast-backward' />
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
        <FontAwesome name='fast-forward' />
      </Button>
    );
  },
  _handleClick() {
    this.props.audio.currentTime = this.props.audio.duration;
  }
});

let MusicController = React.createClass({
  render() {
    return (
      <div id="music-controller">
        <ul>
          <FastBackwardButton {...this.props} />
          <PlayButton {...this.props} />
          <FastForwardButton {...this.props} />
          <StopButton {...this.props} />
        </ul>
      </div>
    );
  }
});

module.exports = MusicController;
