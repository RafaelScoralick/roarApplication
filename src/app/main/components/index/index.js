const index = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'index.html',
    controller: class index {
        constructor(Location) {
          /* @ngInject */
          this.Location = Location;
        }
        $onInit() {
          this.image = {
            'banner' : {"background-image" : "url("+this.Location +'build/image/banner.jpg'+")"},
            'banner2': {"background-image" : "url("+this.Location +'build/image/banner2.png'+")"},
            'imagelanding' : this.Location +'build/image/logoeafs.png',
            'calice' : this.Location +"build/image/calice.png",
            'elmo' : this.Location +"build/image/elmo.png",
            'mao' : this.Location +"build/image/mao.png",
            'livro' : this.Location +"build/image/livro.png",
            'faca' : this.Location +"build/image/faca.png",
          };
        }
        $postLink(){
          
        }
        $onChanges(){
          
        }
        $onDestroy(){
          
        }
    }
};
angular.module("roarIndex.module",['ui.router']);
angular.module("roarIndex.module").component("roarIndex", index);
angular.module("roarIndex.module").config($locationProvider => $locationProvider.html5Mode(true));
angular.module("roarIndex.module").config(($stateProvider, $urlRouterProvider) => {
  /* @ngInject */
  $stateProvider
    .state('root.hom', {
        url: '/home{homescreen:.*}/',
        component: 'roarIndex',
        params:{
            homescreen: null
        }
    })    
    .state('root.home', {
        url: '/',
        component: 'roarIndex'
    })
    ;
    $urlRouterProvider.otherwise('/');
});