const root = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'root.html',
    controller: class root {
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
angular.module("roarApplication",[
    'ngSanitize',
    'ngLocale',
    'ngAnimate',
    'ngTouch',
    'templateCache',
    
    'roarMain.module',
    'roarScenario.module'
])

angular.module("roarApplication").component("roarRoot", root);
//mover
angular.module("roarApplication").constant("Location","/wp-content/themes/roarApplication/");
