let app = angular.module('yeoman', ['ngRoute', 'ngSanitize']);

require('./controllers/dummyController1')(app);
require('./services/dummyService1')(app);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/home',
        })
        .when('/home', {
            templateUrl: 'templates/homePage.html',
        })
        .when('/login', {
            controller: 'dummyController1',
            templateUrl: 'templates/login.html',
}]);
