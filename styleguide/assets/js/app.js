    //Sed App
    var snackApp = angular.module('snackApp', []);

    // Controllers

    snackApp.controller('snackController', ['$location', function($location){
        var self = this;

        self.contact = "Airton";

        self.class = "";
        self.changeClass = function(el){
            if (self.class === "current")
                self.class = "";
            else
                self.class = "current";
        };
    }]);

    // Directives

    snackApp.directive('snackExample', function() {
        return {
            templateUrl: "templates/snack-example.html",
            scope: {
                title: "@",
                desc: "@",
                lang: "@"
            },
            transclude: true,
            link: function(){
                Rainbow.color();
            }
        };
    });
