//stuff
var source = require('vinyl-source-stream');
var rewire = require('rewireify');
var gulp = require('gulp');

var fn = function(file){
  rewire(file,{})
}
var rewireTask = function(){
  gulp.src('tests/*.js')
  .pipe(fn())
  .pipe(gulp.dest('../tests/rewired'))
};
gulp.task('rewire', rewireTask);
