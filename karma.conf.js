// Karma configuration
// Generated on Wed Dec 13 2017 15:10:41 GMT-0500 (Hora est. Pacífico, Sudamérica)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
     plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-typescript'),
      require('karma-coverage-istanbul-reporter')
    ],
    exclude: [],
    files: [
        'src/spec.ts',
        { pattern: "src/*.ts" }, // *.tsx for React Jsx
    ],
    preprocessors: {
        "**/*.ts": ["karma-typescript"], // *.tsx for React Jsx
    },
     client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
