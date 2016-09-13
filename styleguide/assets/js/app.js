    //Sed App
    var snackApp = angular.module('snackApp', []);

    // Controllers

    snackApp.controller('snackController', ['$location', function($location){
        var self = this;

        self.clickPage = function(){
            self.currentPage = $location.path();
            return self.currentPage;
        };

        self.classPage = function(){
            self.currentPage = $location.path();
            self.classNamePage = self.currentPage.split('/')[1];
            return self.classNamePage;
        };

    }]);

