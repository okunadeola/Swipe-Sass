const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return src('swipe/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}


function watchChange() {
  watch(['swipe/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchChange)