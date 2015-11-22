var args = require('yargs').argv,
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    opts = {args: args},
    config = {
        target: args.target || 'src/js/shader-player.js',
        jsDir: './src/js',

        vendorDir: './build',
        distDir: './build/js',
        srcDir: './src/js',
        sassDir: './src/sass',

        noStackTrace: true,
        afterBuild: ['eslint']
    };

opts['config'] = config;

require('./gulp/browserify')(gulp, opts, $);
require('./gulp/jest')(gulp, opts, $);
require('./gulp/eslint')(gulp, opts, $);
require('./gulp/sass')(gulp, opts, $);

gulp.task('default',['browserify']);
gulp.task('watch', ['watch-browserify', 'watch-sass']);

gulp.task('test', ['jest']);
gulp.task('test-one', ['watch-jest']);
