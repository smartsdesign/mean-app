(function(){
	'use strict';

	angular
		.module('meanRoutes', [
			'ngRoute',
			'meanMainCtrl',
			'aboutCtrl',
			'meanContactDetailsCtrl'
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
			.when('/about', {
				"templateUrl": "ng-views/about.html",
				"controller": "aboutController",
				"controllerAs": "about"
			})
			.when('/contact/:name', {
				"templateUrl": "ng-views/contact.html",
				"controller": "contactDetailsController",
				"controllerAs": "contactDetails"
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode({
			enabled: true
		});
	}

}());