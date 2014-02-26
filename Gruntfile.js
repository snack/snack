module.exports = function(grunt) {

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),

        globalConfig: {
            files: [
                '*.php',
                '*.html',
                'build/in/*.php',
                'styleguide/**',
                'styleguide/**/**',
                'styleguide/**/**/'
            ],

            // Projects assets and build paths for .css and .scss files
            dev_scss: 'assets/scss',
            dev_css: 'build/css',

            // Styleguide assets and build paths for .css and .scss files
            styleguide_scss: 'styleguide/lib/assets/scss',
            styleguide_css: 'styleguide/lib/build/css',

            // Projects assets and build paths for .js files
            dev_js: 'assets/js',
            dev_build_js: 'build/js',

            // Styleguide assets and build paths for .js files
            styleguide_js: 'styleguide/lib/assets/js',
            styleguide_build_js: 'styleguide/lib/build/js',

            // Projects assets and build paths for img files
            img_dev: 'assets/img',
            img_build: 'build/img'
        },

        // -- Image min --------------------------------------------------------------
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: '<%= globalConfig.img_dev %>',
                    src: ['*.png'],
                    dest: '<%= globalConfig.img_build %>',
                    ext: '.png'
                }]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= globalConfig.img_dev %>',
                    src: ['*.jpg'],
                    dest: '<%= globalConfig.img_build %>',
                    ext: '.jpg'
                }]
            }
        },

        // -- SVG 2 PNG --------------------------------------------------------------
        svg2png: {
            all: {
                files: [{
                    src: ['<%= globalConfig.img_dev %>/*.svg'],
                    dest: '<%= globalConfig.img_build %>'
                }]
            }
        },

        // -- CopySVG config ------------------------------------------------------------
        copy: {
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['<%= globalConfig.img_dev %>/*.svg'],
                    dest: '<%= globalConfig.img_build %>',
                    filter: 'isFile'
                }]
            }
        },

        // -- Concat config ----------------------------------------------------------
        concat: {

            // Project files
            dev: {
                src: [
                    'components/jquery/jquery.js', // jQuery Lib
                    '<%= globalConfig.dev_js %>/scripts.js', // Project scripts
                    'assets/js/libs/analytics.js' // GA track
                ],
                dest: '<%= globalConfig.dev_build_js %>/all.js',
            },

            // Styleguide files
            styleguide: {
                src: [
                    'components/jquery/jquery.js', // jQuery Lib
                    '<%= globalConfig.styleguide_js %>/scripts.js', // Styleguide scripts
                    '<%= globalConfig.styleguide_js %>/rainbow-custom.min.js' // Pretty code
                ],
                dest: '<%= globalConfig.styleguide_build_js %>/all.js',
            }

        },

        // -- Uglify config ----------------------------------------------------------
        uglify: {

            // Project files
            dev: {
                src: '<%= globalConfig.dev_build_js %>/all.js',
                dest: '<%= globalConfig.dev_build_js %>/all.min.js'
            },

            modernizr: {
                src: 'components/modernizr/modernizr.js',
                dest: '<%= globalConfig.dev_build_js %>/modernizr.min.js'
            },

            respond: {
                src: 'components/respond/dest/respond.min.js',
                dest: '<%= globalConfig.dev_build_js %>/respond.min.js'
            },

            // Styleguide files
            styleguide: {
                src: '<%= globalConfig.styleguide_build_js %>/all.js',
                dest: '<%= globalConfig.styleguide_build_js %>/all.min.js'
            }

        },

        // -- JShint config ----------------------------------------------------------
        jshint: {

            //Project files
            dev: ['<%= globalConfig.dev_js %>/scripts.js'],
                options: {
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true
                }
            },

            // Styleguide files
            styleguide: ['<%= globalConfig.styleguide_js %>/scripts.js'],
                options: {
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true
                }
            }

        },

        // -- SASS config ------------------------------------------------------------
        sass : {

            // Project files
            dev : {
                options : {
                    style : 'expanded',
                    noCache: true
                },
                files : {
                    '<%= globalConfig.dev_css %>/main.min.css' : '<%= globalConfig.dev_scss %>/main.scss'
                }
            },

            // Styleguide files
            styleguide : {
                options : {
                    style : 'compressed',
                    noCache: true
                },
                files : {
                    '<%= globalConfig.styleguide_css %>/main.min.css' : '<%= globalConfig.styleguide_scss %>/main.scss'
                }
            },

        },

        // -- Browser sync config ----------------------------------------------------
        browser_sync: {
            files: {
                src : [
                    '<%= globalConfig.files %>',
                    '<%= globalConfig.files.dev_css %>/*.css',
                    '<%= globalConfig.dest_css_styleguide %>/*.css'
                ]
            },
            options: {
                watchTask: true,
                proxy: {
                    host: "local.a2boilerplate"
                },
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                }
            }
        },

        // -- Watch config -----------------------------------------------------------
        watch: {

            livereload: {
                options: { livereload: true },
                files: [
                    '<%= globalConfig.files %>',
                    '<%= globalConfig.dev_css %>/*.css'
                ]
            },

            images: {
                files: [
                    '<%= globalConfig.img_dev %>/*.png',
                    '<%= globalConfig.img_dev %>/*.jpg'
                ],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            svg: {
                files: ['<%= globalConfig.img_dev %>/*.svg'],
                tasks: ['svg2png', 'copy'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            // Project files
            scripts_dev: {
                files: ['<%= concat.dev.src %>'],
                tasks: ['jshint:dev', 'concat:dev', 'uglify:dev'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },

            css_dev: {
                files: [
                    '<%= globalConfig.dev_scss %>/*.scss',
                    '<%= globalConfig.dev_scss %>/**/*.scss'
                ],
                tasks: ['sass:dev']
            },

            // Styleguide files
            scripts_styleguide: {
                files: ['<%= concat.styleguide.src %>'],
                tasks: ['jshint:styleguide', 'concat:styleguide', 'uglify:styleguide'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            css_styleguide: {
                files: [
                    '<%= globalConfig.styleguide_scss %>/*.scss'
                ],
                tasks: ['sass:styleguide']
            },

        }

    };

    grunt.initConfig(gruntConfig);

    // Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-svg2png');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browser_sync', 'watch', 'concat', 'uglify', 'jshint', 'sass', 'imagemin', 'svg2png', 'copy'] );

    // Watch task
    grunt.registerTask( 'w', [ 'watch' ] );

    // CSS task
    grunt.registerTask( 'css', [ 'sass' ] );

    // JS task
    grunt.registerTask( 'js', [ 'concat', 'uglify', 'jshint' ] );

    // Compress images task
    grunt.registerTask( 'images', [ 'imagemin', 'svg2png', 'copy' ] );

    // Browser sync task
    grunt.registerTask( 'sync', [ 'browser_sync', 'watch' ] );

    // Start taks
    grunt.registerTask( 'init', [ 'uglify:modernizr', 'uglify:respond' ] );
};
