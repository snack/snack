'use strict';

// Gulp Plugins
var gulp 		= require('gulp'),
    plugins     = require('gulp-load-plugins')({    // Load all gulp plugins automatically
        rename: {
            'gulp-ruby-sass': 'sass'
        }
    }),
    stylish     = require('jshint-stylish'),        // jshint
    pngquant    = require('imagemin-pngquant'),     // Png compress
    browserSync = require('browser-sync').create(), // BrowserSync
    reload      = browserSync.reload,               // Reload
    pkg         = require('./package.json'),        // Package.json include directories
    dirs        = pkg['configs'].directories,

    // General files
	_files		= ['*.php', '*.html', 'build/**/*', 'build/in/*.php', 'styleguide/**', 'styleguide/**/**', 'styleguide/**/**/'];

    // COPY --------------------------------------------------------------

        gulp.task('copy:jquery', function () {
            return gulp.src(dirs._components+"/jquery/jquery.js")
                        .pipe(plugins.replace('/*!', '/*'))
                        .pipe(plugins.rename({suffix: ".min"}))
                        .pipe(plugins.uglify())
                        .pipe(gulp.dest(dirs._build+'/js/libs/'));
        });

        gulp.task('copy:html5shiv', function () {
            return gulp.src(dirs._components+"/html5shiv/dist/html5shiv.js")
                        .pipe(plugins.replace('/*!', '/*'))
                        .pipe(plugins.rename({suffix: ".min"}))
                        .pipe(plugins.uglify())
                        .pipe(gulp.dest(dirs._build+'/js/libs/'));
        });

        gulp.task('copy:respond', function () {
            return gulp.src(dirs._components+"/respond/src/respond.js")
                        .pipe(plugins.replace('/*!', '/*'))
                        .pipe(plugins.rename({suffix: ".min"}))
                        .pipe(plugins.uglify())
                        .pipe(gulp.dest(dirs._build+'/js/libs/'));
        });

        gulp.task('copy:normalize', function () {
            return gulp.src(dirs._components+'/normalize.css/normalize.css')
                        .pipe(plugins.replace('/*!', '/*'))
                        .pipe(plugins.rename('normalize.scss'))
                        .pipe(gulp.dest(dirs._assets+'/scss/base'));
        });

        gulp.task('copy:font-awesome', function () {
            gulp.src(dirs._components+'/font-awesome/fonts/*')
                        .pipe(gulp.dest(dirs._build+'/fonts/font-awesome/'));

            gulp.src(dirs._components+'/font-awesome/css/font-awesome.css')
                        .pipe(plugins.replace('/*!', '/*'))
                        .pipe(plugins.replace('../fonts/', '../../build/fonts/font-awesome/'))
                        .pipe(plugins.rename('font-awesome.scss'))
                        .pipe(gulp.dest(dirs._assets+'/scss/atoms/'));
        });

    // IMAGES ------------------------------------------------------------

		//Imagemin
		gulp.task('imagemin', function () {
		    return gulp.src(dirs._assets+'/img/*')
		        .pipe(plugins.imagemin({
		            progressive: true,
		            interlaced:  true,
		            use:         [pngquant()]
		        }))
		        .pipe(gulp.dest(dirs._build+'/img'));
		});

		//Svg2png
		gulp.task('svg2png', function () {
		    return gulp.src(dirs._assets+'/img/*.svg')
		        .pipe(plugins.raster())
		        .pipe(plugins.rename({extname: '.png'}))
		        .pipe(gulp.dest(dirs._build+'/img'));
		});

		//Sprite
		gulp.task('sprite', function () {
			var spriteData = gulp.src(dirs._assets+'/img/sprite/*.png').pipe(plugins.spritesmith({
				imgName: 'sprite.png',
				cssName: 'icons.scss',
				cssFormat: 'scss',
				algorithm: 'binary-tree',
				cssTemplate: dirs._assets+'/scss/molecules/icons.mustache'
			}));
			spriteData.img.pipe(gulp.dest(dirs._build+'/img/sprite/'));
			spriteData.css.pipe(gulp.dest(dirs._assets+'/scss/molecules/'));
		});

	// STYLES ------------------------------------------------------------

        //main.min.css
        gulp.task('sass', function () {

    	    return gulp.src(dirs._assets+'/scss/main.scss')
                .pipe(plugins.rename({suffix: ".min"}))
                .pipe(plugins.sass({
                    trace: true,
                    noCache: true,
                    style: "compressed"
                }))
                .on('error', function (err) { console.log(err.message); })
                .pipe(gulp.dest(dirs._build+"/css"))
                .pipe(plugins.livereload())
                .pipe(reload({stream:true}));
    	});

        //Style Guide
        gulp.task('sass_styleguide', function () {

            return gulp.src(dirs._sg_assets+'/scss/main.scss')
                .pipe(plugins.rename({suffix: ".min"}))
                .pipe(plugins.sass({
                    trace: true,
                    noCache: true,
                    style: "compressed"
                }))
                .on('error', function (err) { console.log(err.message); })
                .pipe(gulp.dest(dirs._sg_build+'/css/'))
                .pipe(plugins.livereload())
                .pipe(reload({stream:true}));
        });

	// SCRIPTS  ----------------------------------------------------------

		// JShint
		gulp.task('lint', ['concat'], function() {
			return gulp.src(dirs._assets+'/js/*.js')
                .pipe(plugins.jshint())
                .pipe(plugins.jshint.reporter(stylish))
                .pipe(plugins.jshint.reporter('default'));
		});

		// Concat
		gulp.task('concat', function() {

			// scripts.min.js
			gulp.src([
    				dirs._build+'/js/libs/jquery.min.js', // jQuery Lib
    				dirs._assets+'/js/scripts.js'
				])
    		    .pipe(plugins.concat('scripts.js'))
    		    .pipe(gulp.dest(dirs._build+"/js"))
    		    .pipe(plugins.rename({suffix: ".min"}))
    		    .pipe(plugins.uglify())
    		    .pipe(gulp.dest(dirs._build+"/js"))
                .pipe(plugins.livereload())
    		    .pipe(reload({stream:true}));

            // Styleguide js
            gulp.src([
                    dirs._build+'/js/libs/jquery.min.js', // jQuery Lib
                    dirs._sg_assets+'/js/scripts.js', // Scripts
                    dirs._sg_assets+'/js/libs/rainbow-custom.min.js', // Rainbow custom
                ])
                .pipe(plugins.concat('scripts.js'))
                .pipe(gulp.dest(dirs._sg_build+"/js"))
                .pipe(plugins.rename({suffix: ".min"}))
                .pipe(plugins.uglify())
                .pipe(gulp.dest(dirs._sg_build+"/js"))
                .pipe(plugins.livereload())
                .pipe(reload({stream:true}));
		});

        // Rename IE8 / IE7 support js
        gulp.task('rename:html5shiv-respond', function () {
            return gulp.src([
                    dirs._components+"/html5shiv/dist/html5shiv.js", // html5shiv
                    dirs._components+"/respond/src/respond.js"       // Respond
                ])
                .pipe(plugins.concat('html5shiv-respond.js'))
                .pipe(plugins.rename({suffix: ".min"}))
                .pipe(plugins.uglify())
                .pipe(gulp.dest(dirs._build+"/js/libs/"));
        });

	// BROWSER SYNC ------------------------------------------------------
    	gulp.task('browser-sync', function() {
            browserSync.init({
                proxy: "local.snack"
            });
    	});

	// WATCH -------------------------------------------------------------
    	gulp.task('watch', function() {

            // Livereload
            plugins.livereload.listen();

            // watch Files
            gulp.watch('*.php').on('change', function(){
                plugins.livereload.changed('/*.php');
            });

    		// watch JS
            gulp.watch([dirs._assets+'/js/*.js', dirs._sg_assets+'/js/*.js'], ['lint']);

    		// watch CSS
            gulp.watch(dirs._assets+'/scss/**/*.scss', ['sass']);
    		gulp.watch(dirs._sg_assets+'/scss/*.scss', ['sass_styleguide']);

    		// watch IMAGES
    		gulp.watch([dirs._assets+'/img/*'], ['imagemin', 'svg2png']);
    		gulp.watch([dirs._assets+'/img/sprite/*.png'], ['sprite']);

    	});

	// RUN TASKS ---------------------------------------------------------
    	gulp.task('default', 	['watch', 'copy']);
    	gulp.task('images',		['sprite', 'imagemin', 'svg2png']);
    	gulp.task('sync', 		['watch', 'browser-sync']);
    	gulp.task('css', 		['sass']);
        gulp.task('js',         ['lint', 'concat']);
        gulp.task('copy',       [
                                    'copy:jquery',
                                    'copy:html5shiv',
                                    'copy:respond',
                                    'copy:normalize',
                                    'copy:font-awesome',
                                    'rename:html5shiv-respond'
                                ]);
