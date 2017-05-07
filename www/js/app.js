// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller:'loginCtrl'
  })
  .state('emaillogin', {
    url: '/emaillogin',
    templateUrl: 'templates/email-login.html',
    controller:'EmailLoginCtrl'
  })


  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })
  .state('app.reslist', {
    url: '/reslist',
    views: {
      'menuContent': {
        templateUrl: 'templates/reslist.html',
        controller:'resListCtrl'
      }
    }
  })
  .state('app.mapview', {
    url: '/mapview',
    views: {
      'menuContent': {
        templateUrl: 'templates/mapview.html',
        controller:'MapViewCtrl'
      }
    }
  })
  .state('app.viewres', {
    url: '/viewres/:slug',
    views: {
      'menuContent': {
        templateUrl: 'templates/viewres.html',
        controller:'ViewResCtrl'
      }
    }
  })
  .state('app.gallery', {
    url: '/gallery',
    views: {
      'menuContent': {
        templateUrl: 'templates/gallery.html',
      }
    }
  })
  .state('app.history', {
    url: '/history',
    views: {
      'menuContent': {
        templateUrl: 'templates/history.html',
      }
    }
  })
  .state('app.viewhistory', {
    url: '/viewhistory',
    views: {
      'menuContent': {
        templateUrl: 'templates/viewhistory.html',
      }
    }
  })
  .state('app.myreviews', {
    url: '/myreviews',
    views: {
      'menuContent': {
        templateUrl: 'templates/myreviews.html',
        controller: 'MyReviewsCtrl'
      }
    }
  })
  .state('app.favourites', {
    url: '/favourites',
    views: {
      'menuContent': {
        templateUrl: 'templates/favourites.html',
        controller: 'MyFavCtrl'
      }
    }
  })
  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller:'settingsCtrl'
      }
    }
  })
  .state('app.manageaddress', {
    url: '/manageaddress',
    views: {
      'menuContent': {
        templateUrl: 'templates/manageaddress.html',
        controller:'ManageAddressCtrl'
      }
    }
  })
  .state('app.cart', {
    url: '/cart',
    views: {
      'menuContent': {
        templateUrl: 'templates/cart.html',
        controller:'CartCtrl'
      }
    }
  })
  .state('app.checkout', {
    url: '/checkout',
    views: {
      'menuContent': {
        templateUrl: 'templates/checkout.html',
      }
    }
  })
  .state('app.notifications', {
    url: '/notifications',
    views: {
      'menuContent': {
        templateUrl: 'templates/notifications.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
