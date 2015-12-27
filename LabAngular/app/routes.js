angular.module('labAngularApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider

        .state('about', {
            url: '/about',
            templateUrl: 'app/components/about/views/index.html',
            controller: "aboutCtrl",
            controllerAs: 'ctrl'
        })
        .state('users', {
            url: '/users',
            templateUrl: 'app/components/users/views/index.html',
            controller: 'usersCtrl',
            controllerAs: 'ctrl'
        });
}]);