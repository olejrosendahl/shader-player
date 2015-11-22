var sequence = require('run-sequence');
var color = require('cli-color');

module.exports = function(gulp, opts, $){
    var config = opts.config;

    gulp.task('sass', function(cb){
        sequence('bower-copy', 'ruby-sass', cb);
    });

    gulp.task('watch-sass', ['css-rebundle'], function() {
        return gulp.watch(
            ['./src/sass/**/*.scss'],
            ['css-rebundle']);
    });

    gulp.task('css-rebundle', function(cb){
        sequence('ruby-sass', function(){
            hightlight("Finished bundling for \'watch-sass\'");
            cb.apply(null, arguments);
        });
    });

    gulp.task('ruby-sass', function() {
        return $.rubySass(config.sassDir + '/**/*.scss')
          .on('error', $.rubySass.logError)
          .pipe(gulp.dest('build/css'));
    });

    function hightlight(prefix){
        var c = ['bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite'];
        var r = Math.floor(Math.random() * 7);
        var e = color.black[c[r]](prefix);
        $.util.log(e);
    }
}
