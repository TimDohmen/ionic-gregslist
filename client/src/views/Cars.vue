<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Cars</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense" class="col-12">
        <ion-toolbar>
          <ion-title size="large">Carsz</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <ion-grid>
        <ion-row v-if="state.user.isAuthenticated">
          <ion-col size="12">
            <ion-label>Enter Car Stats</ion-label>
          </ion-col>
          <!-- <ion-col size="12" class="">
            <ion-item>
              <ion-input
                v-model="state.newCar.make"
                placeholder="Make"
              ></ion-input>
              <ion-input
                v-model="state.newCar.model"
                placeholder="Model"
              ></ion-input>
              <ion-input
                v-model="state.newCar.description"
                placeholder="Description"
              ></ion-input>
              <ion-input
                v-model="state.newCar.img"
                placeholder="Img"
              ></ion-input>
              <ion-input
                name="price"
                placeholder="Price"
                type="number"
                v-model="state.newCar.price"
              ></ion-input>
              <section class="full-width">
                <ion-button expand="full" color="secondary" @click="createCar"
                  >Create Car!</ion-button
                >
              </section>
            </ion-item>
          </ion-col> -->

          <ion-col size="3">
            <ion-item>
              <ion-input
                v-model="state.newCar.make"
                placeholder="Make"
              ></ion-input> </ion-item
          ></ion-col>
          <ion-col size="3">
            <ion-item>
              <ion-input
                v-model="state.newCar.model"
                placeholder="Model"
              ></ion-input> </ion-item
          ></ion-col>
          <ion-col size="3">
            <ion-item>
              <ion-input
                v-model="state.newCar.description"
                placeholder="Description"
              ></ion-input> </ion-item
          ></ion-col>
          <ion-col size="3">
            <ion-item>
              <ion-input
                v-model="state.newCar.img"
                placeholder="Img"
              ></ion-input> </ion-item
          ></ion-col>
          <ion-col size="3">
            <ion-item>
              <ion-input
                name="price"
                placeholder="Price"
                type="number"
                v-model="state.newCar.price"
              ></ion-input> </ion-item
          ></ion-col>
          <ion-col size="3">
            <ion-item>
              <ion-input
                name="mileage"
                placeholder="Mileage"
                type="number"
                v-model="state.newCar.mileage"
              ></ion-input> </ion-item
          ></ion-col>
          <ion-col size="3">
            <ion-button
              expand="block"
              class=""
              color="secondary"
              @click="createCar"
              >Create Car!</ion-button
            >
          </ion-col>
        </ion-row>
        <ion-row>
          <!-- <ExploreContainer name="Tab 1 page" /> -->
          <CarComponent
            v-for="car in state.cars"
            :key="car._id"
            :carProp="car"
          />
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// import ExploreContainer from '@/components/ExploreContainer.vue';
import CarComponent from "@/components/CarComponent.vue";
import { AppState } from "@/AppState";
import { computed, onMounted, reactive } from "vue";
import { carsService } from "@/services/CarsService";
import { IonItem, IonLabel, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
export default {
  name: "Cars",
  setup() {
    onMounted(() => {
      carsService.getCars();
    });
    const state = reactive({
      cars: computed(() => AppState.cars),
      user: computed(() => AppState.user),
      newCar: {},
    });
    return {
      state,
      createCar() {
        carsService.createCar(state.newCar);
        state.newCar = {};
      },
    };
  },
  components: {
    CarComponent,
    IonLabel,
    IonItem,
    IonHeader,
    IonTitle,
    IonToolbar,
  },
};
</script>

<style scoped>
</style>