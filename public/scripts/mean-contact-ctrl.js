(function(){
	'use strict';

	angular
		.module('meanContactCtrl', [
			'meanRoutes',
			'meanAppService'
		])
		.controller('contactController', [ 
			'$log', 
			'getContactsService', 
			contactController
		]);

	function contactController($log, getContactsService){

		var vm = this;

		var onSuccess = function(data){
			vm.contact = data;
		};

		var onErr = function(reason){
			$log.log(reason.status);
		};

		getContactsService.getContact().then(onSuccess, onErr);
	}

}());