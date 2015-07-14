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



