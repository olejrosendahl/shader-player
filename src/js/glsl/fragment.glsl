uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

mat2 rotate(in float theta) {
  return mat2(cos(theta), -sin(theta), sin(theta), cos(theta));
}

void main() {
  vec2 p = 2. * gl_FragCoord.xy / resolution.xy - 1.;
  p.x *= resolution.x / resolution.y;
  p *= (2. + cos(time*.5 + length(p)) * (4.+21.*mouse.x)) * rotate(time * (0.5-mouse.y));

  float f = (length(p / p.x / p.y));

  f *= cos(p.x * 1.5)-sin(p.x*p.y);
  f *= cos(p.y * 1.5)+sin(p.x*p.y);

  vec3 c = vec3(0.6+0.4*sin(time), 0.5+0.2*cos(time*1.22), 0.5-0.3*sin(time*0.33))*f*f*.62;

  gl_FragColor = vec4(c,1.0);
}
