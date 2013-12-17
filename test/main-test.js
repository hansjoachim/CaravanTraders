var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
  baseUrl: '/base/src',
  deps: tests,
  paths: {
    angular: '../dependencies/angular',
    angularmocks: '../dependencies/angular-mocks'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angularmocks': {
      deps: ['angular'],
      exports: 'angular.mock'
    }
  },
  callback: window.__karma__.start
});
