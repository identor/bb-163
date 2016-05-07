export class LoginController {
  constructor ($appUserService, $log, $state, $rootScope, $sessionStorage, $mdDialog) {
    'ngInject';

    this.$appUserService = $appUserService;
    this.$log = $log;
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$sessionStorage = $sessionStorage;
    this.$mdDialog = $mdDialog;

    this.$rootScope.user = $sessionStorage.user;

    if (this.$rootScope.user) {
      this.$state.go('home');
    }
  }

  login(evt) {
    this.isLoading = true;
    this.$appUserService.login({
      email: this.email,
      password: this.password
    }).then(() => {
      this.$state.go('home');
    }).catch(() => {
      let alert = this.$mdDialog.alert()
        .title('Error')
        .textContent('Password or email address is not valid!')
        .targetEvent(evt)
        .ok('Ok')
      this.$mdDialog.show(alert);
      this.isLoading = false;
    });
  }
}
