'use strict';
//http://newtriks.com/2013/11/29/environment-specific-configuration-in-angularjs-using-grunt/
//http://stackoverflow.com/questions/16930473/angularjs-factory-http-get-json-file
//http://mindthecode.com/how-to-use-environment-variables-in-your-angular-application/
//http://chariotsolutions.com/blog/post/angularjs-corner-using-promises-q-handle-asynchronous-calls/
angular.module('prometheus-mobile.config', [])
.constant('configuration', {
    name: "Prometheus-App-Mobile",
    version: "0.0.1",
    environment: "QLF",
    lang: "fr",
    applicationMode: "MOCKUP",
    webServiceURL: "http://localhost:8080/prometheus/api/",
    dictionnary: {
        MAIL : "Mail"

    }
});