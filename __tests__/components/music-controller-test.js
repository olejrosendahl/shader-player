jest.dontMock('components/music-controller');

describe('MusicController', () => {
  var React, TestUtils, MusicController, rendered;

  beforeEach(() => {
    React = require('react');
    TestUtils = require('react-addons-test-utils');
    MusicController = require('components/music-controller');

    rendered = TestUtils.renderIntoDocument(
      <MusicController />
    );
  });

  it('renders a set of buttons for music playback', () => {
    const Button = require('react-bootstrap').Button;

    var button = TestUtils.scryRenderedComponentsWithType(
      rendered,
      Button
    );

    expect(button.length).toBe(4);
  });
});
