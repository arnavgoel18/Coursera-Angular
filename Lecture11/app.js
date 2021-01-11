(function() {
    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];
    
    function MsgController($scope) {
        $scope.name = "Arnav";

        $scope.sayMessage = function() {
            return "Eat Healthy Food at Night";
        };
    }
})();