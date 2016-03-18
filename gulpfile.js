'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');
const chokidar = require('chokidar');

gulp.task('serve', ['watch:css'], serve);
gulp.task('default', ['watch:css'], serve);
gulp.task('css', buildCss);
gulp.task('watch:css', watchCss);

function serve() {
  browserSync.init({
    server: {
      baseDir: './layout'
    }
  });

  chokidar.watch('layout/index.html')
    .on('all', browserSync.reload);
}

function watchCss() {
  chokidar.watch('layout/styles/**/*.css')
    .on('all', buildCss);
}

function buildCss() {
  const postcss       = require('gulp-postcss');
  const postcssNested = require('postcss-nested');
  const cssNext       = require('cssnext');
  const postcssImport = require('postcss-import');

  const postcssPlugins = [postcssImport, postcssNested, cssNext()];

  gulp.src('layout/styles/main.css'/*, { cwd: 'styles' }*/)
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest('layout'))
    .pipe(browserSync.stream());
};
