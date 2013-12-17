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
    angular: '../dependencies/angular'
  },
  shim: {
    'angular': {'exports': 'angular'}
  },
  callback: window.__karma__.start
});
