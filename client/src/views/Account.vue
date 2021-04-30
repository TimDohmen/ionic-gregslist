<template>
  <ion-page >
    <ion-header class="row">
      <ion-toolbar>
        <ion-title>{{state.account.name}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="row">
        <ion-title> 
          <h3>
          Welcome to your account page
          </h3> 
          </ion-title>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import { AppState } from '@/AppState';
import { computed, onMounted, reactive } from 'vue';
export default  { 
  name: 'Tab1',
    setup() {
    const state= reactive({
      account: computed(()=> AppState.account),
      newCar: {}
    })
    return {
     state,
    }
  },
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>