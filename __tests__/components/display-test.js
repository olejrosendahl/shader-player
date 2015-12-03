jest.dontMock('components/display');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Display = require('../../src/js/components/display');

describe('Display', () => {

  it('renders the text prop', () => {
    var display = TestUtils.renderIntoDocument(
      <Display text="Scrolling Text" />
    );

    var displayNode = ReactDOM.findDOMNode(display);

    expect(displayNode.textContent).toEqual('Shader: Scrolling Text');
  });
});
