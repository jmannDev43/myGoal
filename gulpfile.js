var gulp = require('gulp');
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    browserify = require('gulp-browserify'),
    exec = require('child_process').exec,

gulp.task('connect', function(){
    connect.server({
        //root: './',
        port: 8040,
        livereload: true
    })
});

gulp.task('openAndBrowse', ['connect'], function(){
   gulp.src('')
    .pipe(open({ uri: 'http://localhost:8040', app: 'chrome' }));
});

gulp.task('reloadAllFiles', function(){
   gulp.src('./**/*')
    .pipe(connect.reload());
});

gulp.task('default', ['connect', 'openAndBrowse']);