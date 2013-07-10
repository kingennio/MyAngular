var mockServer = angular.module('appMock', ['SwarmClient', 'ngMock']);
mockServer.run(function($httpBackend) {

    var customerList = [
        { _id: 123213, code: 'C1', name: 'Customer A'},
        { _id: 234234, code: 'C2', name: 'Customer B'},
        { _id: 322223, code: 'C3', name: 'Customer C'}];


    function findCustomerIndexById(id) {
        if (!id) return null;
        var index = -1;

        for(var i = 0; i < customerList.length; i++) {
            var o = customerList[i];
            if (id == o._id) {
                index = i;
                break;
            }
        }

        return index;
    }

    $httpBackend.whenGET("partials/partial1.html").respond("GET Called 1");
    $httpBackend.whenGET("partials/partial2.html").respond("GET Called 2");

    $httpBackend.whenGET(/\/api\/customers(\/\d*)*/).respond(function(method, url, data, headers) {
        var parts = url.replace("/api/customers", "").split("/");
        if (parts.length != 2) {
            return [200, customerList.slice()];
        }

        var id = parts[1];

        var index = findCustomerIndexById(id);

        if (index != -1) {
            return [200, customerList[index]];
        }

        return [404, "NOT-FOUND"];
    } );

    //$httpBackend.whenGET(/\/api\/customers/).respond(200, customerList.slice());


    $httpBackend.whenPOST("/api/customers").respond(function(method, url, data, headers) {
        console.log("POST -> " + url);
        var o = angular.fromJson(data);
        o._id = new Date().getTime();
        customerList.push(o);
        return [200, "Success"];
    } );

    $httpBackend.whenPUT(/\/base\/accounts(\/\w*)*/).respond(function(method, url, data, headers) {
        console.log("PUT -> " + url);

        var o = angular.fromJson(data);
        var index = findCustomerIndexById(o._id);

        if (index != -1) {
            customerList[index] = o;
            return [200, 'SUCCESS!!'];
        }

        return [404, 'NOT-FOUND!!'];
    } );


    $httpBackend.whenDELETE(/\/api\/customers\/\d*/).respond(function(method, url, data, headers) {
        console.log("DELETE -> " + url);

        var parts = url.replace("/api/customers", "").split("/");
        if (parts.length != 2) {
            return [409, "invalid id"];
        }

        var id = parts[1];

        var index = findCustomerIndexById(id);

        if (index != -1) {
            customerList.splice(index, 1);
            return [200, 'SUCCESS!!'];
        }

        return [404, 'NOT-FOUND!!'];
    } );

    $httpBackend.whenGET(/^\/templates\//).passThrough();
});
