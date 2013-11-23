require.config({
  paths: {
    angular: '../dependencies/angular'
  },
  shim: {
    'angular': {'exports': 'angular'}
  }
});

require(["angular", "app"], function(angular) {
   angular.bootstrap(document, ["app"]);
});
