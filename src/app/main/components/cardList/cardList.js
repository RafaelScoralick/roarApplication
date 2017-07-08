const cardList = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'cardList.html',
    controller: class cardList {
        constructor($stateParams, $state, RoarRest) {
          /* @ngInject */
          this.RoarRest = RoarRest;
          this.$state = $state;
          this.$stateParams = $stateParams;
        }
        $onInit() {
          if(this.$state.$current.name === 'root.blog'){
            this.RoarRest.list('posts',
              "categories="+this.$stateParams.id,
              "page=1",
              "fields=id,roarCategorys,slug,date,title.rendered,better_featured_image,time2read")
            .then(data => this.data = data);
          }else{
            this.RoarRest.list('posts',
              "tags="+this.$stateParams.id,
              "page=1",
              "fields=id,roarCategorys,slug,date,title.rendered,better_featured_image,time2read")
            .then(data => this.data = data);
          }
        }
    }
};
angular.module("roarCardList.module",[
  'ui.router',
  'roarCard.module'
]);
angular.module("roarCardList.module").component("roarCardList", cardList);
angular.module("roarCardList.module").config($locationProvider => $locationProvider.html5Mode(true));
angular.module("roarCardList.module").config(($stateProvider, $urlRouterProvider) => {
  /* @ngInject */
  $stateProvider
    .state('root.blog', {
        url: '/blog/:slug/:id',
        component: 'roarCardList',
        params:{
            slug: 'destaques',
            id: null
        }
    })
    .state('root.tags', {
        url: '/tag/:slug/:{id}',
        component: 'roarCardList',
        params:{
            slug: null,
            id: null
        }
    });
  //$urlRouterProvider.otherwise('/');
});