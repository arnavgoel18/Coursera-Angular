(function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.name = "";               
        var message = "";

        $scope.check = function() {     //function to display message based on input
            message = test(); 
            $scope.Message = message;
        };   

        function test(){        //Test Input Length and return message to be displayed
            const str = $scope.name;
            var str1 = str.split(',');
            //console.log(str1);
            if(str1 == ""){
                return "Please Enter Data First!";
            }
            else if(str1.length <= 3){
                return "Enjoy!"
            }
            else{
                return "Too Much!";
            }
        }
    };
})();