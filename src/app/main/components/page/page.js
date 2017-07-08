const page = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'page.html',
    controller: class page {
        constructor($stateParams, $sce, RoarRest) {
          /* @ngInject */
          this.RoarRest = RoarRest;
          this.$sce = $sce;
          this.$stateParams = $stateParams;
        }
        $onInit() {
            this.RoarRest.get('pages',"slug="+this.$stateParams.slug)
            .then(data => this.data = data);
            this.tru = rendered => this.$sce.trustAsHtml(rendered);
        }
    }
};
angular.module("roarPage.module",[
  'ui.router'
  ]);
 angular.module("roarPage.module").component("roarPage", page);
 angular.module("roarPage.module").config($locationProvider => $locationProvider.html5Mode(true));
 angular.module("roarPage.module").config(($stateProvider, $urlRouterProvider) => {
  /* @ngInject */
  $stateProvider
    .state('root.page', {
        url: '/:slug/',
        component: 'roarPage',
        params:{
            slug: 'home'
        }
    });
  //$urlRouterProvider.otherwise('/');
});