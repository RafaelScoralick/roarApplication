const header = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'header.html',
    controller: class header {
        constructor(Location) {
          /* @ngInject */
          this.Location = Location;
        }
        $onInit() {
          this.imagemenu = this.Location+"build/image/hamburger.svg";
          this.image = this.Location+"build/image/Logo.png";
        }
    }
};
angular.module("roarHeader.module",['roarSideMenu.module']).component("roarHeader", header);