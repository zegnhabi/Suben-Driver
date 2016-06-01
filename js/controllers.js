angular.module('app.controllers', [])
  
.controller('subenDriverCtrl', function($scope) {

})
   
.controller('automovilCtrl', function($scope) {

})
   
.controller('automovil2Ctrl', function($scope) {

})
   
.controller('registroCtrl', function($scope, RegisterService, $ionicPopup, $state){
    $scope.data = {};
 
    $scope.registerUser = function() {
        RegisterService.registerUser(btoa(''), btoa(''), btoa($scope.data.email), btoa($scope.data.mobile),
                                    btoa($scope.data.password), btoa(false))
        .success(function(data) {
             var alertPopup = $ionicPopup.alert({
                title: 'Register User!',
                template: data
            });
            $state.go('login');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: data
            });
        });
    }    
})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('referenciasCtrl', function($scope) {

})
   
.controller('documentosCtrl', function($scope) {

})
   
.controller('documentos2Ctrl', function($scope) {

})
 