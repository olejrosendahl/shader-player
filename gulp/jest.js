var npm = require('npm');
var color = require('cli-color');
var fs = require('fs');

module.exports = function(gulp, opts, $){
    var config = opts.config;
    var prev = "";

    gulp.task('watch-jest', ['npm-test'], function() {
        var jestWithPath = function(file){
            var path = file.path;
            if(!file.path.match('__tests__') && file.path.match('src/js')){
                var parts = file.path.split('src/js');
                //console.log(parts);
                var name = parts[1].replace('.js', '-test.js');
                path = parts[0]+'__tests__'+name;
            }
            else if(file.path.match('__mocks__')){
                path = prev;
            }

            var filename = path.split('/').slice(-1);
            var jest = function(){
                hightlight('Starting jest for ' + filename);
                prev = path;
                npm.load(function (er, npm) {
                    npm.commands.run(
                        ['test', path, config['noStackTrace'] ? '--noStackTrace' : ''],
                        function(){
                            hightlight("Finished jest for " + filename, true);
                        });
                });
            }

            fs.exists(path, function(yes){
                if(!yes) $.util.log(color.black['bgRed']('No test found in ' + path));
                else jest();
            });
        };

        gulp.watch(['./__tests__/**/*-test.js', './src/js/**/*.js', './__mocks__/**/*.js']).on('change', jestWithPath);
    });

    gulp.task('jest', ['npm-test'], function() {
       gulp.watch(
            ['./__tests__/**/*-test.js', './src/js/**/*.js', './__mocks__/**/*.js'],
            ['npm-test']);
    });

    gulp.task('npm-test', function(){
        npm.load(function (er, npm) {
            npm.commands.run(['test', config['noStackTrace'] ? '--noStackTrace' : ''], function(){});
        });
    });

    var prevColor = null;
    function hightlight(prefix, usePrevColor){
        var c = ['bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite'];
        var r = Math.floor(Math.random() * 7);
        var e = usePrevColor && prevColor? prevColor(prefix) : color.black[c[r]](prefix);
        $.util.log(e);
        prevColor = color.black[c[r]];
    }
}
