export function NavDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    template: `
      <md-sidenav ng-hide="nav.$ngmDashboard.isHideNav" class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia('gt-sm')" layout="column">
        <md-toolbar layout="row" layout-align="center center">
          <md-button>
            <span>BB 163</span>
          </md-button>
          <span flex></span>
          <md-button class="md-icon-button" ng-click="console.log('hello')">
            <md-icon>exit_to_app</md-icon>
          </md-button>
        </md-toolbar>
        <md-list>
          <md-list-item ng-click="console.log('Heasdfasdf')">
            <md-icon>location_on</md-icon>
            <p>Locate device</p>
          </md-list-item>
        </md-list>
        {{ vm }}
        <span flex></span>
      </md-sidenav>
    `,
    controller: NavController,
    controllerAs: 'nav',
    bindToController: true,
    replace: true
  };

  return directive;
}

class NavController {
  constructor ($ngmDashboard, $appUserService) {
    'ngInject';

    this.$ngmDashboard = $ngmDashboard;
    this.$appUserService = $appUserService;
  }

  logout() {
    this.$appUserService.logout();
  }
}
