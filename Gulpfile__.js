'use strict';

// Gulp Plugins
var gulp 		= require('gulp'),
	jshint 		= require('gulp-jshint'),
	uglify 		= require('gulp-uglify'),
	concat 		= require('gulp-concat'),
	rename 		= require('gulp-rename'),
	sass 		= require('gulp-ruby-sass'),
	imagemin 	= require('gulp-imagemin'),
    raster      = require('gulp-raster'),
    spritesmith = require('gulp.spritesmith'),
	pngcrush 	= require('imagemin-pngcrush'),
    connect     = require('gulp-connect'),
	browserSync = require('browser-sync'),
	livereload  = require('gulp-livereload'),
	reload      = browserSync.reload,

    // VARIABLES PATH ----------------------------------------------------

        // Assets paths
        _assets     = "assets/",

    	// Build paths
    	_build_js 	= "build/js",
    	_build_css	= "build/css",
    	_build_img	= "build/img",

        // Styleguide paths
        _sg_assets  = "styleguide/lib/assets/",
        _sg_build   = "styleguide/lib/build/",

        // General files
    	_files		= ['*.php', '*.html', 'build/**/*', 'build/in/*.php', 'styleguide/**', 'styleguide/**/**', 'styleguide/**/**/'];

	// IMAGES ------------------------------------------------------------

		//Imagemin
		gulp.task('imagemin', function () {
		    return gulp.src(_assets+'img/*')
		        .pipe(imagemin({
		            progressive: true,
		            interlaced:  true,
		            use:         [pngcrush()]
		        }))
		        .pipe(gulp.dest(_build_img));
		});

		//Svg2png
		gulp.task('svg2png', function () {
		    return gulp.src(_assets+'img/*.svg')
		        .pipe(raster())
		        .pipe(rename({extname: '.png'}))
		        .pipe(gulp.dest(_build_img));
		});

		//Sprite
		gulp.task('sprite', function () {
			var spriteData = gulp.src(_assets+'img/sprite/*.png').pipe(spritesmith({
				imgName: 'sprite.png',
				cssName: 'icons.scss',
				cssFormat: 'scss',
				algorithm: 'binary-tree',
				cssTemplate: _assets+'scss/molecules/icons.mustache'
			}));
			spriteData.img.pipe(gulp.dest('build/img/sprite/'));
			spriteData.css.pipe(gulp.dest(_assets+'scss/molecules/'));
		});

	// STYLES ------------------------------------------------------------

        //main.min.css
        gulp.task('sass', function () {

    	    return gulp.src(_assets+'scss/main.scss')
    	    	.pipe(sass({
    	    		trace: true,
    	    		noCache: true,
    	    		style: "compressed"
    	    	}))
    	        .on('error', function (err) { console.log(err.message); })
    	        .pipe(rename({suffix: ".min"}))
    	        .pipe(gulp.dest(_build_css))
    	        .pipe(reload({stream:true}));
    	});

	// SCRIPTS  ----------------------------------------------------------

		// JShint
		gulp.task('lint', function() {
			return gulp.src(_assets+'js/*.js')
                .pipe(jshint())
                .pipe(jshint.reporter('default'));
		});

		// Concat
		gulp.task('concat', function() {

			// scripts.min.js
			return gulp.src([
				'components/jquery/jquery.js', // jQuery Lib
				_assets+'js/scripts.js'
				])
		    .pipe(concat('scripts.js'))
		    .pipe(gulp.dest(_build_js))
		    .pipe(rename({suffix: ".min"}))
		    .pipe(uglify())
		    .pipe(gulp.dest(_build_js))
		    .pipe(reload({stream:true}));
		});

	// BROWSER SYNC ------------------------------------------------------
    	gulp.task('browser-sync', function() {
    	    browserSync({
    	        proxy: "local.snack"
    	    });
    	});

	// LIVERELOAD --------------------------------------------------------
        gulp.task('liverelaod', function() {
            connect.server({ livereload: true });
        });

	// WATCH -------------------------------------------------------------
    	gulp.task('watch', function() {

            // watch Files
    		gulp.watch(_files, function(){
    			gulp.src(_files).pipe(connect.reload());
    		});

    		// watch JS
    		gulp.watch(_assets+'js/*.js', ['lint','concat']);

    		// watch CSS
            gulp.watch(_assets+'scss/**/*.scss', ['sass']);
    		gulp.watch(_sg_assets+'scss/*.scss', ['sass_styleguide']);

    		// watch IMAGES
    		gulp.watch([_assets+'img/*'], ['imagemin', 'svg2png']);
    		gulp.watch([_assets+'img/sprite/*.png'], ['sprite']);

    	});

	// RUN TASKS ---------------------------------------------------------
    	gulp.task('default', 	['watch', 'liverelaod']);
    	gulp.task('images',		['sprite', 'imagemin', 'svg2png']);
    	gulp.task('sync', 		['watch', 'browser-sync']);
    	gulp.task('css', 		['sass']);
    	gulp.task('js', 		['lint', 'concat']);




