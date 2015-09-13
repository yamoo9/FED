(function(global, angular, undefined){
	'use strict';

	var app = angular.module('app',[]);


	app.controller('homeLinkController', function(){
		this.home='AngularJS Home';
	});


	app.controller('directiveLinkController', function() {
		this.directive = [
			'https://docs.angularjs.org/api/ng/directive',
			'Directive'
		];
		this.getLink = function() {
			return this.directive[0];
		};
		this.getContent = function() {
			return this.directive[1];
		};
	});


	app.controller('ngDirectivesController', function($scope){
		$scope.ng_directives = {
			'app':{
				'href'    : 'https://docs.angularjs.org/api/ng/directive/ngApp',
				'content' : 'ng-app'
			},
			'init': {
				'href'    : 'https://docs.angularjs.org/api/ng/directive/ngInit',
				'content' : 'ng-init'
			},
			'repeat': {
				'href'    : 'https://docs.angularjs.org/api/ng/directive/ngRepeat',
				'content' : 'ng-repeat'
			},
			'bind': {
				'href'    : 'https://docs.angularjs.org/api/ng/directive/ngBind',
				'content' : 'ng-bind'
			},
			'class': {
				'href'    : 'https://docs.angularjs.org/api/ng/directive/ngClass',
				'content' : 'ng-class'
			}
		};
	});

	// app.controller('ngDirectivesController', ['$scope', function($scope){
	// 	$scope.ng_directives = {
	// 		'app':{
	// 			'href'    : 'https://docs.angularjs.org/api/ng/directive/ngApp',
	// 			'content' : 'ng-app'
	// 		},
	// 		'init': {
	// 			'href'    : 'https://docs.angularjs.org/api/ng/directive/ngInit',
	// 			'content' : 'ng-init'
	// 		},
	// 		'repeat': {
	// 			'href'    : 'https://docs.angularjs.org/api/ng/directive/ngRepeat',
	// 			'content' : 'ng-repeat'
	// 		},
	// 		'bind': {
	// 			'href'    : 'https://docs.angularjs.org/api/ng/directive/ngBind',
	// 			'content' : 'ng-bind'
	// 		},
	// 		'class': {
	// 			'href'    : 'https://docs.angularjs.org/api/ng/directive/ngClass',
	// 			'content' : 'ng-class'
	// 		}
	// 	};
	// }]);

})(window, window.angular);