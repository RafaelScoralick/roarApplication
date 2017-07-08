;(function() {

'use strict';

function carouselItem($window) {
    return {
        restrict: 'A',
        link: function($scope, element,$attr) {
            $scope.$evalAsync(function() { 
                $scope.init(element.parent()); 
            });
        }
    };
}
angular.module("roarScenario.module").directive("carouselItem",carouselItem);
carouselItem.$injec = ['$window'];
})();