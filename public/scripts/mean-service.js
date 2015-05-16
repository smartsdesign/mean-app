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
		var getContact = function(){

			return $http.get('/contacts/name/' + $routeParams.contact)
				.then(function(response){
					return response.data;
				});

		};

		return {
			"getAllContacts": getAllContacts,
			"getContact": getContact
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