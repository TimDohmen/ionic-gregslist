<template>
  <ion-page>
    <ion-fab vertical="" horizontal="end" edge slot="fixed" class="mr-3">
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="bottom" v-if="state.user.isAuthenticated">
        <ion-fab-button @click="viewProfile"
          ><ion-icon :icon="personCircleOutline"></ion-icon
        ></ion-fab-button>
        <ion-fab-button @click="logout"
          ><ion-icon :icon="exitOutline"></ion-icon
        ></ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="bottom" v-else>
        <ion-fab-button @click="login"
          ><ion-icon :icon="enterOutline"></ion-icon
        ></ion-fab-button>
      </ion-fab-list>
    </ion-fab>

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
        <!-- <ion-tab-button
          tab="login"
          @click="login"
          v-if="!state.user.isAuthenticated"
        >
          <ion-icon :icon="person" />
          <ion-label>Login</ion-label>
        </ion-tab-button> -->
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
import {
  ellipse,
  square,
  triangle,
  person,
  add,
  personCircleOutline,
  exitOutline,
  enterOutline,
} from "ionicons/icons";

import { AuthService } from "@/services/AuthService";
import { computed, reactive } from "vue";
import { AppState } from "@/AppState";
import { useRouter } from "vue-router";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    const router = useRouter();
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
      enterOutline,
      add,
      personCircleOutline,
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout();
      },
      viewProfile() {
        router.push({ name: "Account" });
      },
    };
  },
};
</script>

<style>
</style>