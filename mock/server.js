

mockServer = angular.module('mockServer', ['swarmApp', 'ngMockE2E'])
mockServer.run(function($httpBackend) {
    console.log('RUNNING AMOK!');
    phones = [{name: 'phone1'}, {name: 'phone2'}];

    // returns the current list of phones
    $httpBackend.whenGET('/phones').respond(phones);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
        phones.push(angular.fromJson(data));
    });
    $httpBackend.whenGET(/^\/templates\//).passThrough();
});
