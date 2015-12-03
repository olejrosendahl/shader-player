jest.dontMock('../display');

import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Display = require('../src/js/components/display');

describe('Display', () => {

  it('renders the text prop', () => {
    var display = TestUtils.renderIntoDocument(
      <Display text="Scrolling Text" />
    );

    var displayNode = ReactDOM.findDOMNode(display);

    expect(displayNode.textContent).toEqual('Scrolling Text');
  });
});
