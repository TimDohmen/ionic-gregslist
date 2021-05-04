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
import { computed, onBeforeUpdate, onMounted, reactive } from "vue";
import { carsService } from "@/services/CarsService";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { useRoute } from "vue-router";
import beforeRouteEnter from "../router/index";
export default {
  name: "Cars",
  beforeRouteEnter(to, from, next) {
    carsService.getCar(to.params.id);
    next();
  },
  setup() {
    const route = useRoute();
    // onBeforeUpdate(() => {
    //   carsService.getCar(route.params.id);
    // });
    // onMounted(() => {});

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