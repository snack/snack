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
        },

        // Concat
        uglify: {
            page: {
                src: [ 'js/scripts.js' ],
                dest: 'js/scripts.min.js' 
            }
        },

        // Watch
        watch: { 
            sass: {
                files: [    'css/sass/*.scss', 
                'css/sass/atoms/*.scss',
                'css/sass/molecules/*.scss',
                'css/sass/organisms/*.scss'
                ],
                tasks: ['sass:dev']
            }
        }
    };  

    grunt.initConfig(gruntConfig);

    // Plugins do Grunts
    grunt.loadNpmTasks( 'grunt-contrib-concat' )
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    grunt.registerTask('default', ['sass', 'uglify'] );

    grunt.registerTask( 'w', [ 'watch' ] );
};