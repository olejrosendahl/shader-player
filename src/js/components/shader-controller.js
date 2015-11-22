import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';

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


let ShaderController = React.createClass({
  render() {
    return (
      <div>
        <ul>
          <NextButton {...this.props} />
        </ul>
      </div>
    );
  }
});

module.exports = ShaderController;
