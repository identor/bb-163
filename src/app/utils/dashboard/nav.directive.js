export function NavDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    template: `
      <md-sidenav ng-hide="vm.$ngmDashboard.isHideNav" class="site-sidenav md-sidenav-left
          md-whiteframe-z2" md-component-id="left"
          ng-click=""
          aria-label=""
          md-is-locked-open="$mdMedia('gt-sm')">
        <md-list>
          <md-list-item ng-repeat="it in ul.users">
              <md-button ng-click="" ng-class="">
                <md-icon md-svg-icon="" class="avatar"></md-icon>
              </md-button>
          </md-list-item>
        </md-list>
      </md-sidenav>
    `,
    controller: NavController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };

  return directive;
}

class NavController {
  constructor ($ngmDashboard) {
    'ngInject';

    this.$ngmDashboard = $ngmDashboard;
  }
}
