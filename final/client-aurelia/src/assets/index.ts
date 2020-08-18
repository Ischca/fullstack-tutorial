import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {

  config.globalResources([
    PLATFORM.moduleName('assets/icons/home-icon.html'),
    PLATFORM.moduleName('assets/icons/cart-icon.html'),
    PLATFORM.moduleName('assets/icons/exit-icon.html'),
    PLATFORM.moduleName('assets/icons/profile-icon.html'),
    PLATFORM.moduleName('assets/curve.html'),
    PLATFORM.moduleName('assets/logo.html'),
    PLATFORM.moduleName('assets/rocket.html'),
  ]);
}
