<template>
  <ion-app>
    <ion-router-outlet/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';

import { AppState } from '@/AppState';
import { defineComponent, computed, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const state= reactive({
      AppState: computed(()=> AppState)
    })
    return {
      state,
    }
  },
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>


<style >
/* @import 'bootstrap'; */
  
</style>