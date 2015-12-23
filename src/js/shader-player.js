import React from 'react';
import ReactDOM from 'react-dom';
import THREE from 'three';
import ShaderPlayer from 'components/shader-player';
import $ from 'jquery';

var glslify = require('glslify');

var camera, renderer, scene, clock, delta, shader, material, mouse = new THREE.Vector2();

var audioCtx = new AudioContext();
var audio = document.getElementById("audio");
var audioSrc = audioCtx.createMediaElementSource(audio);
var analyser = audioCtx.createAnalyser();

audioSrc.connect(analyser);
audioSrc.connect(audioCtx.destination);

var frequencyData = new Uint8Array(analyser.frequencyBinCount);

var customUniforms = {
  iGlobalTime: {
    type: "f",
    value: 1.0
  },
  iResolution: {
    type: "v2",
    value: new THREE.Vector2(window.innerWidth, window.innerHeight)
  },
  iMouse: {
    type: "v2",
    value: new THREE.Vector2(1.0, 1.0)
  },
  iVolume: {
    type: "f",
    value: 0.5,
  },
  tex0: {
    type: "t",
    value: THREE.ImageUtils.loadTexture('../../assets/textures/texl0.jpg')
  },
  tex1: {
    type: "t",
    value: THREE.ImageUtils.loadTexture('../../assets/textures/texl1.jpg')
  },
  tex2: {
    type: "t",
    value: THREE.ImageUtils.loadTexture('../../assets/textures/texl2.jpg')
  }
};

function setup() {
  setupThreeJS();
  setupWorld();

  requestAnimationFrame(function animate() {
      renderer.render(scene, camera);

      var t = clock.getElapsedTime();

      analyser.getByteFrequencyData(frequencyData);
      customUniforms.iGlobalTime.value = t;
      customUniforms.iMouse.value.x = frequencyData[1] * Math.PI / 100
      customUniforms.iMouse.value.y = frequencyData[2] * Math.PI / 100;
      customUniforms.iVolume.value = audio.volume;

      requestAnimationFrame(animate);
  });
}

function setupThreeJS() {
  camera = new THREE.PerspectiveCamera(75,
      window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 20;

  renderer = new THREE.WebGLRenderer({antialiasing: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000);

  scene = new THREE.Scene();
  clock = new THREE.Clock();

  document.body.appendChild(renderer.domElement);
}

function setupWorld() {
  material = new THREE.ShaderMaterial({
    uniforms: customUniforms,
    vertexShader: glslify(__dirname + "/../glsl/vertex.glsl"),
    fragmentShader: glslify(__dirname + "/../glsl/flower.glsl")
  });
  screen = new THREE.Mesh(
      new THREE.PlaneGeometry(256, 256, 256, 256), material
  );
  scene.add(screen);

  var pointLight = new THREE.PointLight(0xffffff, 1.0);
  pointLight.position.z = 100;
  scene.add(pointLight);
}

window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

setup();

$(document).ready(function() {
    ReactDOM.render(<ShaderPlayer audio={audio} screen={screen} />, document.getElementById('shader-player'));
});
