module.exports = function(grunt){
    //initialises task
    grunt.initConfig({
        jshint: {
            all: ['javascript/scripts.js']
        },
        concat: {
            dist: {
                files: {
                    'javascript/all.js': ['javascript/scripts.js', 'javascript/plugins.js']
                }
            }
        },
        less: {
            dist: {
                options:{
                    paths: ['css'],
                    compress: true,
                    plugins: [
                        new (require ('less-plugin-autoprefix'))({browers: ["last 2 versions"]})/*,
                        new (require ('less-plugin-clean-css'))(cleanCssOptions)*/
                    ]
                },
                files:{
                    'css/style.min.css': ['less/style.less', 'less/mixins.less']
                }
            }
        },
        imagemin:{
            dist:{
                files: [{
                    expand:true,
                    cwd: 'images/src/',
                    src: ['**/*.{jpg,gif,png}'],
                    dest: 'images/dist/'
                }]
            }
        },
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                    liverreload: true// uses livereload plugin for chrome
                }
            },
            js: {
                files: ['javascript/*.js'],
                tasks: ['jshint'],
                options:{
                    spawn: false
                }
            }
        }
        // csslint: {

        //     all: ['css/reset.css', 'css/style.css']

        // },
        // cssmin: {
        //     /***************************************************
        //      * can combine multiple stylesheets into one css file
        //      * minify stylesheet and save it into specified file
        //     ***************************************************/
        //     dist: {
        //         files: {
        //             'css/style.min.css': ['css/reset.css', 'css/style.css']
        //         }
        //     }
        // },
        // postcss: {// we use this instead of autoprefixer as that has been deprecated.
        //     options: {
        //         map: true,
        //         processors: [
        //             require('pixrem')(), // add fallbacks for rem units 
        //             require('autoprefixer')({browsers: ['last 1 version']})/*,
        //             require('cssnano')() // minify the result */
        //         ]
        //     },
        //     dist:{
        //        src: 'css/style.min.css' 
        //     }
        // }
    });

    
    // grunt.loadNpmTasks('grunt-contrib-csslint'); //loads css linttask
    // grunt.loadNpmTasks('grunt-contrib-cssmin'); //loads cssmintask
    grunt.loadNpmTasks('grunt-contrib-watch');// loads grunt-contrib-watch
    grunt.loadNpmTasks('grunt-contrib-imagemin'); // loads grunt-contrib-imagemin
    grunt.loadNpmTasks('grunt-contrib-concat'); // loads grunt-contrib-concat
    grunt.loadNpmTasks('grunt-contrib-jshint'); //loads jshinttask
    // grunt.loadNpmTasks('grunt-postcss'); //loads post css autoprefixer
    grunt.loadNpmTasks('grunt-contrib-less'); // loads grunt-contrib-less
    
    
    /***************************************************
     * we run tasks by typing the command "grunt" in terminal. 
     * tasks are run in the order that they are registered.
    ***************************************************/
    
    //registers tasks
    grunt.registerTask('default', [
        'jshint',
        'concat',
        'less',
        'imagemin'
        // 'csslint',
        // 'cssmin',
        // 'postcss'
    ]);

};