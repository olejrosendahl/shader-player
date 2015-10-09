import React from 'react';
import ReactDOM from 'react-dom';
import ShaderPlayer from 'components/shader-player';
import $ from 'jquery';

$(document).ready(function() {
    ReactDOM.render(<ShaderPlayer />, document.getElementById('shader-player'));
});
