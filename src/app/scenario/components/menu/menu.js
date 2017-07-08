const menu = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'menu.html',
    controller: class menu {
        constructor($scope,$state,RoarRest,$sce) {
          /* @ngInject */
          this.$scope = $scope;
          this.$state = $state;
          this.RoarRest = RoarRest;
          this.$sce = $sce;
        }
        $onInit() {
            this.RoarRest.list('categories','fields=id,slug,name')
            .then(data => this.data = data);
            this.tru = rendered => this.$sce.trustAsHtml(rendered);
            this.isState = function(states){
                return this.$state.includes(states);
            };
        }
        $postLink(){
            this.$scope.init = function(){
                angular.element('.owl-carousel-menu').owlCarousel({
                     //loop: true,
                    //center:true,
                    autoWidth: true,
                    dots: false
                    //items:10
                });
            };
        }
    }
};
angular.module("roarMenu.module",['ui.router']).component("roarMenu", menu);