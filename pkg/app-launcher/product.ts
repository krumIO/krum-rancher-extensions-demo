import { IPlugin } from '@shell/core/types';
import { PRODUCT_NAME } from './config/app-launcher';
import { MAIN_APP_LAUNCHER_LOCATION } from './routing/extension-routing';

export function init($plugin: IPlugin, store: any) {
  const { product } = $plugin.DSL(store, PRODUCT_NAME);

  // registering a top-level product
  product({
    category: 'global',
    icon: 'apps',
    inStore: 'management',
    to: MAIN_APP_LAUNCHER_LOCATION,
    weight: 3,
  });
}
