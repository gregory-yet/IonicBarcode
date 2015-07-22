// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var barcode = angular.module('starter', ['ionic', 'ngCordova'])

barcode.run(function($ionicPlatform, $cordovaStatusbar) {
	
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		$cordovaStatusbar.overlaysWebView(false);
		$cordovaStatusbar.styleHex('#2466D5');
	  });
});

barcode.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
  
	.state('tab', {
		url: "/tab",
		abstract: true,
		templateUrl: "templates/tabs.html"
	})
	
	.state('tab.dash', {
		url: '/home',
		views: {
			'tab-dash': {
				templateUrl: 'templates/tab-home.html',
				controller: 'scan'
			}
		}
	});
	
	$urlRouterProvider.otherwise('/tab/home');

});

barcode.controller("app", function($scope){
	$scope.alert = function(event){
		alert(event.type);
	};
});

barcode.controller("scan", function($scope, $cordovaBarcodeScanner, $ionicPopup, $ionicTabsDelegate) {
 
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(code) {
			if(code.format == "CODE_128"){
	            $ionicPopup.alert({
					title: 'Résultat',
					template: code.text+"<br>"+code.format+" "+window.StatusBar
				});
			}
			else {
				$ionicPopup.alert({
					title: 'Résultat',
					template: "Attention ce n'est pas un CODE_128 !<br>"+code.text+"<br>"+code.format
				});
			}
        }, function(error) {
            $ionicPopup.alert({
				title: 'Erreur',
				template: 'Une erreur est survenue !'
			});
        });
    };
	
	$scope.goForward = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
        }
    }

    $scope.goBack = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
    }
 
});

barcode.directive('detectGesture', function($ionicGesture) {
  return {
    restrict :  'A',

    link : function(scope, elem, attrs) {
      var gestureType = attrs.gestureType;

      switch(gestureType) {
        case 'swipe':
          $ionicGesture.on('swipe', scope.alert, elem);
          break;
        case 'swiperight':
          $ionicGesture.on('swiperight', scope.alert, elem);
          break;
        case 'swipeleft':
          $ionicGesture.on('swipeleft', scope.alert, elem);
          break;
        case 'doubletap':
          $ionicGesture.on('doubletap', scope.alert, elem);
          break;
        case 'tap':
          $ionicGesture.on('tap', scope.alert, elem);
          break;
        case 'scroll':
          $ionicGesture.on('scroll', scope.alert, elem);
          break;
      }

    }
  }
});