export class MainController {
  constructor ($ngmDashboard, Firebase, $firebaseObject, firebaseUrl) {
    'ngInject';

    this.$ngmDashboard = $ngmDashboard;
    this.$ngmDashboard.fabOnClick = () => { $ngmDashboard.toggleNav() };

    this.ref = new Firebase(firebaseUrl);
    this.mapCoords = $firebaseObject(this.ref.child('map'));

    this.mapCoords.$loaded().then((coords) => {
      this.map = { center: { latitude: this.mapCoords.latitude, longitude: this.mapCoords.longitude }, zoom: 20 };
      this.marker = { id: Date.now(), coords: coords };

      this.mapCoords.$watch(() => {
        this.map.center = { latitude: this.mapCoords.latitude, longitude: this.mapCoords.longitude };
      });
    });
  }
}
