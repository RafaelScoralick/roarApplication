'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var root = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  templateUrl: 'root.html',
  controller: function () {
    function root() {
      /* @ngInject */

      _classCallCheck(this, root);
    }

    _createClass(root, [{
      key: '$onInit',
      value: function $onInit() {}
    }, {
      key: '$postLink',
      value: function $postLink() {}
    }, {
      key: '$onChanges',
      value: function $onChanges() {}
    }, {
      key: '$onDestroy',
      value: function $onDestroy() {}
    }]);

    return root;
  }()
};
angular.module("roarApplication", ['ngSanitize', 'ngLocale', 'ngAnimate', 'ngTouch', 'templateCache', 'roarMain.module', 'roarScenario.module']);

angular.module("roarApplication").component("roarRoot", root);
//mover
angular.module("roarApplication").constant("Location", "/wp-content/themes/roarApplication/");;"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoarRest = function () {
    RoarRest.$inject = ["$http"];

    /* melhorar o sistema de recebimento de querys */
    function RoarRest($http) {
        _classCallCheck(this, RoarRest);

        /* @ngInject */
        this.http = $http;
    }

    _createClass(RoarRest, [{
        key: "get",
        value: function get(target, query) {
            return this.http.get("wp-json/wp/v2/" + target + "?" + query).then(function (response) {
                return response.data[0];
            }).catch(function (error) {
                return console.error('XHR Failed for get.');
            });
        }
    }, {
        key: "list",
        value: function list(target, query) {
            return this.http.get("wp-json/wp/v2/" + target + "?" + query).then(function (response) {
                return response.data;
            }).catch(function (error) {
                return console.error('XHR Failed for list.');
            });
        }
    }]);

    return RoarRest;
}();

angular.module("roarApplication").service('RoarRest', RoarRest);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var scenario = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  controller: function () {
    function scenario() {
      /* @ngInject */

      _classCallCheck(this, scenario);
    }

    _createClass(scenario, [{
      key: '$onInit',
      value: function $onInit() {}
    }, {
      key: '$postLink',
      value: function $postLink() {}
    }, {
      key: '$onChanges',
      value: function $onChanges() {}
    }, {
      key: '$onDestroy',
      value: function $onDestroy() {}
    }]);

    return scenario;
  }()
};
angular.module("roarScenario.module", ['roarHeader.module', 'roarFooter.module', 'roarCarousel.module', 'roarMenu.module']).component("roarScenario", scenario);;'use strict';

;(function () {

    'use strict';

    carouselItem.$inject = ['$window'];
    function carouselItem($window) {
        return {
            restrict: 'A',
            link: function link($scope, element, $attr) {
                $scope.$evalAsync(function () {
                    $scope.init(element.parent());
                });
            }
        };
    }
    angular.module("roarScenario.module").directive("carouselItem", carouselItem);
    carouselItem.$injec = ['$window'];
})();;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var carousel = {
    bindings: {
        data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'carousel.html',
    controller: function () {
        carousel.$inject = ['$scope', '$state', 'RoarRest'];

        function carousel($scope, $state, RoarRest) {
            _classCallCheck(this, carousel);

            /* @ngInject */
            this.$scope = $scope;
            this.$state = $state;
            this.RoarRest = RoarRest;
        }

        _createClass(carousel, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                this.RoarRest.list('posts', "categories=2", 'fields=id,slug,title.rendered,better_featured_image').then(function (data) {
                    return _this.data = data;
                });

                this.isState = function (states) {
                    return this.$state.includes(states);
                };
            }
        }, {
            key: '$postLink',
            value: function $postLink() {
                this.$scope.init = function () {
                    angular.element('.owl-carousel-black').owlCarousel({
                        //items :4, 
                        loop: true,
                        //dots: true,
                        autoplay: true,
                        autoplayHoverPause: true,
                        //dotsContainer: '#carousel-custom-dots',
                        responsive: {
                            0: {
                                items: 1
                            },
                            320: {
                                items: 1
                            },
                            600: {
                                items: 2
                            },
                            1024: {
                                items: 3
                            }
                        }

                    });
                };
            }
        }]);

        return carousel;
    }()
};
angular.module("roarCarousel.module", ['ui.router']).component("roarCarousel", carousel);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var footer = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  templateUrl: 'footer.html',
  controller: function () {
    footer.$inject = ['Location'];

    function footer(Location) {
      _classCallCheck(this, footer);

      /* @ngInject */
      this.Location = Location;
    }

    _createClass(footer, [{
      key: '$onInit',
      value: function $onInit() {
        this.image = this.Location + "build/image/LogoBranca.png";
      }
    }]);

    return footer;
  }()
};
angular.module("roarFooter.module", []).component("roarFooter", footer);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var header = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  templateUrl: 'header.html',
  controller: function () {
    header.$inject = ['Location'];

    function header(Location) {
      _classCallCheck(this, header);

      /* @ngInject */
      this.Location = Location;
    }

    _createClass(header, [{
      key: '$onInit',
      value: function $onInit() {
        this.imagemenu = this.Location + "build/image/hamburger.svg";
        this.image = this.Location + "build/image/Logo.png";
      }
    }]);

    return header;
  }()
};
angular.module("roarHeader.module", ['roarSideMenu.module']).component("roarHeader", header);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var menu = {
    bindings: {
        data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'menu.html',
    controller: function () {
        menu.$inject = ['$scope', '$state', 'RoarRest', '$sce'];

        function menu($scope, $state, RoarRest, $sce) {
            _classCallCheck(this, menu);

            /* @ngInject */
            this.$scope = $scope;
            this.$state = $state;
            this.RoarRest = RoarRest;
            this.$sce = $sce;
        }

        _createClass(menu, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                this.RoarRest.list('categories', 'fields=id,slug,name').then(function (data) {
                    return _this.data = data;
                });
                this.tru = function (rendered) {
                    return _this.$sce.trustAsHtml(rendered);
                };
                this.isState = function (states) {
                    return this.$state.includes(states);
                };
            }
        }, {
            key: '$postLink',
            value: function $postLink() {
                this.$scope.init = function () {
                    angular.element('.owl-carousel-menu').owlCarousel({
                        //loop: true,
                        //center:true,
                        autoWidth: true,
                        dots: false
                        //items:10
                    });
                };
            }
        }]);

        return menu;
    }()
};
angular.module("roarMenu.module", ['ui.router']).component("roarMenu", menu);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sideMenu = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  templateUrl: 'sideMenu.html',
  controller: function () {
    sideMenu.$inject = ['Location', 'RoarRest', '$sce'];

    function sideMenu(Location, RoarRest, $sce) {
      _classCallCheck(this, sideMenu);

      /* @ngInject */
      this.Location = Location;
      this.RoarRest = RoarRest;
      this.$sce = $sce;
    }

    _createClass(sideMenu, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        //const sidebarjs = new SidebarJS();
        this.RoarRest.list('pages', 'fields=id,slug,title.rendered,fontawesome&parent=0').then(function (data) {
          return _this.data = data;
        });
        this.image = this.Location + "build/image/android-chrome-192x192.png";
        //this.tru = rendered => this.$sce.trustAsHtml(rendered);
      }
    }]);

    return sideMenu;
  }()
};
angular.module("roarSideMenu.module", ['ngSidebarJS']).component("roarSideMenu", sideMenu);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var main = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  controller: function () {
    function main() {
      /* @ngInject */

      _classCallCheck(this, main);
    }

    _createClass(main, [{
      key: '$onInit',
      value: function $onInit() {}
    }, {
      key: '$postLink',
      value: function $postLink() {}
    }, {
      key: '$onChanges',
      value: function $onChanges() {}
    }, {
      key: '$onDestroy',
      value: function $onDestroy() {}
    }]);

    return main;
  }()
};
angular.module("roarMain.module", ['ui.router', 'ngDisqus', 'roarPage.module', 'roarPost.module', 'roarCardList.module', 'roarLivroList.module', 'roarIndex.module']);
angular.module("roarMain.module").component("roarMain", main);
angular.module("roarMain.module").config(['$disqusProvider', function ($disqusProvider) {
  return $disqusProvider.setShortname('oldskull-rafaelscoralick');
}]);
angular.module("roarMain.module").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  /* @ngInject */
  $stateProvider.state('root', {
    abstract: true
    //component: 'roarMain',
  });
  //$urlRouterProvider.otherwise('/');
}]);;/*
(function() {

function configuracoes($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise(function($injector, $location){
       var state = $injector.get('$state');
       state.go('main.home');
       return $location.path();
    });
}

angular.module("roarMain.module").config(configuracoes);
configuracoes.$inject = ['$stateProvider','$urlRouterProvider'];
}());*/
"use strict";;'use strict';

(function () {

    'use strict';

    angular.module("roarMain.module").directive('dirDisqus', ['$window', function ($window) {
        return {
            restrict: 'E',
            scope: {
                disqus_shortname: '@disqusShortname',
                disqus_identifier: '@disqusIdentifier',
                disqus_title: '@disqusTitle',
                disqus_url: '@disqusUrl',
                disqus_category_id: '@disqusCategoryId',
                disqus_disable_mobile: '@disqusDisableMobile',
                readyToBind: "@"
            },
            template: '<div id="disqus_thread"></div><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>',
            link: function link(scope) {

                scope.$watch("readyToBind", function (isReady) {

                    // If the directive has been called without the 'ready-to-bind' attribute, we
                    // set the default to "true" so that Disqus will be loaded straight away.
                    if (!angular.isDefined(isReady)) {
                        isReady = "true";
                    }
                    if (scope.$eval(isReady)) {
                        // put the config variables into separate global vars so that the Disqus script can see them
                        $window.disqus_shortname = scope.disqus_shortname;
                        $window.disqus_identifier = scope.disqus_identifier;
                        $window.disqus_title = scope.disqus_title;
                        $window.disqus_url = scope.disqus_url;
                        $window.disqus_category_id = scope.disqus_category_id;
                        $window.disqus_disable_mobile = scope.disqus_disable_mobile;

                        // get the remote Disqus script and insert it into the DOM
                        var dsq = document.createElement('script');dsq.type = 'text/javascript';dsq.async = true;
                        dsq.src = '//' + scope.disqus_shortname + '.disqus.com/embed.js';
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                    }
                });
            }
        };
    }]);
})();;'use strict';

(function () {

    'use strict';

    var roarScroll = {
        restrict: 'E',
        scope: {

            readyToBind: "@"
        }
    };

    angular.module("roarMain.module").directive('roarScroll', roarScroll);
})();;'use strict';

/**
 * AngularJS directives for social sharing buttons - Facebook Like, Google+, Twitter and Pinterest 
 * @author Jason Watmore <jason@pointblankdevelopment.com.au> (http://jasonwatmore.com)
 * @version 1.2.0
 */
;(function () {
    angular.module('roarMain.module').directive('fbSave', ['$window', '$rootScope', function ($window, $rootScope) {
        return {
            restrict: 'A',
            scope: {
                fbSave: "=?",
                id: "@",
                slug: "@"
            },
            link: function link(scope, element, attrs) {
                scope.fbSave = "https://oldskull-rafaelscoralick-1.c9users.io/blog/" + scope.slug + "/" + scope.id;

                if (!$window.FB) {
                    // Load Facebook SDK if not already loaded
                    $.getScript('//connect.facebook.net/pt_BR/sdk.js', function () {
                        $window.FB.init({
                            appId: $rootScope.facebookAppId,
                            xfbml: true,
                            version: 'v2.0'
                        });
                        renderSaveButton();
                    });
                } else {
                    renderSaveButton();
                }

                var watchAdded = false;

                function renderSaveButton() {
                    if (!!attrs.fbSave && !scope.fbSave && !watchAdded) {
                        // wait for data if it hasn't loaded yet
                        watchAdded = true;
                        var unbindWatch = scope.$watch('fbSave', function (newValue, oldValue) {
                            if (newValue) {
                                renderSaveButton();

                                // only need to run once
                                unbindWatch();
                            }
                        });
                        return;
                    } else {
                        element.html("<span class='fb-save' data-uri=" + scope.fbSave + " data-size='large'></span>");
                        $window.FB.XFBML.parse(element.parent()[0]);
                    }
                }
            }
        };
    }]).directive('fbLike', ['$window', '$rootScope', function ($window, $rootScope) {
        return {
            restrict: 'A',
            scope: {
                fbLike: '=?'
            },
            link: function link(scope, element, attrs) {
                if (!$window.FB) {
                    // Load Facebook SDK if not already loaded
                    $.getScript('//connect.facebook.net/pt_BR/sdk.js', function () {
                        $window.FB.init({
                            appId: $rootScope.facebookAppId,
                            xfbml: true,
                            version: 'v2.0'
                        });
                        renderLikeButton();
                    });
                } else {
                    renderLikeButton();
                }

                var watchAdded = false;

                function renderLikeButton() {
                    if (!!attrs.fbLike && !scope.fbLike && !watchAdded) {
                        // wait for data if it hasn't loaded yet
                        watchAdded = true;
                        var unbindWatch = scope.$watch('fbLike', function (newValue, oldValue) {
                            if (newValue) {
                                renderLikeButton();

                                // only need to run once
                                unbindWatch();
                            }
                        });
                        return;
                    } else {
                        element.html('<div class="fb-like"' + (!!scope.fbLike ? ' data-href="' + scope.fbLike + '"' : '') + ' data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>');
                        $window.FB.XFBML.parse(element.parent()[0]);
                    }
                }
            }
        };
    }]).directive('googlePlus', ['$window', function ($window) {
        return {
            restrict: 'A',
            scope: {
                googlePlus: '=?'
            },
            link: function link(scope, element, attrs) {
                if (!$window.gapi) {
                    // Load Google SDK if not already loaded
                    $.getScript('//apis.google.com/js/platform.js', function () {
                        renderPlusButton();
                    });
                } else {
                    renderPlusButton();
                }

                var watchAdded = false;

                function renderPlusButton() {
                    if (!!attrs.googlePlus && !scope.googlePlus && !watchAdded) {
                        // wait for data if it hasn't loaded yet
                        watchAdded = true;
                        var unbindWatch = scope.$watch('googlePlus', function (newValue, oldValue) {
                            if (newValue) {
                                renderPlusButton();

                                // only need to run once
                                unbindWatch();
                            }
                        });
                        return;
                    } else {
                        element.html('<div class="g-plusone"' + (!!scope.googlePlus ? ' data-href="' + scope.googlePlus + '"' : '') + ' data-size="medium"></div>');
                        $window.gapi.plusone.go(element.parent()[0]);
                    }
                }
            }
        };
    }]).directive('tweet', ['$window', '$location', function ($window, $location) {
        return {
            restrict: 'A',
            scope: {
                tweet: '=',
                tweetUrl: '='
            },
            link: function link(scope, element, attrs) {
                if (!$window.twttr) {
                    // Load Twitter SDK if not already loaded
                    $.getScript('//platform.twitter.com/widgets.js', function () {
                        renderTweetButton();
                    });
                } else {
                    renderTweetButton();
                }

                var watchAdded = false;

                function renderTweetButton() {
                    if (!scope.tweet && !watchAdded) {
                        // wait for data if it hasn't loaded yet
                        watchAdded = true;
                        var unbindWatch = scope.$watch('tweet', function (newValue, oldValue) {
                            if (newValue) {
                                renderTweetButton();

                                // only need to run once
                                unbindWatch();
                            }
                        });
                        return;
                    } else {
                        element.html('<a href="https://twitter.com/share" class="twitter-share-button" data-text="' + scope.tweet + '" data-url="' + (scope.tweetUrl || $location.absUrl()) + '">Tweet</a>');
                        $window.twttr.widgets.load(element.parent()[0]);
                    }
                }
            }
        };
    }]).directive('pinIt', ['$window', '$location', function ($window, $location) {
        return {
            restrict: 'A',
            scope: {
                pinIt: '=',
                pinItImage: '=',
                pinItUrl: '='
            },
            link: function link(scope, element, attrs) {
                if (!$window.parsePins) {
                    // Load Pinterest SDK if not already loaded
                    (function (d) {
                        var f = d.getElementsByTagName('SCRIPT')[0],
                            p = d.createElement('SCRIPT');
                        p.type = 'text/javascript';
                        p.async = true;
                        p.src = '//assets.pinterest.com/js/pinit.js';
                        p['data-pin-build'] = 'parsePins';
                        p.onload = function () {
                            if (!!$window.parsePins) {
                                renderPinItButton();
                            } else {
                                setTimeout(p.onload, 100);
                            }
                        };
                        f.parentNode.insertBefore(p, f);
                    })($window.document);
                } else {
                    renderPinItButton();
                }

                var watchAdded = false;

                function renderPinItButton() {
                    if (!scope.pinIt && !watchAdded) {
                        // wait for data if it hasn't loaded yet
                        watchAdded = true;
                        var unbindWatch = scope.$watch('pinIt', function (newValue, oldValue) {
                            if (newValue) {
                                renderPinItButton();

                                // only need to run once
                                unbindWatch();
                            }
                        });
                        return;
                    } else {
                        element.html('<a href="//www.pinterest.com/pin/create/button/?url=' + (scope.pinItUrl || $location.absUrl()) + '&media=' + scope.pinItImage + '&description=' + scope.pinIt + '" data-pin-do="buttonPin" data-pin-config="beside"></a>');
                        $window.parsePins(element.parent()[0]);
                    }
                }
            }
        };
    }]);
})();;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cardList = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  templateUrl: 'cardList.html',
  controller: function () {
    cardList.$inject = ['$stateParams', '$state', 'RoarRest'];

    function cardList($stateParams, $state, RoarRest) {
      _classCallCheck(this, cardList);

      /* @ngInject */
      this.RoarRest = RoarRest;
      this.$state = $state;
      this.$stateParams = $stateParams;
    }

    _createClass(cardList, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        if (this.$state.$current.name === 'root.blog') {
          this.RoarRest.list('posts', "categories=" + this.$stateParams.id, "page=1", "fields=id,roarCategorys,slug,date,title.rendered,better_featured_image,time2read").then(function (data) {
            return _this.data = data;
          });
        } else {
          this.RoarRest.list('posts', "tags=" + this.$stateParams.id, "page=1", "fields=id,roarCategorys,slug,date,title.rendered,better_featured_image,time2read").then(function (data) {
            return _this.data = data;
          });
        }
      }
    }]);

    return cardList;
  }()
};
angular.module("roarCardList.module", ['ui.router', 'roarCard.module']);
angular.module("roarCardList.module").component("roarCardList", cardList);
angular.module("roarCardList.module").config(['$locationProvider', function ($locationProvider) {
  return $locationProvider.html5Mode(true);
}]);
angular.module("roarCardList.module").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  /* @ngInject */
  $stateProvider.state('root.blog', {
    url: '/blog/:slug/:id',
    component: 'roarCardList',
    params: {
      slug: 'destaques',
      id: null
    }
  }).state('root.tags', {
    url: '/tag/:slug/:{id}',
    component: 'roarCardList',
    params: {
      slug: null,
      id: null
    }
  });
  //$urlRouterProvider.otherwise('/');
}]);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var index = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  templateUrl: 'index.html',
  controller: function () {
    index.$inject = ['Location'];

    function index(Location) {
      _classCallCheck(this, index);

      /* @ngInject */
      this.Location = Location;
    }

    _createClass(index, [{
      key: '$onInit',
      value: function $onInit() {
        this.image = {
          'banner': { "background-image": "url(" + this.Location + 'build/image/banner.jpg' + ")" },
          'banner2': { "background-image": "url(" + this.Location + 'build/image/banner2.png' + ")" },
          'imagelanding': this.Location + 'build/image/logoeafs.png',
          'calice': this.Location + "build/image/calice.png",
          'elmo': this.Location + "build/image/elmo.png",
          'mao': this.Location + "build/image/mao.png",
          'livro': this.Location + "build/image/livro.png",
          'faca': this.Location + "build/image/faca.png"
        };
      }
    }, {
      key: '$postLink',
      value: function $postLink() {}
    }, {
      key: '$onChanges',
      value: function $onChanges() {}
    }, {
      key: '$onDestroy',
      value: function $onDestroy() {}
    }]);

    return index;
  }()
};
angular.module("roarIndex.module", ['ui.router']);
angular.module("roarIndex.module").component("roarIndex", index);
angular.module("roarIndex.module").config(['$locationProvider', function ($locationProvider) {
  return $locationProvider.html5Mode(true);
}]);
angular.module("roarIndex.module").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  /* @ngInject */
  $stateProvider.state('root.hom', {
    url: '/home{homescreen:.*}/',
    component: 'roarIndex',
    params: {
      homescreen: null
    }
  }).state('root.home', {
    url: '/',
    component: 'roarIndex'
  });
  $urlRouterProvider.otherwise('/');
}]);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var livroList = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  templateUrl: 'livroList.html',
  controller: function () {
    livroList.$inject = ['$stateParams', '$state', 'RoarRest'];

    function livroList($stateParams, $state, RoarRest) {
      _classCallCheck(this, livroList);

      /* @ngInject */
      this.RoarRest = RoarRest;
      this.$state = $state;
      this.$stateParams = $stateParams;
    }

    _createClass(livroList, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.RoarRest.list('livros' //,
        //"fields=id,roarCategorys,slug,date,title.rendered,better_featured_image,time2read"
        ).then(function (data) {
          return _this.data = data;
        });
      }
    }]);

    return livroList;
  }()
};
angular.module("roarLivroList.module", ['ui.router', 'roarLivro.module']);
angular.module("roarLivroList.module").component("roarLivroList", livroList);
angular.module("roarLivroList.module").config(['$locationProvider', function ($locationProvider) {
  return $locationProvider.html5Mode(true);
}]);
angular.module("roarLivroList.module").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  /* @ngInject */
  $stateProvider.state('root.produtos', {
    url: '/produtos/',
    component: 'roarLivroList'
  });
  //$urlRouterProvider.otherwise('/');
}]);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var page = {
    bindings: {
        data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'page.html',
    controller: function () {
        page.$inject = ['$stateParams', '$sce', 'RoarRest'];

        function page($stateParams, $sce, RoarRest) {
            _classCallCheck(this, page);

            /* @ngInject */
            this.RoarRest = RoarRest;
            this.$sce = $sce;
            this.$stateParams = $stateParams;
        }

        _createClass(page, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                this.RoarRest.get('pages', "slug=" + this.$stateParams.slug).then(function (data) {
                    return _this.data = data;
                });
                this.tru = function (rendered) {
                    return _this.$sce.trustAsHtml(rendered);
                };
            }
        }]);

        return page;
    }()
};
angular.module("roarPage.module", ['ui.router']);
angular.module("roarPage.module").component("roarPage", page);
angular.module("roarPage.module").config(['$locationProvider', function ($locationProvider) {
    return $locationProvider.html5Mode(true);
}]);
angular.module("roarPage.module").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    /* @ngInject */
    $stateProvider.state('root.page', {
        url: '/:slug/',
        component: 'roarPage',
        params: {
            slug: 'home'
        }
    });
    //$urlRouterProvider.otherwise('/');
}]);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var post = {
    bindings: {
        data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'post.html',
    controller: function () {
        post.$inject = ['$stateParams', '$sce', 'RoarRest'];

        function post($stateParams, $sce, RoarRest) {
            _classCallCheck(this, post);

            /* @ngInject */
            this.RoarRest = RoarRest;
            this.$sce = $sce;
            this.$stateParams = $stateParams;
        }

        _createClass(post, [{
            key: '$onInit',
            value: function $onInit() {
                var _this = this;

                this.RoarRest.get('posts', "slug=" + this.$stateParams.slug).then(function (data) {
                    return _this.data = data;
                });
                this.tru = function (rendered) {
                    return _this.$sce.trustAsHtml(rendered);
                };
            }
        }]);

        return post;
    }()
};
angular.module("roarPost.module", ['ui.router']);
angular.module("roarPost.module").component("roarPost", post);

angular.module("roarPost.module").config(['$locationProvider', function ($locationProvider) {
    return $locationProvider.html5Mode(true);
}]);
angular.module("roarPost.module").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    /* @ngInject */
    $stateProvider.state('root.post', {
        url: '/post/:slug/:id',
        component: 'roarPost',
        params: {
            slug: null,
            id: null
        }
    });
    //$urlRouterProvider.otherwise('/');
}]);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var roarCard = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  templateUrl: 'card.html',
  controller: function () {
    roarCardComponent.$inject = ['$sce'];

    function roarCardComponent($sce) {
      _classCallCheck(this, roarCardComponent);

      /* @ngInject */
      this.$sce = $sce;
    }

    _createClass(roarCardComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.tru = function (rendered) {
          return _this.$sce.trustAsHtml(rendered);
        };
      }
    }]);

    return roarCardComponent;
  }()
};

angular.module("roarCard.module", []);
angular.module("roarCard.module").component("roarCard", roarCard);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var livro = {
  bindings: {
    data: '<'
  },
  controllerAs: 'vm',
  templateUrl: 'livro.html',
  controller: function () {
    livro.$inject = ['$sce'];

    function livro($sce) {
      _classCallCheck(this, livro);

      /* @ngInject */
      this.$sce = $sce;
    }

    _createClass(livro, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.tru = function (rendered) {
          return _this.$sce.trustAsHtml(rendered);
        };
      }
    }]);

    return livro;
  }()
};
angular.module("roarLivro.module", []);
angular.module("roarLivro.module").component("roarLivro", livro);
//# sourceMappingURL=roar.js.map
