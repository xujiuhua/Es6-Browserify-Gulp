const gulp          = require( 'gulp' );
const browserify    = require( "browserify" );
const source        = require( 'vinyl-source-stream' );  
const babelify      = require( "babelify" );            //es6转es5


gulp.task('es6', function() {  
return browserify('./src/js/index.js')
    .transform(babelify, {
        presets: ["es2015"]
    })
    .bundle()
    .pipe(source('bundle.js')) // gives streaming vinyl file object
    .pipe(gulp.dest('dist'));
});

// Lets bring es6 to es5 with this.
// Babel - converts ES6 code to ES5 - however it doesn't handle imports.
// Browserify - crawls your code for dependencies and packages them up 
// into one file. can have plugins.
// Babelify - a babel plugin for browserify, to make browserify 
// handle es6 including imports.

gulp.task('watch', function () {
    //监听html
    gulp.watch('./**/*.js', function (event) {
        gulp.start("browserify");
    });
});


