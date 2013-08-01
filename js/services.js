'use strict';

/* Services */

angular.module('swarmApp.services', ['ngResource'])
    .value('version', '0.1')

    .factory('Phone', function ($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        })
    })

    .factory('UsingResource', function ($resource) {
        var accountResource = $resource('base/account/:name', {}, {
            put: {method: 'PUT', params: {name: 'username'}}
        })

        return {
            account: $resource('schedules/:key/setups/:sid/runs/:rid', {}, {

            }),

            login: function (username, password) {
                return accountResource.put(username)
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

