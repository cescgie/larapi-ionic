angular.module('starter.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  })
  .controller('HomeCtrl', function($scope, $ionicPopup, $auth,$ionicModal) {
    $scope.login = function(data) {
      $auth.login(data)
        .then(function() {
          $scope.modal1.hide();
          $ionicPopup.alert({
            title: 'Success',
            content: 'You have successfully logged in!'
          })
        })
        .catch(function(error) {
          $scope.modal1.hide();
          $ionicPopup.alert({
            title: 'Erro',
            content: error
          })
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          $ionicPopup.alert({
            title: 'Success',
            content: 'You have successfully logged in!'
          })
        })
        .catch(function(response) {
          $ionicPopup.alert({
            title: 'Error',
            content: response.data ? response.data || response.data.message : response
          })

        });
    };


    $scope.logout = function() {
      $auth.logout();
    };

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $ionicModal.fromTemplateUrl('templates/login-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal1 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/register-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal2 = modal;
    });

    $scope.openModal = function(index) {
      if(index == 1){
        $scope.modal1.show();
      }
      else if(index == 2){
        $scope.modal2.show();
      }
    };

    $scope.closeModal = function(index) {
      if(index == 1){
       $scope.modal1.hide();
      }
      else if(index == 2){
       $scope.modal2.hide();
      }
    };

    $scope.signup = function(data) {
      $auth.signup(data)
        .then(function(response) {
          $auth.setToken(response);
          $scope.modal2.hide();
          $ionicPopup.alert({
            title: 'Success',
            content: 'You have successfully created a new account and have been signed-in'
          })
        })
        .catch(function(response) {
          $scope.modal2.hide();
          $ionicPopup.alert({
            title: 'Error',
            content: response
          })
        });
    };
  });
