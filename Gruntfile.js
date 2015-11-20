/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 */

module.exports = function GruntInit(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          clearRequireCache: true,
          require: 'babel/register',
        },
        src: ['test/data/*.js'],
      },
    },

    flow: {
      app: {
        src: './',            // `.flowconfig` folder
        options: {
          background: false,    // Watch/Server mode
          all: false,           // Check all files regardless
          lib: '',              // Library directory
          stripRoot: false,     // Relative vs Absolute paths
          weak: false,          // Force weak check
          showAllErrors: false, // Show more than 50 errors
        },
      },
    },

    eslint: {
      target: ['app/', 'index.ios.js', 'index.android.js'],
    },

    watch: {
      js: {
        options: {
          spawn: true,
          interrupt: true,
          debounceDelay: 250,
        },
        files: ['Gruntfile.js', 'app/*.js', 'test/*.js', 'index.ios.js', 'index.android.js'],
        tasks: ['eslint', 'mochaTest'],
      },
    },
  });

  grunt.registerTask('mocha', ['mochaTest'] );
  grunt.registerTask('test', ['eslint', 'mochaTest']);
  grunt.registerTask('default', ['eslint']);
};
