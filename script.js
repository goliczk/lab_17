// JavaScript Document
var app = angular.module('portfolioApp', []);

app.directive('pull', function() {
	return {
		restrict: 'AE',
		templateUrl: 'partials/projects.html'
};	
});

app.controller('projectCtrl', function($scope) {
	$scope.projects = [
		{
			name: 'Project 1',
			image: {
				path: 'images/NewHQFlyer61.jpg',
				alt: 'flyer from Image Tours'
			},
			information: 'sldkfjsdlkjfklsjdkfj'
		},
		{
			name: 'Project 2',
			image: {
				path: 'images/NewHQFlyer61.jpg',
				alt: 'flyer from Image Tours'
			},
			information: 'sldkfjsdlkjfklsjdkfj'
		},
		{
			name: 'Project 3',
			image: {
				path: 'images/NewHQFlyer61.jpg',
				alt: 'flyer from Image Tours'
			},
			information: 'sldkfjsdlkjfklsjdkfj'
		}
		];
});







