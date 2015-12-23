// by iq (2009)
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 iResolution;
uniform float iGlobalTime;
uniform sampler2D tex0;
uniform sampler2D tex1;
uniform sampler2D tex2;

void main(void)
{
    vec2 p = -1.0 + 2.0 * gl_FragCoord.xy / iResolution.xy;
    vec2 uv;

    float a = atan(p.y,p.x);
    float r = sqrt(dot(p,p));

    uv.x = cos(0.6+iGlobalTime) + cos(cos(1.2+iGlobalTime)+a)/r;
    uv.y = cos(0.3+iGlobalTime) + sin(cos(2.0+iGlobalTime)+a)/r;

    vec3 col =  texture2D(tex2,uv*0.25).xyz;

    gl_FragColor = vec4(col*r*r,1.0);
}
