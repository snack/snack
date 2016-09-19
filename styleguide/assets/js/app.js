    //Sed App
    var snackApp = angular.module('snackApp', []);

    // Config

    snackApp.config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }]);

    // Controllers

    snackApp.controller('snackController', ['$location', function($location) {
        var self = this;

        self.isCurrent = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
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
            replace: true,
            transclude: true,
            link: function(scope, element, attrs){
                Rainbow.color();

                element.bind("click", function() {

                    // Toggle Class
                    this.classList.toggle('current');
                });
            }
        };
    });
