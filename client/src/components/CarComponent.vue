<template>
  <ion-col size-md="4" @click="viewCar">
    <ion-card>
      <!-- <img :src="carProp.img" /> -->
      <ion-card-header style="height=50%">
        <ion-img class="full-image" :src="carProp.img"></ion-img>
      </ion-card-header>
      <ion-card-content>
        <ion-card-subtitle>{{ carProp.make }}</ion-card-subtitle>
        <ion-card-title>{{ carProp.model }}</ion-card-title>
        <p>{{ carProp.mileage }} Miles</p>
        <p class="overflow">
          {{ carProp.description }}
        </p>
      </ion-card-content>
      <ion-button class="button button-full button-positive"
        >View Car Details</ion-button
      >
    </ion-card>
  </ion-col>
</template>

<script lang="ts">
import {
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
import { useRouter } from "vue-router";
export default {
  name: "CarComponent",
  props: {
    carProp: { type: Object, required: true },
  },
  setup(props) {
    const router = useRouter();
    const state = reactive({
      cars: computed(() => AppState.cars),
    });
    return {
      state,
      viewCar() {
        router.push({ name: "CarDetails", params: { id: props.carProp.id } });
      },
    };
  },
  components: {
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
.overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>