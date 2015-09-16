'use strict';

angular
	.module('myAngularApp')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/main/main.html',
				controller: 'EmployeeController',
				controllerAs: 'emp'
			});

		$stateProvider
			.state('Edit', {
				url: '/Edit',
				templateUrl: 'app/components/Employee/Employee.html',
				params: {
					employee: null
				}
			});


		$urlRouterProvider.otherwise('/');
  }]);