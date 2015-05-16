(function(){
	'use strict';

	angular
		.module('meanRoutes', [
			'ngRoute',
			'meanMainCtrl',
			'meanContactCtrl'
		])
		.config([
			'$routeProvider',
			'$locationProvider',
			route
		]);

	function route($routeProvider, $locationProvider){

		$routeProvider
			.when('/', {
				"templateUrl": "ng-views/index.html"
			})
			.when('/about', {
				"templateUrl": "ng-views/about.html"
			})
			.when('/name/:contact', {
				"templateUrl": "ng-views/contact.html"
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode({
			enbled: true
		});
	}

}());