(function(){
	'use strict';

	var getContactsService = function($http, $routeParams){

		//all contacts
		var getAllContacts = function(){

			return $http.get('/contacts/list')
				.then(function(response){
					return response.data;
				});
		};

		//single contact
		var getContactDetails = function(){

			return $http.get('/contacts/name/' + $routeParams.name)
				.then(function(response){
					return response.data;
				});

		};

		return {
			"getAllContacts": getAllContacts,
			"getContactDetails": getContactDetails
		};
	};

	//setup service
	angular
		.module('meanAppService', [])
		.factory('getContactsService', [
			'$http',
			'$routeParams',
			getContactsService
		]);

}());