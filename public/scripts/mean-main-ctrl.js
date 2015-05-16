(function(){
	'use strict';

	angular
		.module('meanMainCtrl', [
			'meanRoutes',
			'meanAppService'
		])
		.controller('contactsController', [ 
			'$scope', 
			'$log', 
			'getContactsService', 
			contactsController 
		]);

	function contactsController($scope, $log, getContactsService){
		
		var onSuccess = function(data){
			$scope.contacts = data[0].contacts;
			$log.log($scope.contacts);
		};

		var onErr = function(reason){
			$log.log(reason);
		};

		getContactsService.getAllContacts().then(onSuccess, onErr);
	}

}());