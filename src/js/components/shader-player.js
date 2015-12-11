import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ShaderController from './shader-controller';
import MusicController from './music-controller';
import VolumeController from './volume-controller';

let ShaderPlayer = React.createClass({
  render() {
    return (
      <div>
        <MusicController {...this.props} />
        <VolumeController {...this.props} />
        <ShaderController {...this.props} />
      </div>
    );
  }
});

module.exports = ShaderPlayer;
