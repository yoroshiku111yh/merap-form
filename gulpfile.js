var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var babelify = require('babelify');
var rename = require('gulp-rename')
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var wait = require('gulp-wait');
var clean = require('gulp-clean');
gulp.task('react-bundle', () => {
    return browserify({ entries: ['./app/index.js'] })
        .transform(babelify, { presets: ["@babel/preset-react", "@babel/preset-env"] }) // "es2015", "react"
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/assets/js/bundle-react'));
});

gulp.task('compress', () => {
    gulp.src(['./app//public/assets/js/*.js', '!./app/public/assets/js/*.min.js'])
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./build/assets/js/minify'))
})

gulp.task('sass', () => {
    gulp.src(['./app/public/assets/css/**/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./build/assets/css'))
})

gulp.task('clear-build', () => {
    return gulp.src('./build', { read : false}).pipe(clean())
})

gulp.task('copy-html', () => {
    gulp.src([
        './app/*.html',
    ], { base: 'app' })
        .pipe(wait(1000))
        .pipe(gulp.dest('build'))
})

gulp.task('copy-public', () => {
    gulp.src([
        './app/public/assets/images/**/*',
        './app/public/assets/fonts/**/*',
        './app/public/assets/css/*.css',
        './app/public/assets/js/minify/*.min.js',
    ], { base: './app/public/assets' })
        .pipe(wait(1000))
        .pipe(gulp.dest('build/assets'))
})

gulp.task('copy', ['copy-public', 'copy-html'], () => {});

gulp.task('browser-sync',['sass', 'compress', 'react-bundle' ], () => {
    browserSync.init({
        notify: false,
        port: 9000,
        open: 'external',
        server: {
            baseDir: ['./build'],
            directory: true,
        },
    });
})

gulp.task('server', ['browser-sync', 'copy'], function(){
    gulp.watch(
        [
            './app/public/assets/css/**/*.scss',
            './app/public/assets/**/*.js',
            './app/*.html',
            './app/**/*.js'
        ],
        [
            'sass',
            'compress',
            'react-bundle',
            'copy'
        ]);
})

gulp.task('build', ['react-bundle', 'compress', 'sass', 'copy'], function () { });