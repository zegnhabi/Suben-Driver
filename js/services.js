angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('RegisterService', function($http, $q) {
    return {
        registerUser: function(name, last, email, mobile, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            // Simple GET request example:
            $http({
              method: 'POST',
              url: 'http://vergui.xyz:8080/users',
              data: {name: name, last: last, email: email, mobile: mobile, password: password, chofer: true}
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                if(response.data && response.data.error){
                  deferred.reject(response.data.message);
                }else{
                  deferred.resolve(response.data.message);
                }
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                deferred.reject(response.data.message);
              });
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.service('LoginService', function($http, $q) {
    return {
        loginUser: function(email, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            // Simple GET request example:
            $http({
              method: 'POST',
              url: 'http://vergui.xyz:8080/login',
              data: {email: email, password: password}
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                if(response.data && response.data.error){
                  deferred.reject(response.data.message);
                }else{
                  deferred.resolve('Welcome ' + email + '!');
                }
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                deferred.reject('inicio de sesión incorrecto, verifique.');
              });
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.service('BlankService', [function(){

}]);

