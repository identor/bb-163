export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/components/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
  ;

  $urlRouterProvider.otherwise('/');
}
