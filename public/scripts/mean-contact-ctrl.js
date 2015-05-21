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
			vm.message = data;
			console.log(vm.message);
		};

		var onErr = function(reason){
			$log.log(reason.status);
		};

		getContactsService.getContactDetails().then(onSuccess, onErr);
	}

}());