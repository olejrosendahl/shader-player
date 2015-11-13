import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import THREE from 'three';
var glslify = require('glslify');

let PlayButton = React.createClass({
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name='play' />
      </Button>
    );
  },
  _handleClick() {
    if (this.props.audio.currentTime == 0)
      this.props.audio.load();

    this.props.audio.play();
  }
});

let PauseButton = React.createClass({
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name='pause' />
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

let NextButton = React.createClass({
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name='fast-forward' />
      </Button>
    );
  },
  _handleClick() {
    screen = this.props.screen;
    screen.material.fragmentShader = glslify(__dirname + '/../glsl/lines.glsl');
    screen.material.needsUpdate = true;
  }
});

let ShaderPlayer = React.createClass({
  render() {
    return (
      <div>
        <div>
          <ul>
            <FastBackwardButton {...this.props} />
            <PlayButton {...this.props} />
            <FastForwardButton {...this.props} />
            <PauseButton {...this.props} />
            <StopButton {...this.props} />
          </ul>
        </div>
        <div>
          <ul>
            <NextButton {...this.props} />
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = ShaderPlayer;
