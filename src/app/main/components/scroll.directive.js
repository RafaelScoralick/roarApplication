(function(){
    
'use strict';

const roarScroll = {
        restrict: 'E',
        scope: {

            readyToBind: "@"
        }
};

angular.module("roarMain.module").directive('roarScroll', roarScroll);
})();