#pragma glslify: noise = require(glsl-noise/simplex/2d)

uniform float iGlobalTime;
uniform vec2 iMouse;
uniform vec2 iResolution;
uniform float iVolume;

mat2 rotate(in float theta) {
  return mat2(cos(theta), -sin(theta), sin(theta), cos(theta));
}

void main() {
  vec2 p = 2. * gl_FragCoord.xy / iResolution.xy - 1.;
  p.x *= iResolution.x / iResolution.y;
  p *= (2. + cos(iGlobalTime*.5 + length(p)) * (4.+21.*iMouse.x)) * rotate(iGlobalTime * (0.5-iMouse.y)) * iVolume;

  float f = (length(p / p.x / p.y));
  f *= noise(p.xy);

  f *= cos(p.x * 1.5)-sin(p.x*p.y);
  f *= cos(p.y * 1.5)+sin(p.x*p.y);

  vec3 c = vec3(0.6+0.4*sin(iGlobalTime), 0.5+0.2*cos(iGlobalTime*1.22), 0.5-0.3*sin(iGlobalTime*0.33))*f*f*.62;

  gl_FragColor = vec4(c,1.0);
}
