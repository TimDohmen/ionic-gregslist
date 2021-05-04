<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="mt-5 mt-md-3">
          <h3>
            {{ state.car.make + " " + state.car.model }}
          </h3>
          <p>{{ state.car.mileage }} Miles</p>
        </ion-title>
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
          <ion-col size="12">
            <ion-card v-if="state.car.creator">
              <ion-item>
                <!-- <ion-row>
                  <ion-col size="8"> -->
                <ion-avatar>
                  <img :src="state.car.creator.picture" />
                </ion-avatar>
                <h2 class="ml-2">{{ state.car.creator.name }}</h2>
                <!-- <ion-item-divider color="secondary"> -->
                <!-- <ion-label> Secondary Item Divider </ion-label> -->
                <!-- </ion-item-divider> -->

                <!-- </ion-col> -->
                <!-- <ion-col size="4"> -->
                <!-- </ion-col> -->
                <!-- </ion-row> -->
              </ion-item>

              <ion-img :src="state.car.img" />

              <ion-card-content>
                <p>
                  {{ state.car.description }}
                </p>
              </ion-card-content>

              <ion-row>
                <ion-col>
                  <button ion-button color="primary" clear small icon-start>
                    <ion-icon name="thumbs-up"></ion-icon>
                    12 Likes
                  </button>
                </ion-col>
                <ion-col>
                  <button ion-button color="primary" clear small icon-start>
                    <ion-icon name="text"></ion-icon>
                    4 Comments
                  </button>
                </ion-col>
                <ion-col align-self-center text-center>
                  <ion-note
                    >Posted {{ state.car.createdAt.split("T")[0] }}
                  </ion-note>
                </ion-col>
              </ion-row>
            </ion-card>
          </ion-col>
        </ion-row>
        <!--   <ion-row v-if="state.user.isAuthenticated">
          <ion-col size="12"> </ion-col>
        </ion-row> -->
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { AppState } from "@/AppState";
import { computed, reactive } from "vue";
import { carsService } from "@/services/CarsService";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
export default {
  name: "Cars",
  beforeRouteEnter(to, from, next) {
    carsService.getCar(to.params.id);
    next();
  },
  setup() {
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

<style >
</style>