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
			},
			link: function(scope, elem, attrs) {
				scope.attrs = attrs;
				elem.bind('click', function (event) {
					console.log(scope);
					var tabName = attrs.tabName;
						scope.currentTab = tabName;
						$(elem).parent().children().removeClass('active');
						$(elem).addClass('active');
						$('<a href="#'+tabName+'">').tab('show');
				});
			}
		};
	});

})();