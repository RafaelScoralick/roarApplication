/*
(function() {

function configuracoes($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise(function($injector, $location){
       var state = $injector.get('$state');
       state.go('main.home');
       return $location.path();
    });
}

angular.module("roarMain.module").config(configuracoes);
configuracoes.$inject = ['$stateProvider','$urlRouterProvider'];
}());*/