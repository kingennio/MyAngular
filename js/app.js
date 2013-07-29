'use strict';


// Declare app level module which depends on filters, and services
angular.module('swarmApp', ['swarmApp.filters', 'swarmApp.services', 'swarmApp.directives', 'swarmApp.controllers', 'highcharts-ng', 'ngMockE2E'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/home", {controller: "HomeController", templateUrl: "partials/setup-simulation.html"})
            .when("/login", {controller: "LogInController", templateUrl: "partials/login.html"})
            .when("/profiles/:profileId", {
                controller: "PowerProfileController",
                templateUrl: "partials/profile.html"
            })
            .when("/signup", {controller: "SignUpController", templateUrl: "partials/signup.html"})
            .otherwise({redirectTo: "/home"})
    }])

    .run(function ($httpBackend) {
        console.log('RUNNING AMOK!');
        /*var phones = [{name: 'phone1'}, {name: 'phone2'}];

         // returns the current list of phones
         $httpBackend.whenGET('/phones').respond(phones);

         // adds a new phone to the phones array
         $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
         phones.push(angular.fromJson(data));
         });*/
        $httpBackend.whenGET(/partials\/.*/).passThrough();
        $httpBackend.whenGET(/json\/.*/).passThrough();
    })
