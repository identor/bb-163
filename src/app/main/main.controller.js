export class MainController {
  constructor ($ngmDashboard) {
    'ngInject';

    this.$ngmDashboard = $ngmDashboard;
    this.$ngmDashboard.fabOnClick = () => { $ngmDashboard.toggleNav() };

    this.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }

  fabOnClick() {
  }
}

