import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import THREE from 'three';
import cookie from 'react-cookie';

var glslify = require('glslify');

var shaders = [
  {
    "name": "Lines",
    "shader": glslify(`${__dirname}/../glsl/lines.glsl`)
  },
  {
    "name": "Flower",
    "shader": glslify(`${__dirname}/../glsl/flower.glsl`)
  }
];

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
  componentDidMount() {
    cookie.save('currentShader', 0);
  },
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name='fast-forward' />
      </Button>
    );
  },
  _handleClick() {
    let currentShader = cookie.load('currentShader');

    if (currentShader >= shaders.length - 1)
      currentShader = 0;
    else
      currentShader ++;

    screen = this.props.screen;
    screen.material.fragmentShader = shaders[currentShader].shader;
    screen.material.needsUpdate = true;

    cookie.save('currentShader', currentShader);
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
