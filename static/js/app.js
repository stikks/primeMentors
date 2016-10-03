	angular.module('myApp.controllers', []);
	angular.module('myApp.models', []);
	var myApp = angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.models']);

	// configure our routes
	myApp.config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/home");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "partials/home.html",
	      controller: 'mainController'
	    })

	    .state('contact', {
	      url: "/contact",
	      templateUrl: "partials/contact.html",
	      controller: 'contactController'
	    })

	    .state('about', {
	      url: "/about",
	      templateUrl: "partials/about.html",
	      controller: 'aboutController'
	    })

	});