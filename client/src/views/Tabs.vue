<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="cars" href="/tabs/cars">
          <ion-icon :icon="triangle" />
          <ion-label>Cars</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="jobs" href="/tabs/jobs">
          <ion-icon :icon="ellipse" />
          <ion-label>Jobs</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="homes" href="/tabs/homes">
          <ion-icon :icon="square" />
          <ion-label>Houses</ion-label>
        </ion-tab-button>
        <ion-tab-button
          tab="login"
          @click="login"
          v-if="!state.user.isAuthenticated"
        >
          <ion-icon :icon="person" />
          <ion-label>Login</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="account" v-else href="/tabs/account">
          <!-- <ion-thumbnail>
            <ion-img :src="state.user.picture" />
          </ion-thumbnail> -->
          <ion-label>{{ state.user.name }}</ion-label>
        </ion-tab-button>
        <ion-tab-button
          tab="logout"
          v-if="state.user.isAuthenticated"
          @click="logout"
        >
          <ion-icon :icon="exitOutline"></ion-icon>
          <ion-label>Logout</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { ellipse, square, triangle, person, exitOutline } from "ionicons/icons";
import { AuthService } from "@/services/AuthService";
import { computed, reactive } from "vue";
import { AppState } from "@/AppState";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
    });
    return {
      state,
      ellipse,
      square,
      triangle,
      person,
      exitOutline,
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout();
      },
    };
  },
};
</script>

<style>
</style>