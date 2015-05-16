(function(){
	'use strict';

	angular
		.module('meanContactCtrl', [
			'meanRoutes',
			'meanAppService'
		])
		.controller('contactController', [
			'$scope', 
			'$log', 
			'getContactsService', 
			contactController
		]);

	function contactController($scope, $log, getContactsService){

		var onSuccess = function(data){
			$scope.contact = data;
		};

		var onErr = function(reason){
			$log.log(reason.status);
		};

		getContactsService.getContact().then(onSuccess, onErr);
	}

}());