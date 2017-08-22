

// Declare app level module which depends on filters, and services
var app = angular.module('ngdemo', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/", {templateUrl: "fragments/main.htm"})
        .when("/wedding", {templateUrl: "fragments/wedding.htm"})
        .when("/iceland", {templateUrl: "fragments/iceland.htm"})
        .when("/colorado", {templateUrl: "fragments/colorado.html"})
        .when('/about', {templateUrl: 'fragments/about.htm'}); //', controller: 'MyCtrl1'});
        //$routeProvider.otherwise({redirectTo: '/index.html'});
    });
