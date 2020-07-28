import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {

  config.globalResources([
    PLATFORM.moduleName('components/button'),
    PLATFORM.moduleName('components/footer'),
    PLATFORM.moduleName('components/header'),
    PLATFORM.moduleName('components/launch-detail'),
    PLATFORM.moduleName('components/launch-tile'),
    PLATFORM.moduleName('components/loading'),
    PLATFORM.moduleName('components/login-form'),
    PLATFORM.moduleName('components/menu-item'),
    PLATFORM.moduleName('components/page-container'),
  ]);
}
