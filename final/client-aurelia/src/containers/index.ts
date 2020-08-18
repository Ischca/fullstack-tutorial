import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {

  config.globalResources([
    PLATFORM.moduleName('containers/action-button'),
    PLATFORM.moduleName('containers/book-trips'),
    PLATFORM.moduleName('containers/cart-item'),
    PLATFORM.moduleName('containers/logout-button'),
  ]);
}
