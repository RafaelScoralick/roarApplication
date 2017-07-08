const main = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    controller: class main {
        constructor() {
          /* @ngInject */
        }
        $onInit() {
         
        }
        $postLink(){
          
        }
        $onChanges(){
          
        }
        $onDestroy(){
          
        }
    }
};
angular.module("roarMain.module",[
    'ui.router',
    'ngDisqus',
    'roarPage.module',
    'roarPost.module',
    'roarCardList.module',
    'roarLivroList.module',
    'roarIndex.module'
])
angular.module("roarMain.module").component("roarMain", main)
angular.module("roarMain.module").config(
    $disqusProvider => $disqusProvider.setShortname('oldskull-rafaelscoralick')
);
angular.module("roarMain.module").config(($stateProvider, $urlRouterProvider) => {
  /* @ngInject */
  $stateProvider
    .state('root', {
        abstract: true
        //component: 'roarMain',
    });
  //$urlRouterProvider.otherwise('/');
});