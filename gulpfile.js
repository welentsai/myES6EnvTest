
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
	// Node 來源
	// ** => means 所有目錄(包含子目錄)

	// 執行 ESLint
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])  //To use multiple sources you need to put them in an array.
		.pipe(eslint())
		.pipe(eslint.format())

	// 將 es6/ 裡面所有程式轉換成 dist/ 裡面的 ES5程式
	gulp.src("es6/**/*.js")
		.pipe(babel())  // gulp 使用管道的概念來做事, pass all .js files to babel()
		.pipe(gulp.dest("dist")) // babel() will translate ES6 to ES5 then pass to destination dist folder

	// 將 public/es6/ 裡面所有程式轉換成 public/dist/ 裡面的 ES5程式
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"))
});