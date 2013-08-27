'use strict';


// Declare app level module which depends on filters, and services
angular.module('swarmApp', ['ngRoute', 'ngMockE2E', 'swarmApp.filters', 'swarmApp.services', 'swarmApp.directives', 'swarmApp.controllers', 'highcharts-ng'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/home", {controller: "HomeController", templateUrl: "partials/solar.html"})
            .when("/login", {controller: "LogInController", templateUrl: "partials/login.html"})
            .when("/setup-simulation", {controller: "SimulationSetupController", templateUrl: "partials/setup-simulation.html"})
            .when("/profiles/:profileId", {
                controller: "PowerProfileController",
                templateUrl: "partials/profile.html"
            })
            .when("/signup", {controller: "SignUpController", templateUrl: "partials/signup.html"})
            .otherwise({redirectTo: "/home"})
    }])

    .run(function ($httpBackend) {
        console.log('RUNNING AMOK!');

        $httpBackend.whenGET(/partials\//).passThrough();

        $httpBackend.whenGET(/json\//).passThrough();

    })
