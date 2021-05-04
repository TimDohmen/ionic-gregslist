<template>
  <ion-col size="4">
    <ion-card>
      <!-- <img :src="carProp.img" /> -->
      <ion-card-header style="height=50%">
        <ion-img class="full-image" :src="carProp.img"></ion-img>
      </ion-card-header>
      <ion-card-content>
        <ion-card-subtitle>{{ carProp.make }}</ion-card-subtitle>
        <ion-card-title>{{ carProp.model }}</ion-card-title>
        <p>
          {{ carProp.description }}
        </p>
      </ion-card-content>
      <ion-button class="button button-full button-positive"
        >View Car</ion-button
      >
    </ion-card>
  </ion-col>
</template>

<script lang="ts">
import {
  IonCol,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonImg,
  IonButton,
} from "@ionic/vue";
import { AppState } from "@/AppState";
import { computed, reactive } from "vue";
export default {
  name: "CarComponent",
  props: {
    carProp: { type: Object, required: true },
  },
  setup() {
    const state = reactive({
      cars: computed(() => AppState.cars),
    });
    return {};
  },
  components: {
    IonCol,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonCardHeader,
    IonImg,
    IonButton,
  },
};
</script>

<style scoped>
</style>