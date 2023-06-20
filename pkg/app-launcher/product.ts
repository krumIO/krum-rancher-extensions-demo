import { IPlugin } from '@shell/core/types';

export function init($plugin: IPlugin, store: any) {
  const YOUR_PRODUCT_NAME = 'App Launcher';

  const { product } = $plugin.DSL(store, YOUR_PRODUCT_NAME);

  product({
    icon:    'apps',
    inStore: 'management',
    weight:  100
  });
}
