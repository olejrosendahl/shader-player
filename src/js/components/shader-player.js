import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ShaderController from './shader-controller';
import MusicController from './music-controller';
import VolumeController from './volume-controller';

let ShaderPlayer = React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Col md={3}>
            <MusicController {...this.props} />
          </Col>
          <Col md={9}>
            <VolumeController {...this.props} />
          </Col>
        </Row>
        <ShaderController {...this.props} />
      </Grid>
    );
  }
});

module.exports = ShaderPlayer;
