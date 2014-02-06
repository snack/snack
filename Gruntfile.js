module.exports = function(grunt) {

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),

        globalConfig: {
            files: [
                '*.php',
                '*.html',
                'in/*.php',
                'styleguide/**',
                'styleguide/**/**',
                'styleguide/**/**/'
            ],
            dest_css_dev: 'css/main.css',
            dest_css_styleguide: 'styleguide/assets/css/main.css',
        },


        // -- Concat config ----------------------------------------------------------
        concat: {

            // Project files
            dev: {
                src: [
                    'js/libs/jquery/jquery.js', // jQuery Lib
                    'js/assets/scripts.js', // Project scripts
                    'js/assets/analytics.js' // GA track
                ],
                dest: 'js/build/all.js',
            },

            // Styleguide files
            styleguide: {
                src: [
                    'js/libs/jquery/jquery.js', // jQuery Lib
                    'styleguide/assets/js/scripts.js', // Styleguide scripts
                    'styleguide/assets/js/rainbow-custom.min.js' // Pretty code
                ],
                dest: 'styleguide/assets/js/build/all.js',
            }

        },

        // -- Uglify config ----------------------------------------------------------
        uglify: {

            // Project files
            dev: {
                src: 'js/build/all.js',
                dest: 'js/build/all.min.js'
            },

            // Styleguide files
            styleguide: {
                src: 'styleguide/assets/js/build/all.js',
                dest: 'styleguide/assets/js/build/all.min.js'
            }

        },

        // -- JShint config ----------------------------------------------------------
        jshint: {

            // Project files
            dev: ['js/assets/scripts.js'],
                options: {
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true
                }
            },

            // Styleguide files
            styleguide: ['styleguide/assets/js/scripts.js'],
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
                    '<%= globalConfig.dest_css_dev %>' : 'css/sass/main.scss'
                }
            },

            // Styleguide files
            styleguide : {
                options : {
                    style : 'compressed',
                    noCache: true
                },
                files : {
                    '<%= globalConfig.dest_css_styleguide %>' : 'styleguide/assets/css/sass/main.scss'
                }
            },

        },

        // -- Watch config -----------------------------------------------------------
        watch: {

            livereload: {
                options: { livereload: true },
                files: [
                    '<%= globalConfig.files %>',
                    '<%= globalConfig.dest_css_dev %>',
                    '<%= globalConfig.dest_css_styleguide %>'
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
                files: ['css/sass/*.scss', 'css/sass/**/*.scss'],
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
                    'styleguide/assets/css/sass/*.scss',
                    'styleguide/assets/css/sass/**/*.scss'
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
