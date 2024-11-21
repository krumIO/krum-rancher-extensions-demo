import { IPlugin } from '@shell/core/types';
import { PRODUCT_NAME, BLANK_CLUSTER } from './config/app-launcher';
// import { MAIN_APP_LAUNCHER_LOCATION } from './routing/extension-routing';

export function init($plugin: IPlugin, store: any) {
  const { product } = $plugin.DSL(store, PRODUCT_NAME);

  // registering a top-level product
  product({
    category: 'global',
    icon: 'apps',
    inStore: 'management',
    weight: 100,
    to: {
      name: `${PRODUCT_NAME}-c-cluster`,
      path: `/${PRODUCT_NAME}/c/:cluster/dashboard`,
      params: {
        product: PRODUCT_NAME,
        cluster: BLANK_CLUSTER,
        pkg: PRODUCT_NAME
      }
    },
  });
}
