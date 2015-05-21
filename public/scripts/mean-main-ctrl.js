(function(){
	'use strict';

	angular
		.module('meanMainCtrl', [
			'meanRoutes',
			'meanAppService'
		])
		.controller('contactsController', [
			"$rootScope",  
			'$log', 
			'getContactsService', 
			contactsController 
		]);

	function contactsController($rootScope, $log, getContactsService){
		
		var vm = this;

		var onSuccess = function(data){
			console.log(data);
			vm.contacts = data[0].contacts;
			$log.log(vm.contacts);
		};

		var onErr = function(reason){
			$log.log(reason);
		};

		getContactsService.getAllContacts().then(onSuccess, onErr);
	}

}());