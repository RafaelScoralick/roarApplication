const livro = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'livro.html',
    controller: class livro {
        constructor($sce) {
          /* @ngInject */
          this.$sce = $sce
        }
        $onInit() {
          this.tru = rendered => this.$sce.trustAsHtml(rendered);
        }
    }
};
angular.module("roarLivro.module",[]);
angular.module("roarLivro.module").component("roarLivro", livro);