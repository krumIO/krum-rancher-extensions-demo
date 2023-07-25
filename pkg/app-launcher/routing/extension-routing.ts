import type { RouteConfig } from 'vue-router';
import { interopDefault } from '@shell/utils/nuxt';
import { PRODUCT_NAME } from '../config/app-launcher';

const MAIN_APP_LAUNCHER_LOCATION: RouteConfig = {
  component: () => interopDefault(import('../pages/app-launcher.vue')),
  name: PRODUCT_NAME,
  path: `/${PRODUCT_NAME}`,
};
const routes = [MAIN_APP_LAUNCHER_LOCATION];

export { MAIN_APP_LAUNCHER_LOCATION };
export default routes;
