window.jkymarshHoneyBookFETest = angular.module('jkymarshHoneyBookFETest', ['ui.router']);

window.jkymarshHoneyBookFETest.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('master', {
      abstract: true,
      views: {
        layout: {
          templateUrl: '/views/layouts/master.html',
        }
      }
    })
    .state('home', {
      url: '/home',
      templateUrl: '/views/contacts-list-view.html',
      parent: 'master',
    });
});