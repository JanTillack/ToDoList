var ngApp = angular.module('todosApp', ['ui.bootstrap']);

ngApp.controller('AddTasksCtrl', ['$scope', '$http', function($scope, $http){
	var apiUrl = 'http://localhost:3000/api';

	$scope.task = {
		name: '',
		description: '',
		priority: 3
	};

	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
	$scope.altInputFormats = ['M!/d!/yyyy'];
	$scope.popup1 = {
		opened: false
	};
	$scope.open1 = function() {
		$scope.popup1.opened = true;
	};


	$scope.addTask = function() {
		$http({
			method: 'POST',
			url: apiUrl + '/todos',
			data: $scope.task
		}).then(function successCallback(response) {
			console.log(response);
		});
	};

	


}]);