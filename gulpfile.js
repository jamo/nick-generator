const gulp = require('gulp')
const babel = require('gulp-babel')
const cache = require('gulp-cached')

const paths = {
  index: 'index.js'
}

gulp.task('index', () => {
  return gulp.src(paths.index)
  .pipe(cache('index'))
  .pipe(babel())
  .pipe(gulp.dest('dist/'))
})

gulp.task('watch', () => {
  gulp.watch(paths.index, ['index'])
})

gulp.task('transpile', ['index'])
gulp.task('default', ['watch', 'transpile'])

