'use strict';

var cleanProperties = function (jsonObject) {

}

var ApplianceProfile = new function (profileId) {
    this.profileId = profileId
    this.startAfter = 0
    this.endBefore = 1440
}


var clearsky = {
    "@label": "TenMinutes",
    "@href": "http://156.54.69.117:8080/swarm/base/solars/clearsky",
    "slotsize": "600",
    "slots": "144",
    "totsalseconds": "86400",
    "totalhours": "24:00:00",
    "skycover": "ClearSky",
    "peakpower": "2000.0",
    "values": "0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 2.184964E-27 1.1865935 4.124882 8.533645 14.26544 21.207275 29.259842 38.329575 48.324993 59.15482 70.727066 82.948555 95.72486 108.96035 122.55841 136.42174 150.4528 164.55412 178.6289 192.5814 206.31741 219.74487 232.77423 245.31908 257.2965 268.62772 279.23834 289.05893 298.02536 306.07922 313.16815 319.246 324.27344 328.21783 331.05365 332.76248 333.33334 332.76248 331.05365 328.21783 324.27344 319.246 313.16815 306.07922 298.02536 289.05893 279.23834 268.62772 257.2965 245.31908 232.77423 219.74487 206.31741 192.5814 178.6289 164.55412 150.4528 136.42174 122.55841 108.96035 95.72486 82.948555 70.727066 59.15482 48.324993 38.329575 29.259842 21.207275 14.26544 8.533645 4.124882 1.1865935 2.184964E-27 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0"
}

var partlyclouded = {"@label": "TenMinutes", "@href": "http://156.54.69.117:8080/swarm/base/solars/partlyclouded", "slotsize": "600", "slots": "288", "totsalseconds": "172800", "totalhours": "48:00:00", "skycover": "PartlyClouded", "peakpower": "2000.0", "values": "0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 1.1185209E-27 0.60743773 2.1115985 6.8785367 11.498645 17.094105 23.144587 30.318762 38.225155 22.744514 27.193943 31.893 61.437263 69.931946 78.65933 111.34235 122.79398 134.30295 81.703896 88.08569 94.36847 159.43755 168.8911 177.9931 101.478516 105.94758 110.13245 72.50696 74.75608 76.7763 208.91823 212.97284 216.3267 60.05976 60.578682 60.891376 292.73294 292.2316 290.7309 186.78423 184.53952 181.67848 45.295876 44.27055 43.10566 124.76035 120.5217 115.94206 41.75384 39.810158 37.77439 129.08237 121.194824 113.12603 176.51923 162.61067 148.67589 88.38755 79.40551 70.59534 75.147644 65.11776 55.523426 35.434124 28.946987 22.959665 15.385512 11.151284 7.501104 7.1923347 3.4765372 1.000086 1.0133817E-27 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 3.3956665E-28 0.18440926 0.6410506 2.7158413 4.5399914 6.7492375 24.981348 32.724865 41.258713 23.825853 28.48682 33.409283 59.06948 67.23678 75.62781 133.65652 147.40318 161.21867 30.441807 32.819584 35.16046 184.6071 195.55304 206.09192 232.88855 243.14485 252.74892 95.4234 98.38338 101.0421 130.36159 132.8916 134.98436 254.3604 256.55807 257.8824 235.34628 234.94322 233.73672 252.27261 249.24089 245.37674 92.785736 90.685425 88.29922 102.27279 98.798134 95.04396 34.929184 33.303192 31.600172 80.59729 75.67241 70.63436 103.78192 95.60459 87.41184 118.29918 106.27748 94.48582 73.0606 63.30927 53.981396 22.69375 18.53907 14.704496 8.810147 6.385517 4.295328 6.2740846 3.0326853 0.8724043 1.2123662E-27 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0"}

/* Controllers */

angular.module('swarmApp.controllers', [])

    .controller("HomeController", ["$scope", "$rootScope", function ($scope, $rootScope) {
        $scope.hideNavbar = false

        $scope.toggleNavbar = function () {
            $scope.hideNavbar = !$scope.hideNavbar
        }


        $scope.account = $rootScope.account


        $scope.solarChart = {
            options: {
                chart: {
                    type: 'spline',
                    zoomType: 'x'
                },
                plotOptions: {
                    spline: {
                        lineWidth: 2,
                        enableMouseTracking: false,
                        marker: {
                            enabled: false
                        },
                        pointInterval: 600000, // ten minutes
                        pointStart: Date.UTC(2013, 12, 1, 0, 0, 0)
                    }
                }

            },
            xAxis: {
                type: 'datetime',
                currentMin: Date.UTC(2013, 12, 1, 0, 0, 0),
                currentMax: Date.UTC(2013, 12, 3, 0, 0, 0)
            },

            plotOptions: {
                spline: {
                    lineWidth: 2,
                    enableMouseTracking: false,
                    marker: {
                        enabled: false
                    },
                    pointInterval: 600000, // ten minutes
                    pointStart: Date.UTC(2013, 1, 1, 0, 0, 0)
                }
            },
            loading: false,
            series: [
                {
                    data: partlyclouded.values.split(' ').map(parseFloat)
                }
            ],
            title: {
                text: partlyclouded.skycover
            }
        }

        $scope.tariffChart = {
            options: {
                chart: {
                    type: 'area',
                    zoomType: 'x'
                },
                plotOptions: {
                    area: {
                        step: 'left',
                        lineWidth: 3,
                        enableMouseTracking: true,
                        marker: {
                            enabled: false
                        },
                        //pointPadding: 0,
                        //groupPadding: 0,
                        //borderWidth: 0,
                        pointInterval: 3600000, // 1 hour
                        pointStart: Date.UTC(2013, 12, 1, 0, 0, 0)
                    }
                }
            },
            loading: false,
            xAxis: {
                type: 'datetime',
                currentMin: Date.UTC(2013, 12, 1, 0, 0, 0),
                currentMax: Date.UTC(2013, 12, 3, 0, 0, 0),
                tickInterval: 2 * 3600 * 1000, // 2 hours
                labels: {
                    format: '{value: %H}'
                }
            },

            series: [
                {
                    data: tariffs.tariffprofile[0].values.split(' ').map(parseFloat)
                }
            ],
            title: {
                text: tariffs.tariffprofile[0].description
            }
        }

        $scope.solarChart2 = {
            xAxis: {
                type: 'datetime',
                labels: {
                    format: '{value: %k/%M}',
                    align: 'right',
                    rotation: -30
                }
            },
            yAxis: {
            },
            plotOptions: {
                areaspline: {
                    lineWidth: 2,
                    enableMouseTracking: false,
                    marker: {
                        enabled: false
                    },
                    pointInterval: 600000, // ten minutes
                    pointStart: Date.UTC(2013, 1, 1, 0, 0, 0)
                }
            },
            series: [
                {
                    name: "Produced Power",
                    data: clearsky.values.split(' ').map(parseFloat)
                }
            ],
            title: {
                text: clearsky.skycover
            }
        }

        $scope.addPoints = function () {
            var seriesArray = $scope.chart.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
        };

        $scope.addSeries = function () {
            var rnd = []
            for (var i = 0; i < 10; i++) {
                rnd.push(Math.floor(Math.random() * 20) + 1)
            }
            $scope.chart.series.push({
                data: rnd
            })
        }

        $scope.removeRandomSeries = function () {
            var seriesArray = $scope.chart.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray.splice(rndIdx, 1)
        }

        $scope.options = {
            type: 'line'
        }

        $scope.swapChartType = function () {
            if (this.chart.options.chart.type === 'line') {
                this.chart.options.chart.type = 'bar'
            } else {
                this.chart.options.chart.type = 'line'
            }
        }

        $scope.chart = {
            options: {
                chart: {
                    type: 'bar'
                }
            },
            series: [
                {
                    data: [10, 15, 12, 8, 7]
                }
            ],
            title: {
                text: 'Hello'
            }
        }

    }])

    .controller("LogInController", ["$scope", "$rootScope", "$location", "MyService", function ($scope, $rootScope, $location, MyService) {
        $scope.logIn = function () {
            MyService.login($scope.user.name, $scope.user.password)
                .then(function (data) {
                    $rootScope.account = data.data;
                    //RestService.isLogged = true
                    $location.path('/home')
                }, function (data) {
                    $location.path('/home').replace()
                })
            //$location.path('/home')
        }
    }])

    .controller("PowerProfileController", ["$rootScope", "$scope", "MyService", "ChartBuilder", function ($rootScope, $scope, MyService, ChartBuilder) {
        MyService.getPowerProfile('dishmachine').then(function (data) {
            $scope.profile = data.data


            var phases = data.data.energyphases.energyphase
            var totalDuration = 0
            var seriesData = []
            for (var i = 0; i < phases.length; ++i) {
                var item = phases[i]
                var peakpower = parseFloat(item['@peakpower'])
                var meanpower = parseFloat(item['@meanpower'])
                var duration = parseInt(item['@duration'])
                var maxdelay = parseInt(item['@maxdelay'])

                seriesData.push([totalDuration, meanpower], [totalDuration + duration , 0])
                //maxdelay = maxdelay < 100 ? maxdelay : 100 + Math.log(maxdelay -99)
                totalDuration += duration + 4
            }

            $scope.profileChart = {
                options: {
                    chart: {
                        type: 'area'
                    },
                    plotOptions: {
                        area: {
                            step: 'left',
                            //lineWidth: 2,
                            enableMouseTracking: true,
                            marker: {
                                enabled: false
                            }
                            //pointPadding: 0,
                            // groupPadding: 0,
                            // borderWidth: 0
                            //pointInterval: 3600000, // 1 hour
                            //pointStart: Date.UTC(2013, 0, 1, 0, 0, 0)
                        }
                    },
                    xAxis: {
                        type: 'linear',
                        minPadding: 0.1
                    }
                },
                loading: false,
                series: [
                    {
                        data: seriesData,
                        name: 'Phases and their respective Max delays'
                    }
                ],
                title: {
                    text: 'Dish Machine Power Profile'
                }
            }

            $scope.profileChart2 = ChartBuilder.applianceChart($scope.profile)

            /*
             $scope.profileChart2 = {
             chart: {
             animation: {
             duration: 1500,
             easing: 'swing'
             },
             type: 'area'
             },
             xAxis: {
             type: 'linear',
             minPadding: 0.1
             },
             plotOptions: {
             series: {
             step: 'left',
             //lineWidth: 2,
             enableMouseTracking: true,
             marker: {
             enabled: false
             }
             //pointPadding: 0,
             // groupPadding: 0,
             // borderWidth: 0
             //pointInterval: 3600000, // 1 hour
             //pointStart: Date.UTC(2013, 0, 1, 0, 0, 0)
             }
             },

             series: [
             {
             data: seriesData,
             name: 'Phases and their respective Max delays'
             }
             ],
             title: {
             text: 'Dish Machine Power Profile'
             }
             }*/
        })
    }])


    .controller("SimulationSetupController", ["$scope", "MyService", "ChartBuilder", function ($scope, MyService, ChartBuilder) {
        var profileIds = ['uno', 'due', 'tre', '4to']
        var applianceProfiles = []

        $scope.timeFormat = /^([01]\d|2[0-3]):?([0-5]\d)$/

        $scope.session = {
            username: undefined,
            password: undefined
        }

        for (var i = 0; i < profileIds.length; ++i) {
            applianceProfiles.push({
                chart: ChartBuilder.getCachedChart(profileIds[i]),
                profileId: profileIds[i],
                numberOfInstances: 0,
                appliances: [
                    /*                    {
                     name: undefined,
                     startTime: '00:00',
                     endTime: '23:59',
                     after: 0,
                     before: 1440
                     }*/
                ],

                change: function () {
                    console.log(this.numberOfInstances)
                    console.log(this.appliances.length)
                    while (this.numberOfInstances > this.appliances.length) {
                        this.appliances.push(
                            {
                                name: this.profileId + '-machine' + (1 + this.appliances.length),
                                startTime: '00:00',
                                endTime: '23:59',
                                after: 0,
                                before: 1440
                            }
                        )
                    }
                    while (this.numberOfInstances < this.appliances.length) {
                        this.appliances.pop()
                    }
                }
            })
        }

        $scope.applianceProfiles = applianceProfiles
        /*
         MyService.getAllPowerProfiles().then(function (data) {
         $scope.allProfiles = data.data.powerprofile
         })
         */
    }])


    .controller("SignUpController", ["$scope", "UserService", function ($scope, UserService) {
        $scope.signUp = function () {
            UserService.signUp($scope.email, $scope.password, $scope.username)
        }
    }]);


var tariffs = {
    "tariffprofile": [
        {
            "@label": "OneHour",
            "@href": "http://156.54.69.117:8080/swarm/base/tariffs/random3hour8tiers",
            "slotsize": "3600",
            "slots": "48",
            "totsalseconds": "172800",
            "totalhours": "48:00:00",
            "description": "Three Hour Random Eight Values",
            "costformula": " tariff * power^1.2 ",
            "min": "0.096601",
            "max": "0.47365403",
            "values": "0.31536186 0.31536186 0.31536186 0.30871126 0.30871126 0.30871126 0.1952225 0.1952225 0.1952225 0.096601 0.096601 0.096601 0.18119296 0.18119296 0.18119296 0.09969978 0.09969978 0.09969978 0.2853767 0.2853767 0.2853767 0.47365403 0.47365403 0.47365403 0.31536186 0.31536186 0.31536186 0.30871126 0.30871126 0.30871126 0.1952225 0.1952225 0.1952225 0.096601 0.096601 0.096601 0.18119296 0.18119296 0.18119296 0.09969978 0.09969978 0.09969978 0.2853767 0.2853767 0.2853767 0.47365403 0.47365403 0.47365403"
        },
        {
            "@label": "OneHour",
            "@href": "http://156.54.69.117:8080/swarm/base/tariffs/random1hour6tier",
            "slotsize": "3600",
            "slots": "48",
            "totsalseconds": "172800",
            "totalhours": "48:00:00",
            "description": "Hourly Random Six Values",
            "costformula": " tariff * power ",
            "min": "0.03",
            "max": "0.29",
            "values": "0.14 0.2 0.14 0.03 0.29 0.2 0.23 0.2 0.29 0.09 0.23 0.03 0.2 0.09 0.14 0.03 0.23 0.29 0.23 0.03 0.2 0.23 0.29 0.14 0.14 0.2 0.14 0.03 0.29 0.2 0.23 0.2 0.29 0.09 0.23 0.03 0.2 0.09 0.14 0.03 0.23 0.29 0.23 0.03 0.2 0.23 0.29 0.14"
        },
        {
            "@label": "OneHour",
            "@href": "http://156.54.69.117:8080/swarm/base/tariffs/fixed6tier",
            "slotsize": "3600",
            "slots": "48",
            "totsalseconds": "172800",
            "totalhours": "48:00:00",
            "description": "Fixed Six Tier Values",
            "costformula": " tariff * power ",
            "min": "0.03",
            "max": "0.36",
            "values": "0.03 0.03 0.03 0.03 0.2 0.2 0.2 0.2 0.15 0.15 0.15 0.15 0.36 0.36 0.36 0.36 0.1 0.1 0.1 0.1 0.32 0.32 0.32 0.32 0.03 0.03 0.03 0.03 0.2 0.2 0.2 0.2 0.15 0.15 0.15 0.15 0.36 0.36 0.36 0.36 0.1 0.1 0.1 0.1 0.32 0.32 0.32 0.32"
        }
    ]
}