/**
 *
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

module.exports = function GruntInit(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // mochaTest: {
    //   test: {
    //     options: {
    //       clearRequireCache: true,
    //       require: 'babel/register'
    //     },
    //     src: ['test/*.js']
    //   }
    // },

    eslint: {
      target: ['src/', 'index.ios.js'],
    },

    watch: {
      js: {
        options: {
          spawn: true,
          interrupt: true,
          debounceDelay: 250,
        },
        files: ['Gruntfile.js', 'src/*.js', 'test/*.js', 'index.ios.js'],
        tasks: ['eslint', 'mochaTest'],
      },
    },
  });

  grunt.registerTask('test', ['eslint']);
  grunt.registerTask('default', ['eslint']);
};
