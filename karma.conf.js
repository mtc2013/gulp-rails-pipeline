'use strict';

module.exports = function(karma) {
  karma.set({

    frameworks: [ 'mocha', 'browserify', 'phantomjs-shim' ],

    files: [
      'gulp/tests/*.js'
    ],

    reporters: [ 'dots' ],

    preprocessors: {
      'gulp/tests/*.js': [ 'browserify' ]
    },

    browsers: [ 'PhantomJS' ],

    logLevel: 'LOG_DEBUG',

    singleRun: true,
    autoWatch: false,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [ ['babelify',{plugins: require('babel-plugin-rewire')}], ['reactify',{'es6': true}]]
    }
  });
};
