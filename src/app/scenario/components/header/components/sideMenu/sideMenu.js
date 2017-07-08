
const sideMenu = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'sideMenu.html',
    controller: class sideMenu {
        constructor(Location,RoarRest,$sce) {
          /* @ngInject */
          this.Location = Location;
          this.RoarRest = RoarRest;
          this.$sce = $sce;
        }
        $onInit() {
          //const sidebarjs = new SidebarJS();
          this.RoarRest.list('pages','fields=id,slug,title.rendered,fontawesome&parent=0')
          .then(data => this.data = data);
          this.image = this.Location+"build/image/android-chrome-192x192.png";
          //this.tru = rendered => this.$sce.trustAsHtml(rendered);
        }
    }
};
angular.module("roarSideMenu.module",['ngSidebarJS']).component("roarSideMenu", sideMenu);