angular.module('app', [])

.controller('MainController', function($scope, Sentences){
	angular.extend($scope, Sentences);
})
.factory('Sentences', function() {
	var sentences = [];
	var addSentence = function(sent) {
		sentences.push({ sent: sent });
	};
	var done = function(index) {
		sentences.splice(index, 1);
	};

	return {
		sentences: sentences,
		addSentence: addSentence,
		done: done
	};
});

//Controller for nav bar

function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}


/*
TODO:
- Add views/controllers for multiple books (fix nav)
- Fix the silly music player
- Add login for users
- Sustain data on refresh by using $cookieStore or localStorage
 */