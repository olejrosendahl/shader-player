import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import THREE from 'three';
import Slider from 'rc-slider';

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

let NextButton = React.createClass({
  getInitialState() {
    return {currentShader: 0};
  },
  render() {
    return (
      <Button onClick={this._handleClick}>
        <FontAwesome name='fast-forward' />
      </Button>
    );
  },
  _handleClick() {
    if (this.state.currentShader >= shaders.length - 1)
      this.setState({currentShader: 0});
    else
      this.setState({currentShader: this.state.currentShader + 1});

    screen = this.props.screen;
    screen.material.fragmentShader = shaders[this.state.currentShader].shader;
    screen.material.needsUpdate = true;
  }
});

let VolumeController = React.createClass({
  componentDidMount() {
    this.props.audio.volume = 0.5;
  },
  render() {
    return (
      <div style={{width: 400, margin: 50}}>
        <p>Volume:</p>
        <Slider defaultValue={50} onChange={this._handleChange} />
      </div>
    );
  },
  _handleChange(volume) {
    this.props.audio.volume = volume / 100.0;
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
            <StopButton {...this.props} />
          </ul>
        </div>
        <div>
          <ul>
            <NextButton {...this.props} />
          </ul>
        </div>
        <VolumeController {...this.props} />
      </div>
    );
  }
});

module.exports = ShaderPlayer;
