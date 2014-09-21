(function() {
	var app = angular.module('app', []);

	app.controller('mainCtrl', ['$scope', function($scope){
		$scope.helloWorld = 'Hello World';
	}]);

	app.directive('tab', function(){
		return {
			restrict: 'A',
			scope: {
				tabName: '@'
			}
			link: function(scope, elem, attrs) {
				$scope.changeTab = function(tabName) {
					$scope.currentTab = tabName;
					$('<a href="#'+tabName+'">').tab('show');
				};
				console.log(elem);
			}
		};
	});

})();