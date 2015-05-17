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
				"templateUrl": "ng-views/index.html",
				"controller": "contactsController",
				"controllerAs": "main"
			})
			.when('/name/:contact', {
				"templateUrl": "ng-views/contact.html",
				"controller": "contactController",
				"controllerAs": "contact"
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode({
			enbled: true
		});
	}

}());