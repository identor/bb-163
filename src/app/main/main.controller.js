export class MainController {
  constructor ($ngmDashboard, $state, $appUserService, Firebase, $firebaseObject, firebaseUrl, $rootScope, $sessionStorage) {
    'ngInject';

    this.user = $rootScope.user = $sessionStorage.user;

    if (!this.user) {
      $state.go('login');
    }

    this.$ngmDashboard = $ngmDashboard;
    this.$appUserService = $appUserService;
    this.$ngmDashboard.fabOnClick = () => { $ngmDashboard.toggleNav() };

    this.ref = new Firebase(firebaseUrl);
    this.mapCoords = $firebaseObject(this.ref.child('map'));

    this.mapCoords.$loaded().then((coords) => {
      this.map = { center: { latitude: this.mapCoords.latitude, longitude: this.mapCoords.longitude }, zoom: 16 };
      this.marker = { id: Date.now(), coords: coords };

      this.mapCoords.$watch(() => {
        this.map.center = { latitude: this.mapCoords.latitude, longitude: this.mapCoords.longitude };
      });
    });
  }

  logout() {
    this.$appUserService.logout();
  }
}
