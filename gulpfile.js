var gulp = require('gulp');
var copy = require('gulp-copy');
var clean = require('gulp-clean');
var server = require('gulp-server-livereload');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

// Clean dist folder
gulp.task('clean', function() {
  return gulp.src('./dist', {
    read: false
  }).pipe(clean({
    force: true
  }));
});

// Move HTML assets to dist
gulp.task('copy', ['clean'], function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

// Transpile JS to dist
gulp.task('transpile', ['clean'], function() {
  return browserify({
    entries: 'src/js/app.jsx',
    extensions: ['.jsx']
  })
    .transform(babelify.configure({
      extensions: ['.jsx'],
      presets: ["es2015", "react"]
    }))
    .bundle()
    .pipe(source('js/bundle.js'))
    .pipe(gulp.dest('dist'));
});

// Livereload server
gulp.task('webserver', function() {
  gulp.src('./dist')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['clean', 'transpile', 'copy']);
