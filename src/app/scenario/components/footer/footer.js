const footer = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'footer.html',
    controller: class footer {
        constructor(Location) {
          /* @ngInject */
          this.Location = Location;
        }
        $onInit() {
          this.image = this.Location+"build/image/LogoBranca.png";
        }
    }
};
angular.module("roarFooter.module",[]).component("roarFooter", footer);