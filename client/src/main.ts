import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import bootstrap from 'bootstrap'
import jquery from 'jquery'
import popper from 'popper.js'

import {
  IonicVue,
  IonPage,
  IonCol,
  IonGrid,
  IonRow,
  IonContent,
  IonInput,
  IonButton,
  IonFab,
  IonFabList,
  IonIcon,
} from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(bootstrap)
  .use(jquery, popper)

app.component('ion-page', IonPage)
app.component('ion-grid', IonGrid)
app.component('ion-row', IonRow)
app.component('ion-col', IonCol)
app.component('ion-content', IonContent)
app.component('ion-input', IonInput)
app.component('ion-button', IonButton)
app.component('ion-fab-list', IonFabList)
app.component('ion-fab', IonFab)
app.component('ion-icon', IonIcon)

router.isReady().then(() => {
  app.mount('#app');
});