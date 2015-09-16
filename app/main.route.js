'use strict';

angular
	.module('myAngularApp')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.html',
				controller: 'employee'
			});

		$stateProvider
			.state('list', {
				url: '/list',
				templateUrl: 'list.html'
			});


		$urlRouterProvider.otherwise('/');
  }]);