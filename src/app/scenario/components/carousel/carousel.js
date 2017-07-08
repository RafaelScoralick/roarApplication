const carousel = {
    bindings: {
      data: '<'
    },
    controllerAs: 'vm',
    templateUrl: 'carousel.html',
    controller: class carousel {
        constructor($scope,$state,RoarRest) {
          /* @ngInject */
          this.$scope = $scope;
          this.$state = $state;
          this.RoarRest = RoarRest;
        }
        $onInit() {
            this.RoarRest.list('posts',"categories=2",'fields=id,slug,title.rendered,better_featured_image')
            .then(data => this.data = data);
            
            this.isState = function(states){
                return this.$state.includes(states);
            };
        }
        $postLink(){
            this.$scope.init = function(){
                angular.element('.owl-carousel-black').owlCarousel({
                    //items :4, 
                    loop: true,
                    //dots: true,
                    autoplay: true,
                    autoplayHoverPause: true,
                    //dotsContainer: '#carousel-custom-dots',
                    responsive:{
                        0:{
                            items:1
                        },
                        320:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        1024:{
                            items:3
                        }
                    }
                    
                });
            };
        }
    }
};
angular.module("roarCarousel.module",['ui.router']).component("roarCarousel", carousel);