'use strict';

angular.module('swarmApp.directives', [])

    .directive('chart', function ($window) {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                chartData: "=value"
            },
            transclude: true,
            replace: true,

            link: function (scope, element, attrs) {
                var chartsDefaults = {
                    chart: {
                        renderTo: element[0],
                        type: attrs.type || null,
                        height: attrs.height || null,
                        width: attrs.width || null
                    }
                };

                var chart
                var w = angular.element($window);

                scope.getWindowDimensions = function () {
                    var w = angular.element($window);
                    return { 'h': w.outerHeight, 'w': w.outerWidth };
                };

                w.bind('resize', function () {
                    var x
                    var w = angular.element($window)
                    x = scope.windowDimensions = {
                        'h': w.outerHeight, 'w': w.outerWidth
                    }
                    scope.$apply();
                });

                scope.$watch(scope.windowDimensions, function (newValue, oldValue) {
                    if (newValue === oldValue || !newValue || !chart) return;
                    var resize = newValue / oldValue
                    var h = chart.height
                    var w = chart.width
                    chart.setSize(w * resize, h * resize)
                }, true);


                //Update when charts data changes
                scope.$watch(function () {
                    return scope.chartData;
                }, function (value) {
                    if (!value) return;
                    // We need deep copy in order to NOT override original chart object.
                    // This allows us to override chart data member and still the keep
                    // our original renderTo will be the same
                    var deepCopy = true;
                    var newSettings = {};
                    $.extend(deepCopy, newSettings, chartsDefaults, scope.chartData);
                    chart = new Highcharts.Chart(newSettings);
                });
            }
        }

    });
