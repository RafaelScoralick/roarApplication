const livroList = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'livroList.html',
    controller: class livroList {
        constructor($stateParams, $state, RoarRest) {
          /* @ngInject */
          this.RoarRest = RoarRest;
          this.$state = $state;
          this.$stateParams = $stateParams;
        }
        $onInit() {
            this.RoarRest.list('livros'//,
              //"fields=id,roarCategorys,slug,date,title.rendered,better_featured_image,time2read"
              )
            .then(data => this.data = data);
        }
    }
};
angular.module("roarLivroList.module",[
  'ui.router',
  'roarLivro.module'
]);
angular.module("roarLivroList.module").component("roarLivroList", livroList);
angular.module("roarLivroList.module").config($locationProvider => $locationProvider.html5Mode(true));
angular.module("roarLivroList.module").config(($stateProvider, $urlRouterProvider) => {
  /* @ngInject */
  $stateProvider
    .state('root.produtos', {
        url: '/produtos/',
        component: 'roarLivroList'
    });
  //$urlRouterProvider.otherwise('/');
});