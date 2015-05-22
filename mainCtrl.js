var app = angular.module('todoFire');

app.controller('mainCtrl', function($scope, todoService) {
	
	todoService.$loaded().then(function(data) {
		console.log(data)
		$scope.todoList = data
	})

	$scope.addItem = function(){
		todoService.$add($scope.newItem)
		$scope.newItem = ""
	}

	$scope.remove = function(index) {
		var item = todoService[index]
		todoService.$remove(item)
	}

})