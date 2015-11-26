import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import Display from './display';

var glslify = require('glslify');

var shaders = [
  {
    "name": "Flower",
    "fragmentShader": glslify(`${__dirname}/../glsl/flower.glsl`)
  },
  {
    "name": "Lines",
    "fragmentShader": glslify(`${__dirname}/../glsl/lines.glsl`)
  }
];

let ShaderController = React.createClass({
  getInitialState() {
    return {
      shader: shaders[0],
      currentShader: 0
    };
  },
  render() {
    console.log(this.state.currentShader);
    return (
      <div>
        <ul>
          <Button onClick={this._handleClick}>
            <FontAwesome name='fast-forward' />
          </Button>
          <Display text={this.state.shader.name} />
        </ul>
      </div>
    );
  },
  _handleClick() {
    let newCurrentShader = 0, newShader = shaders[0];

    if (!(this.state.currentShader >= shaders.length - 1)) {
      newCurrentShader = this.state.currentShader + 1;
      newShader = shaders[newCurrentShader];
    }

    screen = this.props.screen;
    screen.material.fragmentShader = newShader.fragmentShader;
    screen.material.needsUpdate = true;

    this.setState({currentShader: newCurrentShader, shader: newShader});
  }
});

module.exports = ShaderController;
