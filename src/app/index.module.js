'use strict';

// Angular Modules
import './utils';

import * as moment from 'moment';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './components/login/login.controller';

angular.module('bb163', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ngMaterial',
    'firebase',
    'ngmUtils',
    'uiGmapgoogle-maps'
  ])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
;

