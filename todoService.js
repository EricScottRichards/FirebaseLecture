var app = angular.module('todoFire');

app.factory('todoService', function($firebaseArray) {

	var url = 'https://devmountain-todo.firebaseio.com/';
	var ref = new Firebase(url);
	return $firebaseArray(ref)

})