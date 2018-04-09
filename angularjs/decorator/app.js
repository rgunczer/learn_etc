angular.module('App', [])

    .constant('apiUrl', 'http://127.0.0.1:8080')

    .config(function($provide, apiUrl) {

        console.log('apiUrl: ' + apiUrl);

        $provide.decorator('$log', function ($delegate) {
            var originalWarn = $delegate.warn;
            $delegate.warn = function(msg) {
                msg = 'Decorated Warn: ' + msg;
                originalWarn.apply($delegate, arguments);
            }
            return $delegate;
        });

        $provide.decorator('$http', function($delegate) {
            var originalFn = $delegate.get;
            $delegate.get = function() {
                var args = [].slice.call(arguments);
                console.log(args[0]);
                args[0] = apiUrl + '/data/' + args[0];

                return originalFn.apply(null, args);
            }
            return $delegate;
        });

    })

    .controller('myController', function ($scope, $log, $http) {
        $scope.text = 'If you can read this then AngularJS is working fine';
        $log.info('hello from myController');
        $log.warn('hello warn');

        //$http.get('../data/colors.json')
        $http.get('colors.json')
            .then(function(response) {
                $log.info(angular.toJson(response.data, true));
            })
    });

