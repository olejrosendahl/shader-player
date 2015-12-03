jest.dontMock('components/volume-controller');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Slider from 'rc-slider';

const VolumeController = require('../../src/js/components/volume-controller');

describe('VolumeController', () => {

  it('renders a volume slider', () => {
    var volumeController = TestUtils.renderIntoDocument(
      <VolumeController audio={{}} />
    );
    var slider = TestUtils.scryRenderedComponentsWithType(
      volumeController,
      Slider
    );
    expect(slider.length).toBe(1);
  });

});
