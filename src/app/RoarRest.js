class RoarRest {
    /* melhorar o sistema de recebimento de querys */
    constructor($http) {
        /* @ngInject */
        this.http = $http;
    }
    get(target,query) {
        return this.http.get("wp-json/wp/v2/"+target+"?"+query)
            .then( response => response.data[0] )
            .catch(error => console.error('XHR Failed for get.'));
    } 
    list(target,query) {
        return this.http.get("wp-json/wp/v2/"+target+"?"+query)
            .then( response => response.data )
            .catch(error => console.error('XHR Failed for list.'));
    }
}
angular.module("roarApplication").service('RoarRest',RoarRest);