'use strict';

angular.module('draftdApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
