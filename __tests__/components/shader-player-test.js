jest.dontMock('components/display');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const ShaderPlayer = require('../../src/js/components/shader-player');

describe('ShaderPlayer', () => {

  it('renders the UI', () => {
    var shaderPlayer = TestUtils.renderIntoDocument(
      <ShaderPlayer audio={{}}/>
    );

    var displayNode = ReactDOM.findDOMNode(shaderPlayer);

    expect(displayNode.textContent).toEqual('Shader: Flower');
  });
});
