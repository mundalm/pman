pmanApp.config(function($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'customerController',
				templateUrl: 'partials/customerPartial.html'
			})
		.when('/projects',
			{
				controller: 'projectController',
				templateUrl: 'partials/projectPartial.html'
			})
		.when('/leaders',
			{
				controller: 'leaderController',
				templateUrl: 'partials/leaderPartial.html'
			})
		.when('/calculations',
			{
				controller: 'calculationController',
				templateUrl: 'partials/calculationPartial.html'
			})
		.when('/test',
			{
				controller: 'customerController',
				templateUrl: 'partials/test.html'
			})
		.otherwise({redirectTo: '/'});
});