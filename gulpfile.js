const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function compileTypeScript() {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist')); // Путь, куда будет скомпилирован JavaScript
}

gulp.task('compile', compileTypeScript);

// Задача для отслеживания изменений и автоматической компиляции
gulp.task('watch', () => {
  gulp.watch('src/**/*.ts', compileTypeScript);
});

// Задача по умолчанию
gulp.task('default', gulp.series('compile', 'watch'));
