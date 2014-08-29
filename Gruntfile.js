"use strict";

module.exports = function( grunt ) {

    grunt.initConfig({

        // Config variable paths
        config: {

            // Project paths
            dev: 'assets/',
            build: 'build/',

            // Styleguide paths
            style_dev: 'styleguide/lib/assets/',
            style_build: 'styleguide/lib/build/'
        },

        // IMAGES _____________________________________________________________________

        svgmin: {
            options: {
                plugins: [{
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }, {
                    convertPathData: { 
                        straightCurves: false
                    }
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dev %>img',
                    src: ['*.svg'],
                    dest: '<%= config.build %>img',
                    ext: '.svg'
                }]
            }
        },

        svg2png: {
            all: {
                files: [{
                    cwd: '<%= config.dev %>img/',
                    src: ['*.svg'],
                    dest: '<%= config.build %>img/'
                }]
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dev %>img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: '<%= config.build %>img'
                }]
            }
        },

        // SASS _______________________________________________________________________
        sass: {

            // Dev
            dev: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: {
                    '<%= config.build %>css/main.min.css': 
                    '<%= config.dev %>scss/main.scss'
                }
            },

            // Styleguide
            styleguide: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: {
                    '<%= config.style_build %>css/main.min.css': 
                    '<%= config.style_dev %>scss/main.scss'
                }
            }
        },

        // UGLIFY _____________________________________________________________________
        uglify: {

            // Project files
            dev: {
                files: {
                    '<%= config.build %>js/scripts.min.js': 
                    ['<%= config.dev %>js/scripts.js']
                }
            },

            // Styleguide
            styleguide: {
                files: {
                    '<%= config.style_build %>js/scripts.min.js': [
                    'components/jquery/jquery.js', // jQuery Lib
                    '<%= config.style_dev %>js/scripts.js', // Scripts
                    '<%= config.style_dev %>js/libs/rainbow-custom.min.js' // Rainbow custom
                    ]
                }
            },

            // Start files
            modernizr: {
                src: 'components/modernizr/modernizr.js',
                dest: '<%= config.build %>js/libs/modernizr.min.js'
            },

            jquery: {
                src: 'components/jquery/jquery.min.js',
                dest: '<%= config.build %>js/libs/jquery.min.js'
            },

            respond: {
                src: 'components/respond/dest/respond.min.js',
                dest: '<%= config.build %>js/libs/respond.min.js'
            }
        },

        // JSHINT _____________________________________________________________________
        jshint: {

            // Project files
            dev: ['<%= config.dev %>js/scripts.js'],
                options: {
                    globals: {
                        jQuery: true,
                        reporter: require('jshint-stylish')
                }
            }

        },


        // WATCH ______________________________________________________________________
        watch: {

            // PROJECT TASKS

            // Run SASS task for .scss files
            sass_dev: {
                files: [
                    '<%= config.dev %>scss/**/*.scss',
                    '<%= config.dev %>scss/*.scss'
                ],
                tasks: ['sass:dev'],
            },

            // Run Uglify task when scripts are modified
            scripts_dev: {
                files: ['<%= config.dev %>js/scripts.js'],
                tasks: ['jshint:dev', 'uglify:dev'],
            },

            svg: {
                files: ['<%= config.dev %>img/*.svg'],
                tasks: ['svgmin', 'svg2png']
            },

            images: {
                files: ['<%= config.dev %>img/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            },

            // STYLEGUIDE TASKS

            // Run SASS task for .scss files
            sass_styleguide: {
                files: ['<%= config.style_dev %>scss/*.scss'],
                tasks: ['sass:styleguide'],
            },

            // Run Uglify task when scripts are modified
            scripts_styleguide: {
                files: ['<%= config.style_dev %>js/scripts.js'],
                tasks: ['uglify:styleguide'],
            },

            // Update :)
            livereload: {
                options: { livereload: true },
                files: [
                    // Project files
                    '*.php',
                    '<%= config.build %>in/*.php',
                    '<%= config.build %>css/main.min.css',
                    '<%= config.build %>js/scripts.min.js',
                    '<%= config.build %>img/*.{png,jpg,gif,svg}',
                    // Styleguide files
                    '<%= config.style_build %>css/main.min.css',
                    '<%= config.style_build %>js/scripts.min.js'
                ],
            },
        }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-svg2png');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Grunt tasks

    // Init
    grunt.registerTask( 'init', [ 'uglify:modernizr', 'uglify:jquery', 'uglify:respond' ] );

    // CSS
    grunt.registerTask( 'css', [ 'sass' ] );

    // JS
    grunt.registerTask( 'js', [ 'jshint', 'uglify' ] );

    // Images
    //grunt.registerTask( 'images', [ 'svgmin', 'svg2png' ] );
    grunt.registerTask( 'images', [ 'imagemin' ] );

    // Watch
    grunt.registerTask( 'live', [ 'watch' ] );

};