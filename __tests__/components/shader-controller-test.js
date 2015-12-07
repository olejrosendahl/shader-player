jest.dontMock('components/shader-controller');

describe('ShaderController', () => {
  var React, TestUtils, ShaderController, rendered;

  beforeEach(() => {
    React = require('react');
    TestUtils = require('react-addons-test-utils');
    ShaderController = require('components/shader-controller');

    rendered = TestUtils.renderIntoDocument(
      <ShaderController />
    );
  });

  it('renders a fast-forward button', () => {
    const Button = require('react-bootstrap').Button;

    var button = TestUtils.scryRenderedComponentsWithType(
      rendered,
      Button
    );

    expect(button.length).toBe(1);
  });
});
