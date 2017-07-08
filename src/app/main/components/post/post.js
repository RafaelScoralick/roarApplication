const post = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'post.html',
    controller: class post {
        constructor($stateParams, $sce, RoarRest) {
          /* @ngInject */
          this.RoarRest = RoarRest;
          this.$sce = $sce;
          this.$stateParams = $stateParams;
        }
        $onInit() {
            this.RoarRest.get('posts',"slug="+this.$stateParams.slug)
            .then(data => this.data = data);
            this.tru = rendered => this.$sce.trustAsHtml(rendered);
        }
    }
};
angular.module("roarPost.module",[
    'ui.router'
]);
angular.module("roarPost.module").component("roarPost", post);

angular.module("roarPost.module").config($locationProvider => $locationProvider.html5Mode(true));
angular.module("roarPost.module").config(($stateProvider, $urlRouterProvider) => {
  /* @ngInject */
  $stateProvider
    .state('root.post', {
        url: '/post/:slug/:id',
        component: 'roarPost',
        params:{
            slug: null,
            id: null
        }
    });
      //$urlRouterProvider.otherwise('/');
});