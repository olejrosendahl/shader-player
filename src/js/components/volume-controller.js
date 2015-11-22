import React from 'react';
import Slider from 'rc-slider';

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

module.exports = VolumeController;
