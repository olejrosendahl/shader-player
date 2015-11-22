import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import ShaderController from './shader-controller';
import MusicController from './music-controller';
import VolumeController from './volume-controller';

let ShaderPlayer = React.createClass({
  render() {
    return (
      <div>
        <MusicController {...this.props} />
        <ShaderController {...this.props} />
        <VolumeController {...this.props} />
      </div>
    );
  }
});

module.exports = ShaderPlayer;
