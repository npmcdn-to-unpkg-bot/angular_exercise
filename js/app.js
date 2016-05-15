angular.module('myApp', [])
.controller('DisplayListController',function ($scope) {

    $scope.names = ['Joe','Danny','Emy','John'];

    $scope.display = function(id,select){
      console.log(id + '.' + select);
    };
});

    