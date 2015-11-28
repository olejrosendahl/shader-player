import React from 'react';
import { Button, Grid, Row, Col, Glyphicon } from 'react-bootstrap';
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
    return (
      <Row id="shader-controller">
        <Col md={3}>
          <Button onClick={this._handleClick}>
            <Glyphicon glyph="fast-forward" />
          </Button>
        </Col>
        <Col md={9}>
          <Display text={this.state.shader.name} />
        </Col>
      </Row>
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
