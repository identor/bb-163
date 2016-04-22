export function config ($logProvider, $mdThemingProvider, uiGmapGoogleMapApiProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('red');

  uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    libraries: 'weather,geometry,visualization'
  });
}

