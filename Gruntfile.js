module.exports = function(grunt) {

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),

        globalConfig: {
            files: [
                '*.php',
                '*.html',
                'assets/in/*.php',
                'styleguide/**',
                'styleguide/**/**',
                'styleguide/**/**/'
            ],
            // Path dev .css and .scss files
            dev_scss: 'assets/scss',
            dev_css: 'build/css',

            // Path styleguide .css and .scss files
            styleguide_scss: 'styleguide/lib/assets/scss',
            styleguide_css: 'styleguide/lib/build/css',

            // Path dev .js files
            dev_js: 'assets/js',
            dev_build_js: 'build/js',

            // Path styleguide .js files
            styleguide_js: 'styleguide/lib/assets/js',
            styleguide_build_js: 'styleguide/lib/build/js'
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
                    style : 'compressed',
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

        // -- Watch config -----------------------------------------------------------
        watch: {

            livereload: {
                options: { livereload: true },
                files: [
                    '<%= globalConfig.files %>',
                    '<%= globalConfig.dev_css %>/*.css'
                ]
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

        },

        // Browser sync
        browser_sync: {
            files: {
                src : [
                    '<%= globalConfig.files %>',
                    '<%= globalConfig.dest_css_dev %>',
                    '<%= globalConfig.dest_css_styleguide %>'
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
        }

    };

    grunt.initConfig(gruntConfig);

    // Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browser_sync', 'watch', 'concat', 'uglify', 'jshint', 'sass'] );

    grunt.registerTask( 'w', [ 'watch' ] );
};
