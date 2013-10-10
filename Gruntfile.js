module.exports = function(grunt) {
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),

        // SASS
        sass : {
            dev : {
                options : { 
                    style : 'compressed',
                    noCache: true
                },
                files : {
                    'css/main.css' : 'css/sass/main.scss'               
                }
            },
            demoStyleguide : {
                options : { 
                    style : 'compressed',
                    noCache: true
                },
                files : {
                    'styleguide/css/main.css' : 'styleguide/css/sass/main.scss'               
                }
            },
        },

        // JShint
        jshint: {
            files: ['js/scripts.js'],
                options: {
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true
                }
            }
        },

        // Uglify
        uglify: {
            my_target: {
                files: {
                    'js/scripts.min.js': ['js/scripts.js']
                }
            }
        },

        // Watch
        watch: {
            livereload: {
                options: { livereload: true },
                files: [
                  '*.php',
                  '*.html',
                  'css/main.css',
                  'in/*.php',
                  'js/scripts.min.js',
                  'styleguide/*',
                  'styleguide/modules/*/*',
                  'styleguide/css/main.css'
               ]
            },
            sass: {
                files: [
                    'css/sass/atoms/*.scss',
                    'css/sass/molecules/*.scss',
                    'css/sass/organisms/*.scss'
                ],
                tasks: ['sass:dev']
            },
            sassDemo: {
              files: [
                    'styleguide/css/sass/*.scss'
                ],
                tasks: ['sass:demoStyleguide']  
            },
            js: {
                files: ['js/scripts.js'],
                tasks: ['jshint', 'uglify']
            }
        }
    };  

    grunt.initConfig(gruntConfig);

    // Plugins do Grunts
    
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    grunt.registerTask('default', ['sass', 'jshint', 'uglify'] );

    grunt.registerTask( 'w', [ 'watch' ] );
};