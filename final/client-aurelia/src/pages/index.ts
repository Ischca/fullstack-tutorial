import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {

  config.globalResources([
    PLATFORM.moduleName('pages/launch'),
    PLATFORM.moduleName('pages/launches'),
    PLATFORM.moduleName('pages/cart'),
    PLATFORM.moduleName('pages/profile'),
  ]);
}
