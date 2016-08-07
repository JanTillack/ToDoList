var ngApp = angular.module('todosApp');

ngApp.controller('ListCtrl', ['$scope', '$http', function($scope, $http){
	var apiUrl = 'http://localhost:3000/api';

	$scope.tasksList = null;
	getTasks();

	function getTasks() {
	$http({
		method: 'GET',
		url: apiUrl + '/todos',
	}).then(function successCallback(response) {
		$scope.tasksList = response.data;

	});
}
	$scope.setTaskState = function(task) {
		task.done = !task.done;
		$http({
		method: 'PUT',
		url: apiUrl + '/todos/' + task._id,
		data: {done: task.done}
	}).then(function successCallback(response) {
		console.log("task updated");
	});
	}

	$scope.deleteTask = function(task) {
		$http({
		method: 'DELETE',
		url: apiUrl + '/todos/' + task._id,
	}).then(function successCallback(response) {
		console.log('task deleted');
		getTasks();
	});
	}

}]);
