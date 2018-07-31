"use strict";
var gulp = require('gulp'),
	rename = require("gulp-rename"),

	// compass = require('gulp-compass'),
	// sass = require('gulp-ruby-sass'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),

	notify = require("gulp-notify"),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	uglify  = require('gulp-uglify'),
	gulpif = require('gulp-if'),
	// imagesjpeg = require('imagemin-mozjpeg'),
	// imagespng = require('imagemin-pngquant'),

	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	clean = require('gulp-clean'),

	// imageminMozjpeg = require('imagemin-mozjpeg'),
	// imageminPngquant = require('imagemin-pngquant'),

	gulpPlumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	log = require('gulp-util').log;
	
/*
	gulp              : 自動化測試
	gulp-rename       : 修改檔名
	gulp-compass      : COMPASS
	gulp-connect      : 網站伺服器server
	gulp-livereload   : 自動重新整理
	gulp-uglify       : 最小化 JavaScript
	gulp-notify       : 動作完成告示
	imagemin-mozjpeg  : 圖片壓縮 jpg
	imagemin-pngquant : 圖片壓縮 png
	gulp-cache        : 刪除工具
	gulp-plumber      : 例外處理
	gulpif            : 判斷條件

*/

/*
  _____ ______ _______      ________ _____
 / ____|  ____|  __ \ \    / /  ____|  __ \
| (___ | |__  | |__) \ \  / /| |__  | |__) |
 \___ \|  __| |  _  / \ \/ / |  __| |  _  /
 ____) | |____| | \ \  \  /  | |____| | \ \
|_____/|______|_|  \_\  \/   |______|_|  \_\

無法重新整理時改 port 試試看
*/
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		port: 3000,
		livereload: true
	});
});
 
/*
 _    _ _______ __  __ _
| |  | |__   __|  \/  | |
| |__| |  | |  | \  / | |
|  __  |  | |  | |\/| | |
| |  | |  | |  | |  | | |____
|_|  |_|  |_|  |_|  |_|______|
*/
gulp.task('html', function () {
    gulp.src('src/*.{html,json,xml,aspx}')
	.pipe(gulp.dest('app'))
    .pipe(connect.reload());
});
 
 
/*
  ___ ___ ___
 / __/ __/ __|
| (__\__ \__ \
 \___|___/___/

*/
gulp.task('css', function () {
	gulp.src('src/css/**/*.css')
    .pipe(connect.reload())
});
 

/*
  _____          _____ _____         _____ ____  __  __ _____         _____ _____
 / ____|  /\    / ____/ ____| ___   / ____/ __ \|  \/  |  __ \ /\    / ____/ ____|
| (___   /  \  | (___| (___  ( _ ) | |   | |  | | \  / | |__) /  \  | (___| (___
 \___ \ / /\ \  \___ \\___ \ / _ \/\ |   | |  | | |\/| |  ___/ /\ \  \___ \\___ \
 ____) / ____ \ ____) |___) | (_>  < |___| |__| | |  | | |  / ____ \ ____) |___) |
|_____/_/    \_\_____/_____/ \___/\/\_____\____/|_|  |_|_| /_/    \_\_____/_____/


每個scss檔案記得加上 @charset "UTF-8"; 不然中文會出錯!!!
*/

// gulp.task('compass', function() {

// 	gulp.src('src/scss/**/*.scss') 
// 	.pipe(gulpPlumber())
//     .pipe(compass({
//         css: 'app/css',         
//         sass: 'src/scss',     
//         image: 'src/images',  
//         style: 'compact',    //nested & compressed
//         comments: false
//     }))

// 	.pipe(gulp.dest('src/css'))
//     .pipe(connect.reload())
// });

gulp.task('sass',['clean'], function () {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['> 5%']
        }))         
        .pipe(gulp.dest('app/css'))
        .pipe(connect.reload());
});
gulp.task('clean', function () {
	return gulp.src('app/css/**/*', {read: false}).pipe(clean({force: true}));
});

/*
      _  _____
     | |/ ____|
     | | (___
 _   | |\___ \
| |__| |____) |
 \____/|_____/

*/

gulp.task('js',['cleanJS'], function () {
   return gulp.src('src/js/**/*.js')
   		 .pipe(gulpPlumber())
	     .pipe(uglify())
	     /*.pipe(rename({
	     	extname: '.min.js'
	     }))*/
   		 .pipe(gulp.dest('app/js'))
    	 .pipe(connect.reload());
});
gulp.task('cleanJS', function () {
	return gulp.src('app/js/**/*', {read: false}).pipe(clean({force: true}));
});


/*
 _
(_)
 _ _ __ ___   __ _
| | '_ ` _ \ / _` |
| | | | | | | (_| |
|_|_| |_| |_|\__, |
              __/ |
             |___/


*/
/*gulp.task('images', function () {
    gulp.src('src/images/**')
    .pipe(gulpPlumber())
    .pipe( gulpif('*.jpg', imagesjpeg({quality: 100})()) )
    .pipe( gulpif('*.png', imagespng({quality: 100})()) )
    .pipe(gulp.dest('app/images'))
   	.pipe(connect.reload());
});*/
/*gulp.task('images', function () {
	imagemin(['src/images/*.{jpg,png}'], 'app/images', {
	    plugins: [
	        imageminMozjpeg({targa: true}),
	        imageminPngquant({quality: '65-80'})
	    ]
	}).then(files => {
	    console.log(files);
	});
});*/
gulp.task('images', function () {
    gulp.src('src/images/**/*.{jpg,png,gif}')
    .pipe(cache(imagemin({
    	optimizationLevel: 4,
        progressive: true,
        use: [pngquant()]
    })))
    .pipe(gulp.dest('app/images'))
    .pipe(connect.reload());
});


/*
__          __  _______ _____ _    _
\ \        / /\|__   __/ ____| |  | |
 \ \  /\  / /  \  | | | |    | |__| |
  \ \/  \/ / /\ \ | | | |    |  __  |
   \  /\  / ____ \| | | |____| |  | |
    \/  \/_/    \_\_|  \_____|_|  |_|
*/
gulp.task('watch', function () {
	log('watchStart');
	gulp.watch(['src/*.{html,json,xml,aspx}'], ['html']);
	gulp.watch(['src/css/**/*.css'], ['css']);
	gulp.watch(['src/scss/**/*.scss'], ['sass']);
	gulp.watch(['src/js/**/*.js'], ['js']);
	gulp.watch(['src/images/**/*.{jpg,png,gif}'], ['images']);
});

gulp.task('default', ['connect', 'html', 'css', 'images', 'sass', 'js', 'watch']);