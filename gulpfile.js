var gulp = require('gulp');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var fs = require('fs');
var gulpmatch = require('gulp-match');
var plumber = require('gulp-plumber');

gulp.task('watch', function () {
  gulp.watch('./jade/*.jade', ['jade']);
  gulp.watch('./stylus/*.styl', ['stylus']);
});

gulp.task('jade', function () {
  // 最新のJSONファイルを同期読み込みしてオブジェクトを生成
  var json = JSON.parse(fs.readFileSync("./i18n/ja.json"));
  gulp.src('./jade/*.jade')  // gulp.src でファイルを指定
  .pipe(jade(json))                  // jade plugin に通して
  .pipe(gulp.dest('./'))  // gulp.dest で書きだす
});

gulp.task('stylus', function() {
  gulp.src('stylus/*')
  .pipe(stylus())
  .pipe(gulp.dest('css/'));
});
