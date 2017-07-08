const scenario = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    controller: class scenario {
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
angular.module("roarScenario.module",[
    'roarHeader.module',
    'roarFooter.module',
    'roarCarousel.module',
    'roarMenu.module'
])
.component("roarScenario", scenario);