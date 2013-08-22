'use strict';

angular.module('swarmApp.directives', [])

    .directive('myChart', function () {
        return function (scope, element, attrs) {
            scope.$watch(attrs.myChart, function (newOptions, oldOptions) {
                //do nothing when called on registration
                if (!newOptions) return;

                if (scope.$$chart) scope.$$chart.destroy();

                var newChartOptions = angular.copy(newOptions);
                newChartOptions.chart.renderTo = element[0];
                //$.extend(true, newChartOptions, defaultChartOptions, scope.ngModel);
                scope.$$chart = new Highcharts.Chart(newChartOptions);

            });
        }
    })

    .directive('chart', function ($window) {
        return {
            restrict: 'E',
            replace: true,
            $transclude: false,

            scope: {
                options: '=',
                aspectRatio: '@',
                id: '@'
            },

            template: //'<div></div>',
            //'<div class="keep-aspect-ratio"><div class="keep-aspect-ratio-content"></div></div>',
                '<div id style="position: relative; width: 100%; padding-bottom: {{ aspectRatio }}; display: block;"><div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></div></div>',


            link: function (scope, element, attrs) {
                var defaultChartOptions = {
                    chart: {
                        type: attrs.type || null
                    }
                };


                $window.onresize = function () {
                    scope.width = $window.innerWidth;
                    scope.height = $window.innerHeight;
                    scope.$apply();
                }


                var chart

//                scope.$watch(function () {
//                    return scope.chartData;
//                }, function (value) {
//                    if (!value) return;
//                    // We need deep copy in order to NOT override original chart object.
//                    // This allows us to override chart data member and still the keep
//                    // our original renderTo will be the same
//                    var deepCopy = true;
//                    var newSettings = {};
//                    $.extend(deepCopy, newSettings, chartsDefaults, scope.chartData);
//                    chart = new Highcharts.Chart(newSettings);
//                });

                //Update when charts data changes

                scope.$watch(function () {
                    return scope.options
                }, function (newOptions, oldOptions) {
                    //do nothing when called on registration
                    if (!newOptions || newOptions === oldOptions) return;

                    if (chart) chart.destroy();

                    var newChartOptions = angular.copy(newOptions);
                    newChartOptions.chart.renderTo = element.children()[0];
                    //$.extend(true, newChartOptions, defaultChartOptions, scope.ngModel);
                    chart = new Highcharts.Chart(newChartOptions);

                }, true);
            }
        }
    });
