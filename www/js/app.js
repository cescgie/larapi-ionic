angular.module('starter', ['ionic', 'satellizer', 'starter.controllers'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.home', {
        url: '/',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      });

      $urlRouterProvider.otherwise('/tab');
  })
  .config(function($authProvider) {
    var commonConfig = {
      popupOptions: {
        location: 'no',
        toolbar: 'yes',
        width: window.screen.width,
        height: window.screen.height
      }
    };

    if (ionic.Platform.isIOS() || ionic.Platform.isAndroid()) {
      commonConfig.redirectUri = 'http://cescdrop.tk';
    }

    $authProvider.facebook(angular.extend({}, commonConfig, {
      clientId: '603122136500203',
      url: 'http://0.0.0.0:8080/auth/facebook'
    }));

    $authProvider.twitter(angular.extend({}, commonConfig, {
      url: 'http://0.0.0.0:8080/auth/twitter'
    }));

    $authProvider.google(angular.extend({}, commonConfig, {
      clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com',
      url: 'http://0.0.0.0:8080/auth/google'
    }));
  })
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
