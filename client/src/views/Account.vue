<template>
  <ion-page>
    <ion-header class="row">
      <ion-toolbar>
        <ion-title>Account Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size-md="3" offset-md="1">
            <img :src="state.account.picture" alt="" />
          </ion-col>
          <ion-col size-md="6">
            <h3>Welcome to your account page {{ state.account.name }}</h3>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { AppState } from "@/AppState";
import { computed, onMounted, reactive } from "vue";
export default {
  name: "Tab1",
  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      newCar: {},
    });
    return {
      state,
    };
  },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>