angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('side-menu21.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('side-menu21.recipes', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recipes.html',
        controller: 'cartCtrl'
      }
    }
  })
  .state('side-menu21.favorites', {
    url: '/page0',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favorites.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('side-menu21.allrecipes', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/allrecipes.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('side-menu21', {
    url: '/side-menu21',
    templateUrl: 'templates/side-menu21.html',
    abstract:true
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page4')

  

});