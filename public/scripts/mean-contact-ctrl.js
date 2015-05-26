(function(){
	'use strict';

	angular
		.module('meanContactDetailsCtrl', [
			'meanRoutes',
			'meanAppService'
		])
		.controller('contactDetailsController', [ 
			'$log', 
			'getContactsService', 
			contactDetailsController
		]);

	function contactDetailsController($log, getContactsService){

		var vm = this;

		var onSuccess = function(data){
			vm.details = data[0].contacts[0];
			console.log(vm.details);
		};

		var onErr = function(reason){
			$log.log(reason.status);
		};

		getContactsService.getContactDetails().then(onSuccess, onErr);
	}

}());