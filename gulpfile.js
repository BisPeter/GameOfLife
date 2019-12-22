const {src, dest, watch, parallel, series} = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function () {
    return tsProject.src()
        .pipe(tsProject(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        })))
        .js.pipe(gulp.dest('dist'));
});
async function test() {
	console.log('test function');
}

const task = {
    validateHtml: () => {
       return gulp.src('*.html')
          .pipe(htmlValidator())
          .pipe(htmlValidator.reporter());
       }
    };
  
 // Gulp
 gulp.task('validate-html', task.validateHtml);

exports.default = parallel(test);