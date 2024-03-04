import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';
import "./style.css";

export default (app: App) => {
  app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});
};