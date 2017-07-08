const roarCard = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'card.html',
    controller: class roarCardComponent {
        constructor($sce) {
          /* @ngInject */
          this.$sce = $sce;
        }
        $onInit() {
          this.tru = rendered => this.$sce.trustAsHtml(rendered);
        }
    }
};

angular.module("roarCard.module",[])
angular.module("roarCard.module").component("roarCard", roarCard);