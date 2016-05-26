angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('subenDriver', {
    url: '/initial',
    templateUrl: 'templates/subenDriver.html',
    controller: 'subenDriverCtrl'
  })

  .state('automovil', {
    url: '/infoAuto1',
    templateUrl: 'templates/automovil.html',
    controller: 'automovilCtrl'
  })

  .state('automovil2', {
    url: '/infoAuto2',
    templateUrl: 'templates/automovil2.html',
    controller: 'automovil2Ctrl'
  })

  .state('registro', {
    url: '/regDriver',
    templateUrl: 'templates/registro.html',
    controller: 'registroCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('referencias', {
    url: '/accountReferences',
    templateUrl: 'templates/referencias.html',
    controller: 'referenciasCtrl'
  })

  .state('documentos', {
    url: '/accountPersonalDocuments',
    templateUrl: 'templates/documentos.html',
    controller: 'documentosCtrl'
  })

  .state('documentos2', {
    url: '/accountVehiculeDocuments',
    templateUrl: 'templates/documentos2.html',
    controller: 'documentos2Ctrl'
  })

$urlRouterProvider.otherwise('/initial')

  

});