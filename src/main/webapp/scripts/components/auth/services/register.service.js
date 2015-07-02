'use strict';

angular.module('draftdApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


