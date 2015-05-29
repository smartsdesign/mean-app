(function(){
	'use strict';

	angular
		.module('aboutCtrl', [
			'meanRoutes',
			'meanAppService'
		])
		.controller('aboutController', [
			'$log',
			aboutController
		]);


		function aboutController($log){
			var vm = this;

			vm.messages = {
				"about":  "Welcome"
			};
		}
		
}());