<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ state.car.make + " " + state.car.model }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense" class="col-12">
        <ion-toolbar>
          <ion-title size="large">Carsz</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <ion-grid>
        <ion-row>
          <ion-col size="12"> <h3>Some car data</h3> </ion-col>
        </ion-row>
        <!--   <ion-row v-if="state.user.isAuthenticated">
          <ion-col size="12"> </ion-col>
        </ion-row> -->
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// import ExploreContainer from '@/components/ExploreContainer.vue';
import { AppState } from "@/AppState";
import { computed, onMounted, reactive } from "vue";
import { carsService } from "@/services/CarsService";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { useRoute } from "vue-router";
export default {
  name: "Cars",
  setup() {
    const route = useRoute();
    onMounted(() => {
      carsService.getCar(route.params.id);
    });
    const state = reactive({
      car: computed(() => AppState.car),
      user: computed(() => AppState.user),
    });
    return {
      state,
    };
  },
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
  },
};
</script>