'use strict';

/* Services */

(function (json) {

    var composeSeries = function (phases) {
        var totalDuration = 0
        var seriesSet = []
        for (var i = 0; i < phases.length; ++i) {
            var phase = phases[i]
            var series = {}
            series.name = phase.id
            series.pointStart = totalDuration

            if (angular.isArray(phase.energy) && phase.energy.length > 0) {
                series.pointInterval = phase.duration / phase.energy.length
                series.data = phase.energy
            } else {
                series.pointInterval = phase.duration
                series.data = [phase.meanpower]
            }

            seriesSet.push(series)
            totalDuration += phase.duration + 4
        }
        return seriesSet
    }

    var machineSpecs = angular.fromJson(json)
    var profile = machineSpecs.powerprofiles[0]
    if (!profile.energyphases) return null
    var seriesSet = composeSeries(profile.energyphases)
    var chartOption = {
        series: seriesSet
    }
    return chartOption


}({
    "category": "washing-machines",
    "maker": "indesotux",
    "modelid": "aquawash",
    "href": "http:\/\/156.54.69.117:8080\/swarm\/base\/profiles\/washing-machines\/indesotux-aquawash",
    "powerprofiles": [
        {
            "id": "cotton-full-60dg",
            "href": "http:\/\/156.54.69.117:8080\/swarm\/base\/profiles\/washing-machines\/indesotux-aquawash\/cotton-full-60dg",
            "totalduration": 45,
            "totalenergy": 667.6333,
            "energyphases": [
                {
                    "id": "boot-up",
                    "duration": 2,
                    "maxdelay": 0,
                    "peakpower": 150.0,
                    "meanpower": 70.0,
                    "biasedpower": 138.0,
                    "energy": [150.0, 22.0]
                },
                {
                    "id": "heating",
                    "duration": 13,
                    "maxdelay": 30,
                    "peakpower": 1950.0,
                    "meanpower": 1700.0,
                    "biasedpower": 1912.5,
                    "energy": [1800.0, 1850.0, 1950.0, 1576.5, 1645.4, 1875, 1900.0]
                },
                {
                    "id": "roll-one",
                    "duration": 6,
                    "maxdelay": 800,
                    "peakpower": 160.0,
                    "meanpower": 108.0,
                    "biasedpower": 152.2,
                    "energy": [128.0, 160.0, 158.0]
                },
                {
                    "id": "roll-two",
                    "duration": 3,
                    "maxdelay": 5,
                    "peakpower": 72.0,
                    "meanpower": 52.0,
                    "biasedpower": 69.0,
                    "energy": [35.0, 72.0, 85.7]
                },
                {
                    "id": "idle-one",
                    "duration": 5,
                    "maxdelay": 5,
                    "peakpower": 4.0,
                    "meanpower": 4.0,
                    "biasedpower": 4.0
                },
                {
                    "id": "pre-heating",
                    "duration": 3,
                    "maxdelay": 120,
                    "peakpower": 72.0,
                    "meanpower": 47.0,
                    "biasedpower": 68.25,
                    "energy": [22.8, 72.0, 64.7]
                },
                {
                    "id": "idle-two",
                    "duration": 4,
                    "maxdelay": 12,
                    "peakpower": 4.0,
                    "meanpower": 4.0,
                    "biasedpower": 4.0
                },
                {
                    "id": "cooling-one",
                    "duration": 4,
                    "maxdelay": 0,
                    "peakpower": 71.0,
                    "meanpower": 48.0,
                    "biasedpower": 67.55,
                    "energy": [22.8, 71.0, 64.7, 46.6]
                },
                {
                    "id": "cooling-two",
                    "duration": 4,
                    "maxdelay": 0,
                    "peakpower": 73.0,
                    "meanpower": 52.0,
                    "biasedpower": 69.85,
                    "energy": [62.8, 41.0, 73.0, 26.6]
                },
                {
                    "id": "idle-three",
                    "duration": 6,
                    "maxdelay": 160,
                    "peakpower": 4.0,
                    "meanpower": 4.0,
                    "biasedpower": 4.0
                },
                {
                    "id": "roll-three",
                    "duration": 15,
                    "maxdelay": 4,
                    "peakpower": 58.0,
                    "meanpower": 30.0,
                    "biasedpower": 53.800003,
                    "energy": [0.8, 11.7, 49.6, 58.0, 18.9]
                },
                {
                    "id": "spinning-one",
                    "duration": 8,
                    "maxdelay": 100,
                    "peakpower": 191.0,
                    "meanpower": 80.0,
                    "biasedpower": 174.35,
                    "energy": [2.0, 34.6, 45.8, 83.0, 143.5, 191.0, 184.4, 98.1]
                },
                {
                    "id": "spinning-two",
                    "duration": 9,
                    "maxdelay": 120,
                    "peakpower": 100.0,
                    "meanpower": 35.0,
                    "biasedpower": 90.25,
                    "energy": [6.0, 34.6, 45.8, 83.0, 100.0, 22.0, 18.4, 6.2, 0.8]
                },
                {
                    "id": "idle-four",
                    "duration": 15,
                    "maxdelay": 30,
                    "peakpower": 2.0,
                    "meanpower": 2.0,
                    "biasedpower": 2.0
                }
            ]
        }
    ]
}))


angular.module('swarmApp.services', ['ngResource'])
    .factory('ChartBuilder', function () {
        var chartsCache = {}

        return {

            getCachedChart: function (id) {
                for (var chart in chartsCache) return chartsCache[chart]
            },

            powerProfileChart: function (profile) {

                var composeSeries = function (phases) {
                    var totalDuration = 0
                    var seriesSet = []
                    for (var i = 0; i < phases.length; ++i) {
                        var phase = phases[i]
                        var series = {}
                        series.name = phase.id
                        series.pointStart = totalDuration

                        if (angular.isArray(phase.energy) && phase.energy.length > 0) {
                            series.pointInterval = phase.duration / phase.energy.length
                            series.data = phase.energy
                        } else {
                            series.pointInterval = phase.duration
                            series.data = [phase.meanpower]
                        }

                        seriesSet.push(series)
                        totalDuration += phase.duration + 4
                    }
                    return seriesSet
                }


                if (!profile.energyphases) return null
                var profileChart = chartsCache[profile.id]
                if (!profileChart) {
                    var series = composeSeries(profile.energyphases)
                }
            },

            applianceChart: function (jsonProfile) {
                if (!jsonProfile.energyphases) return null

                var profileChart = chartsCache[jsonProfile['@href']]
                if (!profileChart) {

                    var phases = jsonProfile.energyphases.energyphase
                    var totalDuration = 0
                    var seriesData = []
                    for (var i = 0; i < phases.length; ++i) {
                        var phase = phases[i]
                        var peakpower = parseFloat(phase['@peakpower'])
                        var meanpower = parseFloat(phase['@meanpower'])
                        var duration = parseInt(phase['@duration'])
                        var maxdelay = parseInt(phase['@maxdelay'])

                        seriesData.push([totalDuration, meanpower], [totalDuration + duration , 0])
                        //maxdelay = maxdelay < 100 ? maxdelay : 100 + Math.log(maxdelay -99)
                        totalDuration += duration + 4
                    }

                    profileChart = {
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
                            text: 'Power Profile ' + jsonProfile['@href']
                        }
                    }

                    chartsCache[jsonProfile['@href']] = profileChart

                }
                return profileChart
            }
        }
    })

    .factory('RestService', function ($http, $q) {
        return {
            isLogged: false,

            login: function (username, password) {
                var defer = $q.defer();
                $http.defaults.useXDomain = true;

                $http.get('json/' + username + '.json').
                    then(function (data) {
                        // this callback will be called asynchronously
                        // when the response is available
                        defer.resolve(data);
                        this.isLogged = true
                        alert('Login success ' + data.status)
                    }, function (data) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        defer.reject();
                        this.isLogged = false
                        alert('Login failure ' + data.status)
                    })
                return defer.promise;
            }
        }
    })

    .factory('MyService', function ($http, $q) {
        var defer = $q.defer();
        var restService = {};

        //restService.isLogged = false;

        restService.login = function (username, password) {

            //var self = this;
            $http.defaults.useXDomain = true;

            $http.get('json/' + username + '.json').
                then(function (data) {
                    // this callback will be called asynchronously
                    // when the response is available
                    defer.resolve(data)
                    //self.isLogged = true
                    //alert('Login success ' + data.status)
                }, function (data) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    defer.reject()
                    //alert('Login failure ' + data.status)
                })
            return defer.promise;
        }
        restService.getPowerProfile = function (profileId) {
            $http.get('json/' + profileId + '.json').
                then(function (data) {
                    // this callback will be called asynchronously
                    // when the response is available
                    defer.resolve(data)
                    //self.isLogged = true
                    //alert('Login success ' + data.status)
                }, function (data) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    defer.reject()
                    //alert('Login failure ' + data.status)
                })
            return defer.promise;
        }
        restService.getAllPowerProfiles = function () {
            $http.get('json/profiles.json').
                then(function (data) {
                    // this callback will be called asynchronously
                    // when the response is available
                    defer.resolve(data)
                    //self.isLogged = true
                    //alert('Login success ' + data.status)
                }, function (data) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    defer.reject()
                    //alert('Login failure ' + data.status)
                })
            return defer.promise;
        }
        restService.getProfile = {
            "@id": "5",
            "@href": "http://156.54.69.117:8080/swarm/base/profiles/dishmachine",
            "totalduration": "45",
            "totalenergy": "667.6333",
            "energyphases": {
                "energyphase": [
                    {"@id": "1", "@duration": "2", "@maxdelay": "0", "@peakpower": "150.0", "@meanpower": "70.0", "@biasedpower": "138.0"},
                    {"@id": "2", "@duration": "13", "@maxdelay": "30", "@peakpower": "1950.0", "@meanpower": "1700.0", "@biasedpower": "1912.5"},
                    {"@id": "3", "@duration": "6", "@maxdelay": "800", "@peakpower": "160.0", "@meanpower": "108.0", "@biasedpower": "152.2"},
                    {"@id": "4", "@duration": "5", "@maxdelay": "4", "@peakpower": "1960.0", "@meanpower": "1250.0", "@biasedpower": "1853.5"},
                    {"@id": "5", "@duration": "2", "@maxdelay": "0", "@peakpower": "170.0", "@meanpower": "166.0", "@biasedpower": "169.4"},
                    {"@id": "6", "@duration": "6", "@maxdelay": "44", "@peakpower": "1980.0", "@meanpower": "1750.0", "@biasedpower": "1945.5"},
                    {"@id": "7", "@duration": "11", "@maxdelay": "350", "@peakpower": "17.0", "@meanpower": "8.0", "@biasedpower": "15.65"}
                ]
            }
        }
        return restService
    });

