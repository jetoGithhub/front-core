// Karma configuration
// Generated on Wed Dec 13 2017 15:10:41 GMT-0500 (Hora est. Pacífico, Sudamérica)

module.exports = function(config) {
  config.set({
    basePath: './src/',
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
        '**/**/*.spec.ts',
        { pattern: "**/**/*.ts" }, // *.tsx for React Jsx
    ],
    preprocessors: {
        "**/**/*.ts": ["karma-typescript"], // *.tsx for React Jsx
    },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'text' ],
      fixWebpackSourcePaths: true,
       thresholds: {
        emitWarning: true,
        skipFilesWithNoCoverage: true,
        global: {
          statements: 60,
          lines: 60,
          branches: 100,
          functions: 100
        },
        each: {
          statements: 60,
          lines: 60,
          branches: 100,
          functions: 100,
          overrides: {}
        }
      }
    },
    reporters: ['progress', 'karma-typescript', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
