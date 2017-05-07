angular.module('starter.controllers', [])
    .controller('CartCtrl', function($scope, cartList, $ionicModal, $timeout) {
        $scope.cart = cartList;

    })
    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeLogin();
            }, 1000);
        };
    })
    .controller('loginCtrl', function($scope) {

    })
    .controller('EmailLoginCtrl', function($scope) {
        $scope.login = "true";
        $scope.signup = "false";
        $scope.showWhat = function(num) {
            if (num == "1") {
                $scope.login = "true";
                $scope.signup = "false";
            } else if (num == "2") {
                $scope.login = "false";
                $scope.signup = "true";
            }
        };

    })
    .controller('MyReviewsCtrl', function($scope) {
        $scope.res = "true";
        $scope.food = "false";
        $scope.showWhat = function(num) {
            console.log(num);
            if (num == "1") {
                $scope.res = "true";
                $scope.food = "false";

            } else if (num == "2") {
                $scope.res = "false";
                $scope.food = "true";
            }
        }
    })
    .controller('MyFavCtrl', function($scope) {
        $scope.res = "true";
        $scope.food = "false";
        $scope.showWhat = function(num) {
            if (num == "1") {
                $scope.res = "true";
                $scope.food = "false";

            } else if (num == "2") {
                $scope.res = "false";
                $scope.food = "true";
            }
        }
    })
    .controller('resListCtrl', function($scope, $state, $ionicPopover, restaurantInfo) {
        $scope.resList = restaurantInfo.list;


        $scope.goRestaurant = function(id) {
            console.log(id);
            $state.go('app.viewres', { 'slug': id, 'else': 'XD' });
        }

        $scope.showWhat = function(num) {
            if (num == "1") {
                $scope.list = "true";
                $scope.mapv = "false";

            } else if (num == "2") {
                $scope.list = "false";
                $scope.mapv = "true";
                $("#map").show();
            }
        }


        var template = '<ion-popover-view><ion-header-bar> <h1 class="title">Filter</h1><button class="button button-positive button-clear">Done</button></ion-header-bar> <ion-content> <ion-checkbox ng-model="isChecked">Short by Pricing</ion-checkbox> </ion-content></ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });



        $scope.openFilter = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
        // Execute action on hide popover
        $scope.$on('popover.hidden', function() {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('popover.removed', function() {
            // Execute action
        });

    })
    .controller('settingsCtrl', function($scope, $ionicModal) {
        //Change Password Model
        $ionicModal.fromTemplateUrl('templates/changepassword.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.changepassword = modal;
        });

        $scope.openChangePasswordModel = function() {
            $scope.changepassword.show();
        };
        $scope.closeChangePasswordModal = function() {
            $scope.changepassword.hide();
        };

        // About Model
        $ionicModal.fromTemplateUrl('templates/about.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.about = modal;
        });
        $scope.openAboutModel = function() {
            $scope.about.show();
        };
        $scope.closeAboutModal = function() {
            $scope.about.hide();
        };

        //Terms Model
        $ionicModal.fromTemplateUrl('templates/terms.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.terms = modal;
        });
        $scope.openTermsModel = function() {
            $scope.terms.show();
        };
        $scope.closeTermsModal = function() {
            $scope.terms.hide();
        };

        //Privacy Model
        $ionicModal.fromTemplateUrl('templates/privacy.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.privacy = modal;
        });
        $scope.openPrivacyModel = function() {
            $scope.privacy.show();
        };
        $scope.closePrivacyModal = function() {
            $scope.privacy.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });

    })
    .controller('ManageAddressCtrl', function($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('templates/addaddress.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });

    })
    .controller('ViewResCtrl', function($scope, $state, $stateParams, cartList, restaurantInfo, restaurantMenu, $ionicPopup, $timeout) {
        var get = $stateParams;
        console.log(get);
        $scope.resInfo = {};
        $scope.resInfo.list = restaurantInfo.getSlug(get.slug);
        console.log($scope.resInfo);
        $scope.resInfo.menu = restaurantMenu.slug(get.slug);

        for (let i = $scope.resInfo.menu.length; i--;) {
            $scope.resInfo.menu[i].amount = 0;
        }

        $scope.cart = cartList;

        $scope.addDish = function(index) {
            //$scope.resInfo.menu[index].amount++;
            //console.log("ADD DISH: " + index);
            //$scope.cart.push($scope.resInfo.menu[index]);
            //console.log($scope.cart);
            $scope.tempDish = angular.copy($scope.resInfo.menu[index]);
            $scope.tempDish.spec = Array();
            console.log($scope.tempDish);
            //$scope.tempDish.amount = 0;

            let myPopup = $ionicPopup.show({
                templateUrl: 'templates/viewers-menu-item.html',
                title: $scope.resInfo.menu[index].name,
                subTitle: '請輸入餐點細節',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>加入</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            $scope.resInfo.menu[index].amount++;
                            $scope.cart.push($scope.tempDish);
                            console.log($scope.cart);
                        }
                    }
                ]
            });
        }




        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'RATING',
                template: '<span style="font-size:25px;color:#FFC107;text-align:center"><i class="ion-ios-star"></i><i class="ion-ios-star"></i><i class="ion-ios-star"></i><i class="ion-ios-star"></i><i class="ion-ios-star"></i><span><br><textarea placeholder="your review"></textarea>'
            });

            confirmPopup.then(function(res) {
                if (res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };
    })

.controller('MapViewCtrl', function($scope, $state, $cordovaGeolocation) {
    var latLng = new google.maps.LatLng('23.4821681', '120.4597281');
    var mapOptions = {
        center: latLng,
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
});