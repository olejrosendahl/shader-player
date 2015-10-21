# shader-player

React Music Player with WebGL Visualizations

## Development

An audio file is needed for the player to work. Place the audio file in `assets/audio/audio.mp3`. The audio file needs to be in either `mpeg` or `ogg` format.

The player uses React to generate the GUI to control the music and the
shaders. Rebundle the sources during development:

    $ gulp watch --target src/js/shader-player.js

Since we'll be serving files from the file system we need to run a
web-server. Any server will do. For development I'm currently using
python's SimpleHTTPServer. Start the server with:

    $ python -m SimpleHTTPServer

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/blacktangent/attributes_for. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.

## License

The software is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

